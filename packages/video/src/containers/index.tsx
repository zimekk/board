import React, {
  type ChangeEventHandler,
  type MouseEventHandler,
  useCallback,
  useState,
  useEffect,
} from "react";
import ReactPlayer from "react-player/youtube";
import { Spinner } from "../components/Spinner";
import { type InfoType, InfoSchema } from "../schema";

function Info({ link }: { link: string }) {
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
          <img
            key={key}
            src={url}
            width={width}
            height={height}
            referrerPolicy="no-referrer"
          />
        ))}
      <pre>{JSON.stringify(info, null, 2)}</pre>
    </div>
  ) : (
    <Spinner />
  );
}

function List() {
  const [selected, setSelected] = useState<string[]>(() => []);
  const [videoId, setVideoId] = useState("");
  const [list] = useState(() => [
    "https://www.youtube.com/watch?v=yxW5yuzVi8w",
    "https://www.youtube.com/watch?v=Fp_P_e1cPOE",
    "https://www.youtube.com/watch?v=XXYlFuWEuKI",
    "https://www.youtube.com/watch?v=a0q6JMuLBYQ",
    "https://www.youtube.com/watch?v=b6U3xeYqdKQ",
    "https://www.youtube.com/watch?v=L4QxmPMplYc",
    "https://www.youtube.com/watch?v=c8WDzsqQ7UY",
  ]);

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
    []
  );

  const handleClickDownload = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => (
      e.preventDefault(),
      ((videoId) =>
        fetch(`video/download?videoId=${videoId}`)
          .then((res) => res.json())
          .then(console.info))(e.currentTarget.href)
    ),
    []
  );

  const handleSelect = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      setSelected((selected) =>
        !target.checked
          ? selected.filter((value) => value !== target.value)
          : selected.concat(target.value)
      ),
    []
  );

  return (
    <div>
      {videoId && <ReactPlayer url={videoId} controls loop />}
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
            ]{selected.includes(link) && <Info link={link} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Section() {
  return (
    <section>
      <h2>Video</h2>
      <List />
    </section>
  );
}
