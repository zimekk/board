import Queue from "bull";
import { config } from "dotenv";
import { seconds } from "milliseconds";
import { resolve } from "path";
import { z } from "zod";

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

export const chrome = async (...args: string[]) =>
  (await import("@dev/chrome")).chrome(...args);

export const parse = async ({ id, data, returnvalue }) => (
  console.log(["parse"], { data }),
  fetch(`${ROBOT_URL}parse`, {
    method: "post",
    body: JSON.stringify({ id, data, returnvalue }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => (res.status === 200 ? res.json() : res.text()))
);

export const client = () => {
  const NAME_SCRAP = "scrap";
  const NAME_PARSE = "parse";
  const queue = new Queue<Data>(QUEUE_NAME, REDIS_URL, {
    limiter: {
      max: 1, // Max number of jobs processed
      duration: seconds(15), // per duration in milliseconds
    },
  });

  const q = {
    async produce(
      data: Data,
      opts = {
        // repeat: { cron: "1 10,22 * * *" },
      }
    ) {
      await queue.add(NAME_SCRAP, data, {
        attempts: 1, // 5 - If job fails it will retry till 5 times
        backoff: seconds(10), // 5000 - static 5 sec delay between retry
        delay: seconds(1),
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
              await queue.add(
                NAME_PARSE,
                { id, data, returnvalue },
                {
                  attempts: 1, // 5 - If job fails it will retry till 5 times
                  backoff: seconds(10), // 5000 - static 5 sec delay between retry
                  delay: seconds(1),
                  // ...opts,
                }
              );
            }
          }
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
