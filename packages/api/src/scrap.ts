import { json } from "body-parser";
import { Router } from "express";
import { z } from "zod";

import { DataSchema } from "@dev/schema";

export const browse = async (...args: string[]) =>
  (await import("@dev/chrome")).chrome(...args);

export const chrome = () =>
  Router().post("/", json(), async (req, res, next) =>
    z
      .object({
        id: z.string(),
        data: DataSchema,
      })
      .parseAsync(req.body)
      .then(({ id, data }) =>
        (console.log(["scrap"], { data }), browse(data.url))
          .then((returnvalue) => {
            if (returnvalue.html && returnvalue.url !== data.url) {
              throw new Error(`Invalid response url: ${returnvalue.url}`);
            }
            return returnvalue;
          })
          .then((returnvalue) => res.json({ id, data, returnvalue }))
      )
      .catch(next)
  );
