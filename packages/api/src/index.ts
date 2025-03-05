import { query } from "@dev/sql";
import cors from "cors";
import { Router } from "express";

export const api = Router()
  .use(
    cors({
      origin: "*",
    }),
  )
  .all("/", (_req, res) => res.json({ hello: "Hello" }))
  .all("/live.m3u", (req, res) => {
    const stream = "NZXT";
    return res.send(
      (({ hostname }) => `#EXTM3U
  #EXTINF:-1, ${stream} RTMP SERVER
  rtmp://${hostname}/live/${stream}`)(
        new URL(`http://${req.headers.host}` || process.env.MEDIA_URL),
      ),
    );
  })
  .all("/data.json", (_req, res) =>
    query(`select * from contact`).then(({ rows }) => res.json(rows)),
  )
  .use("/audio/", require("@dev/audio/api").router())
  .use("/player/", require("@dev/player/api").router());
