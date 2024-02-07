import { Router, json } from "express";
import { networkInterfaces } from "node:os";
import { dirname, resolve } from "node:path";
import { sync } from "glob";
import { z } from "zod";
import mqtt from "mqtt";
import { NetworkSchema } from "../schema";

const { LIBRARY_PATH, MQTT_URL } = z
  .object({
    LIBRARY_PATH: z.string().default(""),
    MQTT_URL: z.string().default("mqtt://mqtt"),
  })
  .parse(process.env);

console.log({ LIBRARY_PATH, MQTT_URL });

const cwd = resolve(dirname(require.resolve("../../../../.env")), LIBRARY_PATH);

const client = mqtt.connect(MQTT_URL);

client.on("connect", () => {});

export const router = () =>
  Router()
    .get("/share/discover", (_req, res) => {
      client.publish("device/discover", JSON.stringify({}));
      return res.json({});
    })
    .get("/share/networks", (_req, res) => {
      const nets = networkInterfaces();
      return NetworkSchema.array()
        .parseAsync(nets["en0"] || nets["eth0"])
        .then((data) => res.json(data));
    })
    .get("/share/list", (_req, res) => {
      const list = sync("**/*.{flac,mp3,mp4,mov,wav}", {
        cwd,
        follow: true,
      });
      return res.json(list);
    })
    .post("/share/play", json(), (req, res) =>
      z
        .object({
          url: z.string(),
          xml: z.string(),
        })
        .parseAsync(req.body)
        .then(async ({ url, xml }) => {
          console.log({ url, xml });
          client.publish("device/play", JSON.stringify({ url, xml }));
          return res.json({});
        }),
    );
