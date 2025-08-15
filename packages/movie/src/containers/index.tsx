// import mqtt from "mqtt";
import { Spinner } from "@dev/video/components";
import React, {
  Dispatch,
  type MouseEventHandler,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { type ItemType } from "../schema";

function List({ setItem }: { setItem: Dispatch<SetStateAction<ItemType>> }) {
  const [list, setList] = useState<ItemType[]>(() => null);

  useEffect(() => {
    fetch("movie")
      .then((res) => res.json())
      .then(({ list }) => list)
      .then(setList);
  }, []);

  const handleSelect = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => (
      e.preventDefault(),
      setItem({ name: (e.target as HTMLAnchorElement).dataset.name })
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

function Item({ item }: { item: ItemType }) {
  const videoRef = useRef(null);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        border: "2px solid black",
      }}
    >
      <video
        ref={videoRef}
        src={`movie/${encodeURIComponent(item.name)}`}
        width="480"
        height="270"
        autoPlay
        controls
      ></video>
    </div>
  );
}

export default function Section() {
  const [item, setItem] = useState<ItemType | null>(null);

  return (
    <section>
      <h2>Movie</h2>
      <List setItem={setItem} />
      {item && <Item item={item} />}
    </section>
  );
}
