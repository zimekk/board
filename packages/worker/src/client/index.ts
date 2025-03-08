import { Type, getTypeByUrl } from "@dev/schema";
import Queue from "bull";
import { config } from "dotenv";
import { seconds } from "milliseconds";
import { resolve } from "path";
import { z } from "zod";
import PromoTransform from "./promo";

config({ path: resolve(__dirname, "../../../.env") });

const { REDIS_URL, ROBOT_URL, QUEUE_NAME } = z
  .object({
    REDIS_URL: z.string().default("redis://127.0.0.1:6379"),
    ROBOT_URL: z.string().default("https://zimekk.github.io/board/"),
    QUEUE_NAME: z.string().default("robot"),
  })
  .parse(process.env);

export const DataSchema = z.object({
  url: z.string(),
  body: z.object({}).passthrough().optional(),
});

export const OptsSchema = z.object({
  delay: z.number().default(0),
  priority: z.number().optional(),
  removeOnComplete: z.union([z.boolean(), z.number()]).optional(),
  repeat: z
    .object({
      cron: z.string().optional(),
    })
    .optional(),
  timestamp: z.number().optional(),
});

export const EntrySchema = z
  .object({
    id: z.string(),
    data: z.object({}).passthrough(),
    opts: z.any(),
    returnvalue: z.object({}).passthrough(),
  })
  .passthrough();

type Data = any;

export const chrome = async (url: string) =>
  url.match(new RegExp("warszawa.pl/api/action"))
    ? await fetch(url)
        .then((res) => res.json())
        .then((json) => (console.log(json), { url, json }))
    : (await import("@dev/chrome")).chrome(url);

export const parse = async (
  { id, data, returnvalue },
  url = `${ROBOT_URL}parse`,
) => (
  console.log(["parse"], { url, data }),
  fetch(url, {
    method: "post",
    body: JSON.stringify({ id, data, returnvalue }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      (res) =>
        new Promise((resolve, reject) =>
          res.ok ? res.json().then(resolve) : res.text().then(reject),
        ),
    )
    .catch((e) => {
      console.error(e);
      return Promise.reject(`Error: ${e}`);
    })
);

export const client = () => {
  const NAME_SCRAP = "scrap";
  const NAME_PARSE = "parse";
  const queue = new Queue<Data>(QUEUE_NAME, REDIS_URL, {
    limiter: {
      max: 1, // Max number of jobs processed
      duration: seconds(45), // per duration in milliseconds
    },
  });

  const q = {
    async produce(
      data: Data,
      opts = {
        // repeat: { cron: "1 10,22 * * *" },
      },
    ) {
      await queue.add(NAME_SCRAP, data, {
        attempts: 2, // 5 - If job fails it will retry till 5 times
        backoff: seconds(30), // 5000 - static 5 sec delay between retry
        delay: seconds(15),
        removeOnComplete: 3, // 3 - A number specified the amount of jobs to keep.
        ...opts,
      });
      return q;
    },
    async process() {
      queue
        .on(
          "completed",
          async ({ id, name, data, opts, finishedOn }, returnvalue) => {
            console.log(["completed"], { id, name, data, opts, finishedOn });
            if (name === NAME_SCRAP && returnvalue.json) {
              const { status, redirect_to } = returnvalue.json;
              console.log({ data, status, redirect_to });

              if (status === "301") {
                console.log({ returnvalue });

                queue.add(
                  NAME_SCRAP,
                  {
                    url: String(
                      ((u) =>
                        Object.assign(u, { pathname: `/${redirect_to}` }))(
                        new URL(data.url),
                      ),
                    ),
                  },
                  {
                    attempts: 2, // 5 - If job fails it will retry till 5 times
                    backoff: seconds(30), // 5000 - static 5 sec delay between retry
                    delay: seconds(15),
                    // ...opts,
                  },
                );
              } else {
                await queue.add(
                  NAME_PARSE,
                  { id, data, returnvalue },
                  {
                    attempts: 1, // 5 - If job fails it will retry till 5 times
                    backoff: seconds(15), // 5000 - static 5 sec delay between retry
                    delay: seconds(1),
                    // ...opts,
                  },
                );
              }
            } else if (
              name === NAME_SCRAP &&
              getTypeByUrl(data.url) === Type.PROMO
            ) {
              const { json } = await z
                .object({
                  html: z.string(),
                })
                .transform(PromoTransform)
                .parseAsync(returnvalue);

              const list = json.list
                .map((data) => ({ ...data, url: data.href }))
                .filter(
                  ({ url }) => url && new RegExp("//promocje.").test(url),
                );

              console.log({ list });

              return list.reduce(
                (promise, data) =>
                  promise.then(() =>
                    queue.add(NAME_SCRAP, data, {
                      attempts: 2, // 5 - If job fails it will retry till 5 times
                      backoff: seconds(30), // 5000 - static 5 sec delay between retry
                      delay: seconds(15),
                      // ...opts,
                    }),
                  ),
                Promise.resolve(),
              );
            }
          },
        )
        .process(NAME_PARSE, async function (job) {
          const { data } = job;

          console.log(["process"], NAME_PARSE, data);
          await job.log(`process ${NAME_PARSE}`);
          await job.progress(50);
          const returnvalue = await parse(data);

          await job.progress(100);

          console.log(["success"], NAME_PARSE);
          await job.log(`success ${NAME_PARSE}`);

          return returnvalue;
        });
      await queue.process(NAME_SCRAP, async function (job) {
        const { data } = job;

        console.log(["process"], NAME_SCRAP, data);
        await job.log(`process ${NAME_SCRAP}`);
        await job.progress(50);

        const returnvalue = await chrome(data.url);
        // .then((returnvalue) => {
        //   if (returnvalue.html && returnvalue.url !== data.url) {
        //     console.log(["failure"], NAME_SCRAP);
        //     throw new Error(`Invalid response url: ${returnvalue.url}`);
        //   }
        //   return returnvalue;
        // });

        await job.progress(100);

        console.log(["success"], NAME_SCRAP);
        await job.log(`success ${NAME_SCRAP}`);

        return returnvalue;
      });

      return q;
    },
    close() {
      return queue.close();
    },
    queue,
  };

  return q;
};
