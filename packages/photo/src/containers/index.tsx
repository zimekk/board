import React, {
  type MouseEventHandler,
  useCallback,
  useState,
  useEffect,
} from "react";
import { Spinner } from "@dev/video/components";
import { type PhotoType } from "../schema";

function List({ onSelect }: { onSelect: (name: string) => void }) {
  const [list, setList] = useState<PhotoType[]>(() => null);

  useEffect(() => {
    fetch("photo")
      .then((res) => res.json())
      .then(({ list }) => list)
      .then(setList);
  }, []);

  const handleSelect = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => (e.preventDefault(), onSelect((e.target as HTMLAnchorElement).href)),
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

function Item({ name }: { name: string }) {
  return (
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
        src={name}
      />
    </div>
  );
}

export default function Section() {
  const [name, setName] = useState(null);

  return (
    <section>
      <h2>Photo</h2>
      <List onSelect={setName} />
      {name && <Item name={name} />}
    </section>
  );
}
