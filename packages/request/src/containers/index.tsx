import mqtt from "mqtt";
import React, {
  type MouseEventHandler,
  useCallback,
  useState,
  useEffect,
} from "react";

export const MQTT_URL = (({ hostname, protocol }) =>
  `${protocol}//${hostname}:9001`)(
  new URL(
    `${process.env.MQTT_URL || window.location.href}`.replace(
      /^mqtt:\/\//,
      "ws://",
    ),
  ),
);

function List() {
  const [list, setList] = useState<unknown[]>([]);

  useEffect(() => {
    const client = mqtt.connect(MQTT_URL);

    console.log({ MQTT_URL });

    client.on("connect", () => {
      client.subscribe("request", (err) => {
        // if (!err) {
        //   client.publish("presence", "Hello mqtt");
        // }
      });
    });

    client.on("message", (_topic, message) => {
      // message is Buffer
      setList((list) => list.concat(JSON.parse(message.toString())));
    });

    return () => {
      client.end();
    };
  }, []);

  return (
    <ul>
      {list.map((message, index) => (
        <li key={index}>
          <pre>{JSON.stringify(message, null, 2)}</pre>
        </li>
      ))}
    </ul>
  );
}

export default function Section() {
  const handleClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) =>
      fetch("request/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: "text" }),
      })
        .then((res) => res.json())
        .then(console.info),
    [],
  );

  return (
    <section>
      <h2>Request</h2>
      <button onClick={handleClick}>request</button>
      <List />
    </section>
  );
}
