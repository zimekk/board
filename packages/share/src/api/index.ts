import { Router, json } from "express";
import { networkInterfaces } from "node:os";
import { dirname, resolve } from "node:path";
import { sync } from "glob";
import { z } from "zod";
import mqtt from "mqtt";
import { DeviceSchema, NetworkSchema } from "../schema";

const { LIBRARY_PATH, MQTT_URL } = z
  .object({
    LIBRARY_PATH: z.string().default(""),
    MQTT_URL: z.string().default("mqtt://mqtt"),
  })
  .parse(process.env);

console.log({ LIBRARY_PATH, MQTT_URL });

const cwd = resolve(dirname(require.resolve("../../../../.env")), LIBRARY_PATH);

const client = mqtt.connect(MQTT_URL);

client.on("connect", () => {
  client.subscribe("device/play", (err) => {
    // if (!err) {
    //   client.publish("presence", "Hello mqtt");
    // }
  });
});

client.on("message", (topic, message) => {
  // message is Buffer
  const result = JSON.parse(message.toString());
  console.log({ topic, result });
});

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
    .get("/share/networks", (_req, res) => {
      const nets = networkInterfaces();
      console.log({ nets });
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
    )
    .get("/share/start", (_req, res) => {
      client.publish("device/discover", JSON.stringify({}));
      return res.json({});
    })
    .get("/share/destroy", (_req, res) => {
      nodeCast.destroy(); // destroy nodecast
      return res.json({});
    });
