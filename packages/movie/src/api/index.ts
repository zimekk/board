import { Router } from "express";
import { sync } from "glob";
import { createReadStream } from "node:fs";
import { dirname, resolve } from "node:path";
import { z } from "zod";
import { type ItemType } from "../schema";

const { LIBRARY_PATH } = z
  .object({
    LIBRARY_PATH: z.string().default(""),
  })
  .parse(process.env);

console.log({ LIBRARY_PATH });

const cwd = resolve(dirname(require.resolve("../../../../.env")), LIBRARY_PATH);

export const router = () =>
  Router().get("/movie/{:name}", async (req, res) =>
    z
      .object({
        name: z.string().optional(),
      })
      .parseAsync(req.params)
      .then(async ({ name }) => {
        if (name) {
          const filepath = resolve(cwd, name);

          return createReadStream(filepath).pipe(res.status(200));
        }
        const list = sync("**/*.{mov,mp4}", {
          cwd,
          follow: true,
        });

        return list
          .reduce(
            (promise, name) => promise.then((list) => list.concat({ name })),
            Promise.resolve([]) as Promise<ItemType[]>,
          )
          .then((list) => res.status(200).json({ list }));
      }),
  );
