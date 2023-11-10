import { Router } from "express";
import fs from "node:fs";
import { dirname, resolve } from "node:path";
import { LocalStorage } from "node-localstorage";
import ytdl from "ytdl-core";
import { z } from "zod";

const { LIBRARY_PATH = "" } = process.env;

const cwd = resolve(dirname(require.resolve("../../../../.env")), LIBRARY_PATH);

// console.log({ LIBRARY_PATH, cwd });

const storage = new LocalStorage(resolve(cwd, `storage`));

export const router = () =>
  Router()
    .get("/", (_req, res) => res.json({ status: 1 }))
    .get("/info", (req, res) =>
      z
        .object({
          videoId: z.string(),
        })
        .parseAsync(req.query)
        .then(({ videoId }) => {
          const item = storage.getItem(videoId);
          if (item) {
            return JSON.parse(item);
          }
          return ytdl.getBasicInfo(videoId).then((info) => {
            storage.setItem(videoId, JSON.stringify(info));
            return info;
          });
        })
        .then((json) => res.json(json)),
    )
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
                resolve(cwd, `${info.videoDetails.videoId}.mp4`),
              ),
            );
            return res.json(info);
          }),
        ),
    );
