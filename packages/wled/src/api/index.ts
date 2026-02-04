import { Router, json } from "express";
import { z } from "zod";
import { Schema } from "../schema";

const { WLED_URL } = z
  .object({
    WLED_URL: z.string().default("http://127.0.0.1"),
  })
  .parse(process.env);

export const router = () =>
  Router()
    .get("/wled/", async (req, res, next) =>
      z
        .object({})
        .parseAsync(req.params)
        // https://kno.wled.ge/interfaces/json-api/
        .then(() => fetch(`${WLED_URL}/json`).then((res) => res.json()))
        .then(Schema.parseAsync)
        .then((data) => res.json(data))
        .catch(next),
    )
    .post("/wled/state", json(), async (req, res, next) =>
      z
        .object({
          seg: z.unknown(),
        })
        .parseAsync(req.body)
        // https://github.com/wled/WLED/wiki/List-of-effects-and-palettes
        .then((json) =>
          fetch(`${WLED_URL}/json/state`, {
            method: "post",
            body: JSON.stringify(json),
          }).then((res) => res.json()),
        )
        .then((data) => res.json(data))
        .catch(next),
    );
