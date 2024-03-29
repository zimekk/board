import mqtt from "mqtt";
import React, { useEffect, useState } from "react";
import prettyMilliseconds from "pretty-ms";
import prettyBytes from "pretty-bytes";
import { createAsset } from "use-asset";
import type { StatusType } from "../schema";
import { getTotal } from "../utils";

export const API_URL = process.env.API_URL || "";
export const MQTT_URL = (({ hostname, protocol }) =>
  `${protocol}//${hostname}:9001`)(
  new URL(
    `${process.env.MQTT_URL || window.location.href}`.replace(
      /^mqtt:\/\//,
      "ws://",
    ),
  ),
);

// https://github.com/pmndrs/use-asset
const asset = createAsset(() =>
  fetch(`${API_URL}status`)
    .then((res) => res.json())
    .then<StatusType>(({ result }) => result)
    .catch(
      (error) => (
        console.error(error),
        {
          databases: [],
          usage: [],
          cpus: [],
          hostname: null,
          platform: null,
          type: null,
          loadavg: null,
          freemem: 0,
          totalmem: 0,
          uptime: 0,
        }
      ),
    ),
);

function Status() {
  const [status, setStatus] = useState({});

  useEffect(() => {
    const client = mqtt.connect(MQTT_URL);

    console.log({ MQTT_URL });

    client.on("connect", () => {
      client.subscribe("status", (err) => {
        // if (!err) {
        //   client.publish("presence", "Hello mqtt");
        // }
      });
    });

    client.on("message", (_topic, message) => {
      // message is Buffer
      const result = JSON.parse(message.toString());
      setStatus((status) => ({
        ...status,
        [result.hostname]: result,
      }));
    });

    return () => {
      client.end();
    };
  }, []);

  return (
    <div>
      <a
        href="http://www.emqx.io/online-mqtt-client"
        rel="noopener noreferrer"
        target="_blank"
      >
        online-mqtt-client
      </a>
      <pre>{JSON.stringify(status, null, 2)}</pre>
    </div>
  );
}

export default function Section() {
  const result = asset.read();

  console.log({ result });
  console.log({ total: getTotal(result.usage) });

  return (
    <section>
      <h2>Status</h2>
      <Status />
      <h3>databases</h3>
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>size</th>
          </tr>
          {result.databases.map(({ name, size }, key) => (
            <tr key={key}>
              <td>{name}</td>
              <td>{size}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>disks</h3>
      <table>
        <tbody>
          <tr>
            <th>filesystem</th>
            <th>size</th>
            <th>used</th>
            <th>avail</th>
            <th>capacity</th>
          </tr>
          {result.usage.map((line, key) => (
            <tr key={key}>
              <td colSpan={5}>{line}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>cpus</h3>
      <table>
        <tbody>
          <tr>
            <th>model</th>
            <th>speed</th>
            <th>times</th>
          </tr>
          {result.cpus.map(({ model, speed, times }, key) => (
            <tr key={key}>
              <td>{model}</td>
              <td>{speed}</td>
              <td>
                <pre>{JSON.stringify(times, null, 2)}</pre>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>host</h3>
      <table>
        <tbody>
          <tr>
            <th>hostname</th>
            <th>platform</th>
            <th>type</th>
            <th>loadavg</th>
          </tr>
          {[result].map(({ hostname, platform, type, loadavg }, key) => (
            <tr key={key}>
              <td>{hostname}</td>
              <td>{platform}</td>
              <td>{type}</td>
              <td>
                <pre>{JSON.stringify(loadavg, null, 2)}</pre>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>mem</h3>
      <table>
        <tbody>
          <tr>
            <th>freemem</th>
            <th>totalmem</th>
            <th>usage</th>
          </tr>
          {[result].map(({ freemem, totalmem }, key) => (
            <tr key={key}>
              <td>{prettyBytes(freemem)}</td>
              <td>{prettyBytes(totalmem)}</td>
              <td>{prettyBytes(totalmem - freemem)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>uptime</h3>
      <table>
        <tbody>
          <tr>
            <th>uptime</th>
          </tr>
          {[result].map(({ uptime }, key) => (
            <tr key={key}>
              <td>{prettyMilliseconds(uptime * 1000)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </section>
  );
}
