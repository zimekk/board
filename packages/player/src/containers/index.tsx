import React, {
  type ChangeEventHandler,
  type ComponentProps,
  type MouseEventHandler,
  Suspense,
  useCallback,
  useMemo,
  useState,
} from "react";
import { suspend } from "suspend-react";

import Filters, { initialQueries } from "./Filters";

export interface MetaType {
  title: string;
  album?: string;
  artist?: string;
  artwork?: { src: string }[];
}

export const Link = ({
  title,
  onPress,
  ...rest
}: ComponentProps<"a"> & {
  title: string;
  onPress: MouseEventHandler;
}) => (
  <a
    href="#"
    onClick={onPress ? (e) => (e.preventDefault(), onPress(e)) : undefined}
    {...rest}
  >
    {title}
  </a>
);

const Text = "div";
const View = "div";

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

const API_URL = process.env.API_URL || "";

interface ItemType {
  name: string;
  year?: string;
  album?: string;
  title?: string;
  artists?: string[];
  artwork?: MetaType["artwork"];
  picture?: string[];
}

function Playlist({ version = 1 }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [href, setHref] = useState<string | undefined>();
  const [meta, setMeta] = useState<MetaType | undefined>();
  const data = suspend(async () => {
    const res = await fetch(
      `${API_URL ? `${API_URL}/` : ""}api/audio?${version}`,
    );
    return res.json() as Promise<ItemType[]>;
  }, [version]);
  const [queries, setQueries] = useState(() => initialQueries());

  const handleSelect = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      ((id) =>
        setSelected((selected) =>
          target.checked
            ? selected.concat(id)
            : selected.filter((item) => item !== id),
        ))(target.value),
    [],
  );

  const list = useMemo(
    () =>
      (data || []).map(({ name, ...rest }) => ({
        ...rest,
        name,
        href: `${API_URL}/api/audio/${encodeURIComponent(name)}`,
      })),
    [data],
  );

  const handlePlay = useCallback(
    (id: string) =>
      (({ name, href, title, album, artists, artwork }) => (
        setHref(href),
        setMeta(
          Object.assign(
            title
              ? {
                  title,
                  album,
                  artist: artists.join(", "),
                }
              : { title: name },
            artwork && {
              artwork: artwork.map(({ src, ...artwork }) => ({
                src: new URL(
                  `${href}/${src}`,
                  document.location.origin || "",
                ).toString(),
                ...artwork,
              })),
            },
          ),
        ),
        fetch(`api/player/play/${encodeURIComponent(name)}`)
      ))(list.find((item) => item.href === id)),
    [list],
  );

  const handleStop = useCallback(() => {
    console.log(["onStop"]);
    setHref(undefined);
    fetch(`api/player/stop`);
  }, []);

  const current = href;

  const filtered = useMemo(
    () =>
      list.filter((item) =>
        item.name.toLocaleLowerCase().includes(queries.search),
      ),
    [list, queries],
  );

  console.log({ filtered, list, meta });

  return (
    <View>
      <Filters setQueries={setQueries} />
      <ul>
        {filtered.map(({ name, href, title, artists, picture }, key) => (
          <li
            key={key}
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 1,
              alignItems: "center",
              background: href === current ? "aliceblue" : "",
            }}
          >
            <input
              type="checkbox"
              value={href}
              checked={selected.includes(href)}
              onChange={handleSelect}
            />
            {picture &&
              picture.map((src, key) => (
                <img key={key} src={src} width="50" height="50" />
              ))}
            <Link
              style={{ padding: 4 }}
              title={title ? `${artists.join(", ")} - ${title}` : name}
              onPress={() => (setSelected([href]), handlePlay(href))}
            />
          </li>
        ))}
      </ul>
      <button onClick={handleStop}>stop</button>
      <Data data={data} />
    </View>
  );
}

export default function Audio() {
  return (
    <View>
      <Text>{`API_URL: ${API_URL}`}</Text>
      {/* <Volume /> */}
      <Suspense fallback={<Loading />}>
        <Playlist />
      </Suspense>
    </View>
  );
}
