import React, {
  useCallback,
  useEffect,
  useState,
  type ChangeEventHandler,
  type MouseEventHandler,
} from "react";
import ReactPlayer from "react-player/youtube";
import { LazyImage, LazyImageProvider } from "../components/Image";
import { Spinner } from "../components/Spinner";
import {
  BasicInfoSchema as InfoSchema,
  type BasicInfoType as InfoType,
} from "../schema";
import videos from "../videos";

function Data({ data }: { data: object }) {
  const [show, setShow] = useState(false);

  const handleClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => (e.preventDefault(), setShow((show) => !show)),
    [],
  );

  return (
    <a href="#" onClick={handleClick} style={{ textDecoration: "none" }}>
      <pre>{show ? JSON.stringify(data, null, 2) : `[...]`}</pre>
    </a>
  );
}

function Info({
  link,
  onClick: handleClick,
}: {
  link: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}) {
  const [info, setInfo] = useState<InfoType | null>(null);

  useEffect(() => {
    fetch(`video/info?videoId=${link}`)
      .then((res) => res.json())
      .then((info) => InfoSchema.parseAsync(info))
      .then(setInfo);
  }, []);

  return info ? (
    <div>
      {info.videoDetails.thumbnails
        .slice(0, 1)
        .map(({ url, width, height }, key) => (
          <div key={key}>
            <a href={link} onClick={handleClick}>
              <LazyImage src={url} width={width} height={height} />
            </a>
            <div>
              <strong>{info.videoDetails.title}</strong>
            </div>
          </div>
        ))}
      <Data data={info} />
    </div>
  ) : (
    <Spinner />
  );
}

function List() {
  const [selected, setSelected] = useState<string[]>(() => []);
  const [videoId, setVideoId] = useState("");
  const [list] = useState(() => videos);

  useEffect(() => {
    fetch("video")
      .then((res) => res.json())
      .then(console.info);
  }, []);

  const handleClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => (
      e.preventDefault(),
      ((videoId) => setVideoId(videoId))(e.currentTarget.href)
    ),
    [],
  );

  const handleClickDownload = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => (
      e.preventDefault(),
      ((videoId) =>
        fetch(`video/download-video?videoId=${videoId}`)
          .then((res) => res.json())
          .then(console.info))(e.currentTarget.href)
    ),
    [],
  );

  const handleClickDownloadAudio = useCallback<
    MouseEventHandler<HTMLAnchorElement>
  >(
    (e) => (
      e.preventDefault(),
      ((videoId) =>
        fetch(`video/download-audio?videoId=${videoId}`)
          .then((res) => res.json())
          .then(console.info))(e.currentTarget.href)
    ),
    [],
  );

  const handleSelect = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      setSelected((selected) =>
        !target.checked
          ? selected.filter((value) => value !== target.value)
          : selected.concat(target.value),
      ),
    [],
  );

  const handleSelectAll = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => setSelected(() => (!target.checked ? [] : list)),
    [],
  );

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selected.length === list.length}
            onChange={handleSelectAll}
          />
          <span>select all</span>{" "}
        </label>
      </div>
      <ul>
        {list.map((link) => (
          <li key={link}>
            <input
              type="checkbox"
              value={link}
              checked={selected.includes(link)}
              onChange={handleSelect}
            />
            <a href={link} onClick={handleClick}>
              {link}
            </a>
            [
            <a href={link} onClick={handleClickDownload}>
              download
            </a>
            ][
            <a href={link} onClick={handleClickDownloadAudio}>
              download-audio
            </a>
            ]
            {selected.includes(link) && (
              <Info link={link} onClick={handleClick} />
            )}
          </li>
        ))}
      </ul>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          border: "2px solid black",
        }}
      >
        {videoId && (
          <ReactPlayer
            url={videoId}
            width={320}
            height={180}
            controls
            light
            loop
            pip
            playing
          />
        )}
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <section>
      <h2>Video</h2>
      <LazyImageProvider>
        <List />
      </LazyImageProvider>
    </section>
  );
}
