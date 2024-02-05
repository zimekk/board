import { Router, json } from "express";
import { dirname, resolve } from "path";
import { sync } from "glob";
import { z } from "zod";
import mqtt from "mqtt";
import { DeviceSchema } from "../schema";

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

const NodeCast = require("nodecast-js");

const nodeCast = new NodeCast();
console.log(["NodeCast"], { nodeCast });

nodeCast.onDevice((device) => {
  console.log(["onDevice"], device);
  device.onError((err) => {
    console.log(err);
  });

  console.log(nodeCast.getList()); // list of currently discovered devices

  DeviceSchema.parseAsync(device).then((data) =>
    client.publish("device", JSON.stringify(data)),
  );
  // device.play(url, timestamp);
});

export const router = () =>
  Router()
    .get("/share", (_req, res) => {
      const list = nodeCast.getList();
      return DeviceSchema.array()
        .parseAsync(list)
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
          const device = nodeCast.getList().find((item) => item.xml === xml);
          if (device) {
            device.play(url);
          }
          return res.json({});
        }),
    )
    .get("/share/start", (_req, res) => {
      nodeCast.start();
      return res.json({});
    })
    .get("/share/destroy", (_req, res) => {
      nodeCast.destroy(); // destroy nodecast
      return res.json({});
    });
