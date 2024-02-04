import mqtt from "mqtt";
import React, {
  type MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import type { DeviceType } from "../schema";

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

function Devices() {
  const [list, setList] = useState<DeviceType[]>([]);

  useEffect(() => {
    const client = mqtt.connect(MQTT_URL);

    console.log({ MQTT_URL });

    client.on("connect", () => {
      client.subscribe("device", (err) => {
        // if (!err) {
        //   client.publish("presence", "Hello mqtt");
        // }
      });
    });

    client.on("message", (_topic, message) => {
      // message is Buffer
      const item = JSON.parse(message.toString());
      setList((list) => list.concat(item));
    });

    fetch("share")
      .then((res) => res.json())
      .then(setList);

    return () => {
      client.end();
    };
  }, []);

  return (
    <div>
      <h3>devices</h3>
      <table>
        <tbody>
          <tr>
            <th>host</th>
            <th>name</th>
            <th>xml</th>
            <th>type</th>
          </tr>
          {list.map(({ host, name, xml, type }, key) => (
            <tr key={key}>
              <td>{host}</td>
              <td>{name}</td>
              <td>
                <a href={xml} target="_blank">
                  {xml}
                </a>
              </td>
              <td>{type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  );
}

export default function Section() {
  const handleClickStart = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) =>
      fetch("share/start")
        .then((res) => res.json())
        .then(console.info),
    [],
  );

  const handleClickDestroy = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) =>
      fetch("share/destroy")
        .then((res) => res.json())
        .then(console.info),
    [],
  );

  return (
    <section>
      <h2>Share</h2>
      <button onClick={handleClickStart}>start</button>
      <button onClick={handleClickDestroy}>destroy</button>
      <Devices />
    </section>
  );
}
