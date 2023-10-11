import { Router } from "express";
// import { dirname, resolve } from "path";
// import mime from "mime-types";
// import { parseFile } from "music-metadata";
// import jimp from "jimp";

// const { LIBRARY_PATH = "" } = process.env;

// const cwd = resolve(dirname(require.resolve("../../../.env")), LIBRARY_PATH);

// console.log({ LIBRARY_PATH, cwd });

export const router = () =>
  Router().get("/", (_req, res) => res.json({ status: 1 }));
