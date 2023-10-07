import React, { type MouseEventHandler, useCallback, useState } from "react";
import ReactPlayer from "react-player/youtube";

function List() {
  const [videoId, setVideoId] = useState("");
  const [list] = useState(() => [
    "https://www.youtube.com/watch?v=yxW5yuzVi8w",
    "https://www.youtube.com/watch?v=Fp_P_e1cPOE",
    "https://www.youtube.com/watch?v=XXYlFuWEuKI",
    "https://www.youtube.com/watch?v=a0q6JMuLBYQ",
  ]);

  const handleClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => (
      e.preventDefault(),
      ((videoId) => setVideoId(videoId))(e.currentTarget.href)
    ),
    []
  );

  return (
    <div>
      {videoId && <ReactPlayer url={videoId} />}
      <ul>
        {list.map((link) => (
          <li key={link}>
            <a href={link} onClick={handleClick}>
              {link}
            </a>
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
