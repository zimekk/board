import { createBullBoard } from "@bull-board/api";
import { BullAdapter } from "@bull-board/api/bullAdapter";
import { ExpressAdapter } from "@bull-board/express";
import { Router, json } from "express";
import { z } from "zod";
import {
  DataSchema,
  EntrySchema,
  OptsSchema,
  chrome,
  client,
  parse,
} from "../client";
import { remote } from "../remote";

export const router = () => {
  const BASE_PATH = "/board";

  const serverAdapter: any = new ExpressAdapter();
  serverAdapter.setBasePath(BASE_PATH);

  setInterval(() => remote(), 10_000);

  const worker = client();

  worker.process();

  createBullBoard({
    queues: [new BullAdapter(worker.queue)],
    serverAdapter,
  });

  return Router()
    .post("/scrap", json(), async (req, res, next) =>
      z
        .object({
          id: z.string(),
          data: DataSchema,
        })
        .parseAsync(req.body)
        .then(({ id, data }) =>
          (console.log(["scrap"], { data }), chrome(data.url))
            // .then((returnvalue) => {
            //   if (returnvalue.html && returnvalue.url !== data.url) {
            //     throw new Error(`Invalid response url: ${returnvalue.url}`);
            //   }
            //   return returnvalue;
            // })
            .then((returnvalue) => res.json({ id, data, returnvalue })),
        )
        .catch(next),
    )
    .post("/parse", json({ limit: "10mb" }), async (req, res, next) =>
      z
        .object({
          id: z.string(),
          data: DataSchema,
          returnvalue: z.unknown(),
        })
        .parseAsync(req.body)
        .then(parse)
        .then((data) => res.json(data))
        .catch(next),
    )
    .post("/process", json(), async (req, res) => {
      const { data, opts } = await z
        .object({
          data: DataSchema,
          opts: OptsSchema.optional(),
        })
        .parseAsync(req.body);

      await worker.produce(data, opts);

      return res.json({ status: "ok" });
    })
    .post("/entries/delete", json(), async (req, res) =>
      z
        .object({
          selected: z.string().array(),
        })
        .parseAsync(req.body)
        .then(async ({ selected }) =>
          selected
            .reduce(
              (promise, id) => promise.then(() => worker.queue.removeJobs(id)),
              Promise.resolve(),
            )
            .then(() => res.json({ status: "ok" })),
        ),
    )
    .post("/entries", json(), async (req, res, next) =>
      z
        .object({
          start: z.number().default(0),
          limit: z.number().default(250),
          type: z.string().default(""),
          data: z.boolean().default(false),
          returnvalue: z.boolean().default(true),
        })
        .parseAsync(req.body)
        .then(async ({ start, limit, type }) => {
          const list = (
            await worker.queue.getCompleted(start, start + limit - 1)
          ).map((job) => job.toJSON());
          return EntrySchema.array()
            .parseAsync(list)
            .then((list) =>
              list.filter((item) => type === "" || item.type === type),
            );
        })
        .then((entries) => res.json(entries))
        .catch(next),
    )
    .post("/delayed", json(), async (req, res) =>
      z
        .object({})
        .parseAsync(req.body)
        .then(async () => {
          const list = (await worker.queue.getDelayed()).map((job) =>
            job.toJSON(),
          );
          return z.looseObject({}).array().parseAsync(list);
        })
        .then((entries) => res.json(entries)),
    )
    .post("/failed/retry", json(), async (req, res) =>
      z
        .object({
          selected: z.string().array(),
        })
        .parseAsync(req.body)
        .then(async ({ selected }) =>
          selected
            .reduce(
              (promise, id) =>
                promise
                  .then(() => worker.queue.getJob(id))
                  .then((job) => job.retry()),
              Promise.resolve(),
            )
            .then(() => res.json({ status: "ok" })),
        ),
    )
    .post("/failed", json(), async (req, res) =>
      z
        .object({})
        .parseAsync(req.body)
        .then(async () => {
          const list = (await worker.queue.getFailed()).map((job) =>
            job.toJSON(),
          );
          return z.looseObject({}).array().parseAsync(list.filter(Boolean));
        })
        .then((entries) => res.json(entries)),
    )
    .get("/entry/:id", async (req, res) =>
      Promise.resolve(req.params).then(({ id }) =>
        worker.queue
          .getJob(id)
          .then((item) => EntrySchema.parseAsync(item))
          .then((json) => res.send(json)),
      ),
    )
    .get("/delete/:id", async (req, res) =>
      Promise.resolve(req.params).then(({ id }) =>
        worker.queue.removeJobs(id).then(() => res.json({ status: "ok" })),
      ),
    )
    .get("/:type/:id", async (req, res) =>
      Promise.resolve(req.params).then(({ id, type = "" }) =>
        worker.queue
          .getJob(id)
          .then((job) =>
            z
              .union([
                z.null(),
                z.object({
                  id: z.string(),
                  name: z.string(),
                  data: z.any(),
                  returnvalue: z.any(),
                }),
              ])
              .parseAsync(job),
          )
          .then((item) => (item ? item.returnvalue[type] || item : null))
          .then((json) => (type === "html" ? res.send(json) : res.json(json))),
      ),
    )
    .post("/cleanup", async (_req, res) => {
      const queue = worker.queue;
      await Promise.all(
        (await queue.getRepeatableJobs()).map(
          async ({ key }) =>
            Boolean(console.log(["cleanup"], { key })) ||
            (await queue.removeRepeatableByKey(key)),
        ),
      );
      return res.json({ status: "ok" });
    })
    .use(BASE_PATH, serverAdapter.getRouter());
};
