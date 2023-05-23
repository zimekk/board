import { createReadStream, statSync } from "fs";
import { sync } from "glob";
import { Router } from "express";
import { dirname, resolve } from "path";
import mime from "mime-types";
import { parseFile } from "music-metadata";

const { LIBRARY_PATH = "" } = process.env;

const cwd = resolve(dirname(require.resolve("../../../.env")), LIBRARY_PATH);

console.log({ LIBRARY_PATH, cwd });

export const stream = () =>
  Router().get("/:name?", async ({ headers, params }, res, next) => {
    const { name } = params;
    if (name) {
      try {
        // https://medium.com/@yelee2369/node-js-streaming-audio-files-10dd5e8670d0
        const filepath = `${cwd}/${Array.isArray(name) ? name[0] : name}`;
        const { size } = statSync(filepath);
        const { range = "" } = headers;
        const [start, end] = (([_, start, end]) => [
          Number(start),
          end ? Number(end) : size - 1,
        ])(range.match(/bytes=(\d+)-(\d*)/) || []) as [number, number];
        Object.entries(
          Object.assign(
            ((type) => (type ? { "Content-Type": mime.lookup(filepath) } : {}))(
              mime.lookup(filepath)
            ),
            !isNaN(start)
              ? {
                  "Content-Length": `${end - start + 1}`,
                  "Content-Range": `bytes ${start}-${end}/${size}`,
                }
              : {}
          )
        ).forEach(([name, value]) => value && res.setHeader(name, value));
        createReadStream(filepath, !isNaN(start) ? { start, end } : {}).pipe(
          res.status(isNaN(start) ? 200 : 206)
        );
      } catch (e) {
        next(e);
      }
    } else {
      const list = sync("**/*.{flac,mp3,wav}", {
        cwd,
        follow: true,
      });

      const encoding = "base64";

      list
        .reduce(
          (promise, name) =>
            promise.then((list) =>
              parseFile(`${cwd}/${name}`).then(
                ({
                  common: { year, album, title, artists, picture },
                  format: { duration },
                }) =>
                  list.concat({
                    name,
                    year,
                    title,
                    album,
                    artists,
                    picture: picture?.map(
                      ({ format, data }) =>
                        `data:${format};${encoding},${data.toString(encoding)}`
                    ),
                    // picture: picture?.map(({ format, data }) =>
                    //   URL.createObjectURL(new Blob([data], { type: format }))
                    // ),
                    duration,
                  })
              )
            ),
          Promise.resolve([]) as Promise<any>
        )
        .then((data) => res.status(200).json(data));
    }
  });
