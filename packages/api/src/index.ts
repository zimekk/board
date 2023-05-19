import { Router } from "express";
import cors from "cors";
import { query } from "@dev/sql";

export const api = Router()
  .use(
    cors({
      origin: "*",
    })
  )
  .all("/", (_req, res) => res.json({ hello: "Hello" }))
  .all("/data.json", (_req, res) =>
    query(`select * from contact`).then(({ rows }) => res.json(rows))
  )
  .use("/audio/", require("./audio").stream());
