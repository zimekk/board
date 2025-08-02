import { Spinner } from "@dev/video/components";
import mqtt from "mqtt";
import React, {
  type MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { type PhotoType } from "../schema";

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
  const [list, setList] = useState<PhotoType[]>(() => null);

  useEffect(() => {
    fetch("photo")
      .then((res) => res.json())
      .then(({ list }) => list)
      .then(setList);
  }, []);

  const handleSelect = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => (
      e.preventDefault(),
      fetch(
        `photo/send/${encodeURIComponent(
          (e.target as HTMLAnchorElement).dataset.name,
        )}`,
      )
    ),
    [],
  );

  if (list === null) {
    return <Spinner />;
  }

  return (
    <div>
      <ul>
        {list.map(({ name }) => (
          <li key={name}>
            <a
              href={`photo/${encodeURIComponent(name)}`}
              data-name={name}
              target="_blank"
              onClick={handleSelect}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Item() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const client = mqtt.connect(MQTT_URL);

    console.log({ MQTT_URL });

    client.on("connect", () => {
      client.subscribe("photos", (err) => {
        // if (!err) {
        //   client.publish("presence", "Hello mqtt");
        // }
      });
    });

    client.on("message", (_topic, message) => {
      // message is Buffer
      setItem(URL.createObjectURL(new Blob([message as BlobPart])));
    });

    return () => {
      client.end();
    };
  }, []);

  return item ? (
    <div
      style={{
        // position: "fixed",
        bottom: 0,
        right: 0,
        border: "2px solid black",
      }}
    >
      <img
        style={{
          maxWidth: "100%",
        }}
        src={item}
      />
    </div>
  ) : null;
}

export default function Section() {
  return (
    <section>
      <h2>Photo</h2>
      <List />
      <Item />
    </section>
  );
}
