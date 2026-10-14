import { Router } from "express";
import { z } from "zod";
// import { getVolume, setVolume } from "./easy-volume";

const { VCR_VOLUME_URL: VCR_URL = "" } = process.env;

console.log({ VCR_URL });

async function setVolume(volume: number) {
  return (
    VCR_URL &&
    (async (volume) => (
      console.log({ volume }),
      await fetch(`${VCR_URL}/setVolume?volume=${volume}`).then((res) =>
        res.json(),
      )
    ))(volume)
  );
}

async function getVolume() {
  return VCR_URL
    ? fetch(`${VCR_URL}/getStatus`)
        .then((res) => res.json())
        .then((data) => z.object({ volume: z.number() }).parseAsync(data))
        .then(({ volume }) => volume)
    : undefined;
}

export const router = () =>
  Router().get("/vcr/volume{/:volume}", async (req, res) =>
    z
      .object({
        volume: z.coerce.number().optional(),
      })
      .parseAsync(req.params)
      .then(async ({ volume }) =>
        volume === undefined
          ? getVolume().then((volume) => res.send({ volume }))
          : setVolume(volume).then(() => res.send({ status: "ok" })),
      ),
  );
