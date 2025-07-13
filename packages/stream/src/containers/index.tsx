// import flvjs from "pro-flv.js";
import flvjs from "mpegts.js";
import React, {
  ChangeEventHandler,
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
