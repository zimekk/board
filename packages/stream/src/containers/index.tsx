import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import flvjs from "pro-flv.js";
import { StreamsSchema } from "../schema";

export const MEDIA_URL =
  process.env.MEDIA_URL ||
  (({ protocol, hostname }) => `${protocol}//${hostname}:7000`)(
    new URL(window.location.href),
  );

console.log({ MEDIA_URL });

// https://github.com/illuspas/Node-Media-Server
function Stream({ stream: url }: { stream: string }) {
  const videoRef = useRef();

  useEffect(() => {
    // https://github.com/illuspas/pro-fiv.js
    if (flvjs.isSupported()) {
      const video = videoRef.current;
      const flvPlayer = flvjs.createPlayer({
        type: "flv",
        url,
      });
      flvPlayer.attachMediaElement(video);
      flvPlayer.load();
      // flvPlayer.play();
    }
  }, [url]);

  return (
    <div>
      <video ref={videoRef} width="480" height="270" autoPlay controls></video>
    </div>
  );
}

export default function Section() {
  const [list, setList] = useState<string[] | null>(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    (window
      ? Promise.resolve({
          live: {
            NZXT: {},
          },
        })
      : fetch(`${MEDIA_URL}/api/streams`, {
          headers: {
            Authorization: `Basic ${btoa(["admin", "admin"].join(":"))}`,
          },
        })
          .then((res) => res.json())
          .then(StreamsSchema.parseAsync)
    )
      .then((data) =>
        Object.keys(data.live || {}).map(
          (name) => `${MEDIA_URL}/live/${name}.flv`,
        ),
      )
      .then((list) => list.length > 0 && (setList(list), setStream(list[0])));
  }, []);

  const handleChangeStream = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    ({ target }) => setStream(target.value),
    [],
  );

  return (
    <section>
      <h2>Stream</h2>
      {stream && list && (
        <select value={stream} onChange={handleChangeStream}>
          {list.map((url) => (
            <option key={url} value={url}>
              {url}
            </option>
          ))}
        </select>
      )}
      {stream && <Stream stream={stream} />}
      <a href={`${MEDIA_URL}/admin/streams`} target="_blank">
        streams
      </a>
    </section>
  );
}
