import { createReadStream, statSync } from "fs";
import glob from "glob";
import { Router } from "express";
import { dirname, resolve } from "path";

const { LIBRARY_PATH = "" } = process.env;

const cwd = resolve(dirname(require.resolve("../../../.env")), LIBRARY_PATH);

console.log({ LIBRARY_PATH, cwd });

export const stream = () =>
  Router().get("/:name?", async ({ headers, params }, res) => {
    const { name } = params;
    if (name) {
      // https://medium.com/@yelee2369/node-js-streaming-audio-files-10dd5e8670d0
      const filepath = `${cwd}/${Array.isArray(name) ? name[0] : name}`;
      const { size } = statSync(filepath);
      const { range = "" } = headers;
      const [start, end] = (([_, start, end]) => [
        Number(start),
        end ? Number(end) : size - 1,
      ])(range.match(/bytes=(\d+)-(\d*)/) || []) as [number, number];
      Object.entries({
        "Content-Type": "audio/flac",
        "Content-Length": end - start + 1,
        "Content-Range": `bytes ${start}-${end}/${size}`,
      }).forEach(([name, value]) => res.setHeader(name, value));
      createReadStream(filepath, { start, end }).pipe(res.status(206));
    } else {
      res.status(200).json(
        await glob.sync("**/*.flac", {
          cwd,
        })
      );
    }
  });
