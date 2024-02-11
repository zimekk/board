import { Router } from "express";
import fs from "node:fs";
import { dirname, resolve } from "node:path";
import { LocalStorage } from "node-localstorage";
import ytdl from "ytdl-core";
import ffmpeg from "fluent-ffmpeg";
import { z } from "zod";

const { LIBRARY_PATH = "" } = process.env;

const cwd = resolve(dirname(require.resolve("../../../../.env")), LIBRARY_PATH);

// console.log({ LIBRARY_PATH, cwd });

const STORAGE_QUOTA = 15 * 1024 * 1024;

const storage = new LocalStorage(resolve(cwd, `storage`), STORAGE_QUOTA);

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
    .get("/download-video", (req, res) =>
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
    )
    .get("/download-audio", (req, res) =>
      z
        .object({
          videoId: z.string(),
        })
        .parseAsync(req.query)
        .then(({ videoId }) =>
          ytdl.getInfo(videoId).then((info) => {
            const filter = "audioonly";
            const format = ytdl.chooseFormat(info.formats, {
              quality: "highestaudio",
              filter,
            });
            const output = resolve(cwd, `${info.videoDetails.videoId}.mp3`);
            console.log({ format, output });
            // https://github.com/fent/node-ytdl-core/blob/master/example/convert_to_mp3.js
            return new Promise((resolve, reject) => {
              ffmpeg(ytdl(videoId, { format }))
                .audioBitrate(128)
                .output(output)
                .on("end", resolve)
                .on("error", reject)
                .run();
            })
              .then(() => res.json({ format }))
              .catch((error) => res.json({ error }));
          }),
        ),
    );
