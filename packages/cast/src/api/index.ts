import { z } from "zod";
import mqtt from "mqtt";
import { DeviceSchema } from "../schema";

var Client = require("castv2").Client;
var mdns = require("mdns");

var browser = mdns.createBrowser(mdns.tcp("googlecast"));

browser.on("serviceUp", function (service) {
  console.log(
    "found device %s at %s:%d",
    service.name,
    service.addresses[0],
    service.port,
  );
  ondeviceup(service.addresses[0]);
  // browser.stop();
});

browser.start();

function ondeviceup(host) {
  console.log(["ondeviceup"], { host });
  var client = new Client();
  client.connect(host, function () {
    // create various namespace handlers
    var connection = client.createChannel(
      "sender-0",
      "receiver-0",
      "urn:x-cast:com.google.cast.tp.connection",
      "JSON",
    );
    var heartbeat = client.createChannel(
      "sender-0",
      "receiver-0",
      "urn:x-cast:com.google.cast.tp.heartbeat",
      "JSON",
    );
    var receiver = client.createChannel(
      "sender-0",
      "receiver-0",
      "urn:x-cast:com.google.cast.receiver",
      "JSON",
    );

    // establish virtual connection to the receiver
    connection.send({ type: "CONNECT" });

    // start heartbeating
    setInterval(function () {
      heartbeat.send({ type: "PING" });
    }, 5000);

    // launch YouTube app
    receiver.send({ type: "LAUNCH", appId: "YouTube", requestId: 1 });

    // display receiver status updates
    receiver.on("message", function (data, broadcast) {
      console.log({ host });
      console.log({ data });
      if ((data.type = "RECEIVER_STATUS")) {
        console.log(data.status);
      }
    });
  });
}

// const ChromecastAPI = require('chromecast-api')

// const client = new ChromecastAPI()

// console.log({client})

// client.on('device', function (device) {
//   console.log({device})
//   // var mediaURL = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4';
//   // var mediaURL = 'http://192.168.2.22:8080/api/audio/sanah%2F%20UCZTA%20%5B230806473%5D%20%5B2022%5D%2F07%20-%20sanah%20-%20Eldorado.flac';
//   // var mediaURL = 'http://192.168.2.22:8080/photo/sanah%2F%20UCZTA%20%5B230806473%5D%20%5B2022%5D%2Fcover.jpg';
//   var mediaURL = 'https://www.youtube.com/watch?v=H7xapFO0ZwE';

// if (device.friendlyName === 'A speaker') {
// // if (device.friendlyName === 'Custom_Chromecast_Name') {

//   console.log({mediaURL})

//   // Event emitted when the client is connected to the device.
//   device.on('connected', console.info)

//   // Event emitted when the media (audio or video) has finished.
//   device.on('finished', console.info)

//   device.on('status', console.info)

//   device.play(mediaURL, function (err) {
//     if (!err) console.log('Playing in your chromecast')
//   })

// }

// })

// const { MQTT_URL } = z
//   .object({
//     MQTT_URL: z.string().default("mqtt://mqtt"),
//   })
//   .parse(process.env);

// console.log({ MQTT_URL });

// const MediaRendererClient = require("upnp-mediarenderer-client");

// const mime = require("mime-types");

// const client = mqtt.connect(MQTT_URL);

// client.on("connect", () => {
//   client.subscribe("device/#", (err) => {
//     // if (!err) {
//     //   client.publish("presence", "Hello mqtt");
//     // }
//   });
// });

// const NodeCast = require("nodecast-js");

// const nodeCast = new NodeCast();
// console.log(["NodeCast"], { nodeCast });

// nodeCast.onDevice((device) => {
//   console.log(["onDevice"], device);
//   device.onError((err) => {
//     console.log(err);
//   });

//   console.log(nodeCast.getList()); // list of currently discovered devices

//   DeviceSchema.array()
//     .parseAsync(nodeCast.getList())
//     .then((data) => client.publish("device/list", JSON.stringify(data)));

//   DeviceSchema.parseAsync(device).then((data) =>
//     client.publish("device", JSON.stringify(data)),
//   );
//   // device.play(url, timestamp);
// });

// client.on("message", (topic, message) => {
//   // message is Buffer
//   const result = JSON.parse(message.toString());
//   console.log({ topic, result });

//   switch (topic) {
//     case "device/discover":
//       DeviceSchema.array()
//         .parseAsync(nodeCast.getList())
//         .then((data) => client.publish("device/list", JSON.stringify(data)));
//       break;
//     case "device/play":
//       const { xml, url } = result;
//       if (!url) {
//         const device = nodeCast.getList().find((item) => item.xml === xml);
//         if (device) {
//           device.play(url);
//         }
//       } else {
//         // Instanciate a client with a device description URL (discovered by SSDP)
//         const client = new MediaRendererClient(xml);
//         const contentType = mime.lookup(url) || "audio/mpeg";
//         // Load a stream with subtitles and play it immediately
//         const options = {
//           autoplay: true,
//           contentType,
//           metadata: {
//             title: "Some Movie Title",
//             creator: "John Doe",
//             type: contentType.split("/")[0], // can be 'video', 'audio' or 'image'
//             // subtitlesUrl: "http://url.to.some/subtitles.srt",
//           },
//         };
//         console.log(options);
//         client.load(url, options, console.info);
//       }
//       break;
//   }
// });

// nodeCast.start();
// nodeCast.destroy(); // destroy nodecast

export default function () {}
