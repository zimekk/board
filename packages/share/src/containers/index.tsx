import mqtt from "mqtt";
import React, {
  type ChangeEventHandler,
  type Dispatch,
  type SetStateAction,
  type MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
// import { Spinner } from "@dev/video/components";
import type { DeviceType, NetworkType } from "../schema";

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

function discover() {
  fetch("share/discover")
    .then((res) => res.json())
    .then(console.info);
}

function Devices({ url }: { url: string }) {
  const [list, setList] = useState<DeviceType[]>([]);

  useEffect(() => {
    const client = mqtt.connect(MQTT_URL);

    console.log({ MQTT_URL });

    client.on("connect", () => {
      client
        .subscribe("device", (err) => {})
        .subscribe("device/list", (err) => {});
    });

    client.on("message", (topic, message) => {
      // message is Buffer
      switch (topic) {
        case "device":
          const item = JSON.parse(message.toString());
          setList((list) => list.concat(item));
          break;
        case "device/list":
          const list = JSON.parse(message.toString());
          setList(list);
          break;
      }
    });

    discover();

    return () => {
      client.end();
    };
  }, []);

  const handleClickPlay = useCallback<MouseEventHandler<HTMLButtonElement>>(
    ({ target }) =>
      fetch("share/play", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ xml: (target as HTMLButtonElement).value, url }),
      })
        .then((res) => res.json())
        .then(console.info),
    [url],
  );

  const handleClickDiscover = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) => discover(),
    [],
  );

  return (
    <div>
      <h3>devices</h3>
      <button onClick={handleClickDiscover}>discover</button>
      <table>
        <tbody>
          <tr>
            <th>host</th>
            <th>name</th>
            <th>xml</th>
            <th>type</th>
            <th></th>
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
              <td>
                <button
                  disabled={url === ""}
                  value={xml}
                  onClick={handleClickPlay}
                >
                  play
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  );
}

function Network() {
  const [list, setList] = useState<NetworkType[]>([]);

  useEffect(() => {
    fetch("share/networks")
      .then((res) => res.json())
      .then(setList);
  }, []);

  return (
    <div>
      <h3>networks</h3>
      <table>
        <tbody>
          <tr>
            <th>address</th>
            <th>family</th>
            <th>mac</th>
          </tr>
          {list.map(({ address, family, mac }, key) => (
            <tr key={key}>
              <td>
                <a
                  href={(({ hash, pathname, port, protocol }) =>
                    `${protocol}//${address}:${port}${pathname}${hash}`)(
                    new URL(document.location.href),
                  )}
                >
                  {address}
                </a>
              </td>
              <td>{family}</td>
              <td>{mac}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  );
}

function Media({
  url,
  setUrl,
}: {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
}) {
  const [list, setList] = useState<string[]>([
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4",
  ]);

  useEffect(() => {
    fetch("share/list")
      .then((res) => res.json())
      .then((data) =>
        setList((list) =>
          list.concat(
            data.map((name) =>
              (({ origin }) =>
                `${origin}/api/audio/${encodeURIComponent(name)}`)(
                new URL(document.location.href),
              ),
            ),
          ),
        ),
      );
  }, []);

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => setUrl(target.value),
    [],
  );

  const handleClickAdd = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) =>
      Promise.resolve(prompt("Url:")).then(
        (url) => url && (setList((list) => list.concat(url)), setUrl(url)),
      ),
    [],
  );

  return (
    <div>
      <h3>media</h3>
      <button onClick={handleClickAdd}>add</button>
      <ul>
        {list.map((name, key) => (
          <li key={key}>
            <label>
              <input
                type="radio"
                value={name}
                onChange={handleChange}
                checked={name === url}
              />
              <span>{name}</span>
            </label>
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  );
}

export default function Section() {
  const [url, setUrl] = useState("");

  return (
    <section>
      <h2>Share</h2>
      <Devices url={url} />
      <Media url={url} setUrl={setUrl} />
      <Network />
    </section>
  );
}
