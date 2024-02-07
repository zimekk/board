import { z } from "zod";
import mqtt from "mqtt";
import { DeviceSchema } from "../schema";

const { MQTT_URL } = z
  .object({
    MQTT_URL: z.string().default("mqtt://mqtt"),
  })
  .parse(process.env);

console.log({ MQTT_URL });

const MediaRendererClient = require("upnp-mediarenderer-client");

const mime = require("mime-types");

const client = mqtt.connect(MQTT_URL);

client.on("connect", () => {
  client.subscribe("device/#", (err) => {
    // if (!err) {
    //   client.publish("presence", "Hello mqtt");
    // }
  });
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

client.on("message", (topic, message) => {
  // message is Buffer
  const result = JSON.parse(message.toString());
  console.log({ topic, result });

  switch (topic) {
    case "device/discover":
      nodeCast.start();
      break;
    case "device/play":
      const { xml, url } = result;
      if (!url) {
        const device = nodeCast.getList().find((item) => item.xml === xml);
        if (device) {
          device.play(url);
        }
      } else {
        // Instanciate a client with a device description URL (discovered by SSDP)
        const client = new MediaRendererClient(xml);
        const contentType = mime.lookup(url);
        // Load a stream with subtitles and play it immediately
        const options = {
          autoplay: true,
          contentType,
          metadata: {
            title: "Some Movie Title",
            creator: "John Doe",
            type: contentType.split("/")[0], // can be 'video', 'audio' or 'image'
            subtitlesUrl: "http://url.to.some/subtitles.srt",
          },
        };
        console.log(options);
        client.load(url, options, console.info);
      }
      break;
  }
});

nodeCast.start();
// nodeCast.destroy(); // destroy nodecast

export default function () {}
