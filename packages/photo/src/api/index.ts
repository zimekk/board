import { Router } from "express";
import { sync } from "glob";
import { createReadStream } from "node:fs";
import { dirname, resolve } from "node:path";
import { z } from "zod";
import { type PhotoType } from "../schema";

const { LIBRARY_PATH = "" } = process.env;

const cwd = resolve(dirname(require.resolve("../../../../.env")), LIBRARY_PATH);

console.log({ LIBRARY_PATH, cwd });

export const router = () =>
  Router().get("/photo/:name?", async (req, res) =>
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
        const list = sync("**/*.{jpeg,jpg}", {
          cwd,
          follow: true,
        });

        return list
          .reduce(
            (promise, name) => promise.then((list) => list.concat({ name })),
            Promise.resolve([]) as Promise<PhotoType[]>,
          )
          .then((list) => res.status(200).json({ list }));
      }),
  );
