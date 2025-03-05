import { Router } from "express";
import { dirname, resolve } from "path";
import sound from "play-sound";
import { z } from "zod";

const { LIBRARY_PATH = "" } = process.env;

const cwd = resolve(dirname(require.resolve("../../../../.env")), LIBRARY_PATH);

const player = sound({});
let audio = null;

const play = (file: string) => {
  stop();
  console.info(["play"], file);

  audio = player.play(file);
};

const stop = () => {
  if (audio) {
    console.info(["stop"]);
    audio.kill();
    audio = null;
  }
};

export const router = () =>
  Router()
    .get("/play/:name", async (req, res, next) =>
      z
        .object({
          name: z.string(),
        })
        .parseAsync(req.params)
        .then(({ name }) => play(`${cwd}/${name}`))
        .then(() => res.send({ status: "ok" }))
        .catch(next),
    )

    .get("/stop", async (req, res, next) =>
      z
        .object({})
        .parseAsync(req.params)
        .then(() => stop())
        .then(() => res.send({ status: "ok" }))
        .catch(next),
    );
