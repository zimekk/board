import React, { Suspense, useMemo, useState } from "react";
import { suspend } from "suspend-react";

import Player, { Link, Text, View } from "./Player";

function Loading() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function Data({
  data,
  expanded: initialExpanded = false,
}: {
  data: object;
  expanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(initialExpanded);

  return (
    <pre>
      {expanded ? (
        JSON.stringify(data, null, 2)
      ) : (
        <>
          [
          <a href="#" onClick={(e) => (e.preventDefault(), setExpanded(true))}>
            ...
          </a>
          ]
        </>
      )}
    </pre>
  );
}

const { API_URL = "" } = {};

interface ItemType {
  name: string;
  year?: string;
  album?: string;
  title?: string;
  artists?: string[];
  picture?: string[];
}

function Playlist({ version = 1 }) {
  const [loop, setLoop] = useState(true);
  const [href, setHref] = useState<string | undefined>();
  const data = suspend(async () => {
    const res = await fetch(`${API_URL}/api/audio?${version}`);
    return res.json() as Promise<ItemType[]>;
  }, [version]);

  const list = useMemo(
    () =>
      (data || []).map(({ name, ...rest }) => ({
        ...rest,
        name,
        href: `${API_URL}/api/audio/${encodeURIComponent(name)}`,
      })),
    [data]
  );

  console.log({ list });

  return (
    <View>
      <ul>
        {list.map(({ name, href, title, artists, picture }, key) => (
          <li
            key={key}
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 1,
              alignItems: "center",
            }}
          >
            {picture &&
              picture.map((src, key) => (
                <img key={key} src={src} width="50" height="50" />
              ))}
            <Link
              style={{ padding: 4 }}
              title={title ? `${artists.join(", ")} - ${title}` : name}
              onPress={() => setHref(href)}
            />
          </li>
        ))}
      </ul>
      <Player uri={href} loop={loop} />
      <label>
        <input
          type="checkbox"
          checked={loop}
          onChange={({ target }) => setLoop(target.checked)}
        />
        <span>loop</span>
      </label>
      <Data data={data} />
    </View>
  );
}

export default function Audio() {
  return (
    <View>
      <Text>{`API_URL: ${API_URL}`}</Text>
      <Suspense fallback={<Loading />}>
        <Playlist />
      </Suspense>
    </View>
  );
}
