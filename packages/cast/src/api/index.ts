import { z } from "zod";
import mqtt from "mqtt";
import { DeviceSchema } from "../schema";

const { MQTT_URL } = z
  .object({
    MQTT_URL: z.string().default("mqtt://mqtt"),
  })
  .parse(process.env);

console.log({ MQTT_URL });

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

nodeCast.start();
// nodeCast.destroy(); // destroy nodecast

export default function () {}
