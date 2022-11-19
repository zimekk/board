import { Router } from "express";
import { query } from "@dev/sql";

export const api = Router()
  .all("/", (_req, res) => res.json({ hello: "Hello" }))
  .all("/data.json", (_req, res) =>
    query(`select * from contact`).then(({ rows }) => res.json(rows))
  );
