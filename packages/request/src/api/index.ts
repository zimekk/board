import { Router, json } from "express";
import mqtt from "mqtt";
import { dirname, resolve } from "node:path";
import { z } from "zod";

const { LIBRARY_PATH = "" } = process.env;

const cwd = resolve(dirname(require.resolve("../../../../.env")), LIBRARY_PATH);

console.log({ LIBRARY_PATH, cwd });

const { MQTT_URL } = z
  .object({
    MQTT_URL: z.string().default("mqtt://mqtt"),
  })
  .parse(process.env);

console.log({ MQTT_URL });

const client = mqtt.connect(MQTT_URL);

client.on("connect", () => {
  // client.subscribe("presence", (err) => {
  //   if (!err) {
  //     client.publish("presence", "Hello mqtt");
  //   }
  // });
});

export const router = () =>
  Router().all("/request/{:name}", json(), async (req, res) =>
    z
      .object({
        name: z.string().default("default"),
      })
      .parseAsync(req.params)
      .then(async ({ name }) =>
        client
          .publishAsync("request", JSON.stringify({ name }))
          .then(async () => (console.info(req.body), res.send({ name }))),
      ),
  );
