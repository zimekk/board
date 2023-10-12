import { Router } from "express";
import { z } from "zod";
import ytdl from "ytdl-core";
import fs from "node:fs";
import { dirname, resolve } from "node:path";

const { LIBRARY_PATH = "" } = process.env;

const cwd = resolve(dirname(require.resolve("../../../../.env")), LIBRARY_PATH);

// console.log({ LIBRARY_PATH, cwd });

export const router = () =>
  Router()
    .get("/", (_req, res) => res.json({ status: 1 }))
    .get("/download", (req, res) =>
      z
        .object({
          videoId: z.string(),
        })
        .parseAsync(req.query)
        .then(({ videoId }) =>
          ytdl.getInfo(videoId).then((info) => {
            ytdl(videoId).pipe(
              fs.createWriteStream(
                resolve(cwd, `${info.videoDetails.videoId}.mp4`)
              )
            );
            return res.json(info);
          })
        )
    );
