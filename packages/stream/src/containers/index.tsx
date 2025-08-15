// import flvjs from "pro-flv.js";
import flvjs from "mpegts.js";
import React, {
  type ChangeEventHandler,
  type FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { StreamsSchema } from "../schema";

export const MEDIA_URL =
  process.env.MEDIA_URL ||
  (({ protocol, hostname }) => `${protocol}//${hostname}:7000`)(
    new URL(window.location.href),
  );

// https://github.com/illuspas/Node-Media-Server
function Stream({ stream: url }: { stream: string }) {
  const [error, setError] = useState<object>(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // https://github.com/illuspas/pro-fiv.js
    if (flvjs.isSupported()) {
      const video = videoRef.current;
      const flvPlayer = flvjs.createPlayer({
        type: "flv",
        url,
      });
      flvPlayer.attachMediaElement(video);
      flvPlayer.on(flvjs.Events.ERROR, setError);
      flvPlayer.load();
      // flvPlayer.play();
    }
  }, [url]);

  return (
    <div>
      <video ref={videoRef} width="480" height="270" autoPlay controls></video>
      {error && (
        <pre
          style={{
            background: "crimson",
            color: "white",
            margin: ".5em",
            padding: "1em",
          }}
        >
          {JSON.stringify(error)}
        </pre>
      )}
    </div>
  );
}

function MJPEGStream({ stream: url }: { stream: string }) {
  return (
    <div>
      <video
        crossOrigin="anonymous"
        src={url}
        width="480"
        height="270"
        autoPlay
        controls
      ></video>
    </div>
  );
}

export default function Section() {
  const [item, setItem] = useState(() => ({
    value: "",
    error: "",
  }));
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
      // .then((list) => ["http://192.168.2.23:8080/feed.flv", ...list])
      .then((list) => list.length > 0 && (setList(list), setStream(list[0])));
  }, []);

  const handleChangeStream = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    ({ target }) => setStream(target.value),
    [],
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const url = new URL(item.value).toString();
        console.log({ url });
        setList((list) => list.filter((item) => item !== url).concat(url));
        setItem((item) => ({ ...item, value: "" }));
        setStream(url);
      } catch (e) {
        setItem((item) => ({ ...item, error: e.toString() }));
      }
    },
    [item.value],
  );

  return (
    <section>
      <h2>Stream</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 480,
        }}
      >
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              flex: "1 auto",
            }}
          >
            <input
              style={{ flexGrow: 1, margin: ".25em" }}
              type="text"
              value={item.value}
              onChange={({ target }) =>
                setItem((item) => ({ ...item, value: target.value, error: "" }))
              }
            />
            <button
              style={{ margin: ".25em", height: "2em" }}
              disabled={item.value.length <= 0}
            >
              add
            </button>
          </div>
          {item.error && (
            <pre
              style={{
                background: "crimson",
                color: "white",
                margin: ".5em",
                padding: "1em",
              }}
            >
              {item.error}
            </pre>
          )}
        </form>
        {stream && list && (
          <select
            style={{ margin: ".25em", height: "2em" }}
            value={stream}
            onChange={handleChangeStream}
          >
            {list.map((url) => (
              <option key={url} value={url}>
                {url}
              </option>
            ))}
          </select>
        )}
        {stream && <Stream stream={stream} />}
      </div>
      <a href={`${MEDIA_URL}/admin/streams`} target="_blank">
        streams
      </a>
      <pre style={{ background: "linen", margin: ".5em", padding: "1em" }}>
        {`~ $ git clone https://github.com/illuspas/Node-Media-Server

~/Node-Media-Server $ docker build . -t nms
~/Node-Media-Server $ docker run --name nms -d -p 1935:1935 -p 7000:8000 -p 8443:8443 nms
`}
      </pre>
      {stream && (
        <pre style={{ background: "linen", margin: ".5em", padding: "1em" }}>
          {`ffmpeg -stream_loop -1 -re -i share/library/BilaShsQphM.mp4 -c copy -f flv ${((url) => `rtmp://${url.hostname}${url.pathname.split(".")[0]}`)(new URL(stream))}
`}
        </pre>
      )}
      <h2>MJPEGStream</h2>
      <MJPEGStream stream="//192.168.2.23:8080/feed.mjpg" />
      <pre style={{ background: "linen", margin: ".5em", padding: "1em" }}>
        {`gphoto2 --set-config viewfinder=1
gphoto2 --capture-movie --stdout | ffmpeg -re -i pipe:0 -pix_fmt yuv420p -s:v 1920x1080 -listen 1 -headers "Access-Control-Allow-Origin: *" -f mjpeg http://192.168.2.23:8080/feed.mjpg
`}
      </pre>
    </section>
  );
}
