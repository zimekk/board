import React, { useCallback, useEffect, useRef } from "react";
import { SKIP_ACTION } from "../constants";
import styles from "./App.module.scss";

function skipVideo() {
  const button = document.querySelector("button.ytp-ad-skip-button-modern");
  console.log({ button });
  if (button && button instanceof HTMLButtonElement) {
    button.click();
    return;
  }

  const ads = document.querySelector("div.video-ads div");
  console.log({ ads });
  if (!ads) {
    return;
  }

  const video = document.querySelector("video");
  console.log({ video });
  if (video) {
    video.currentTime = video.duration - 0.1;
    return;
  }
}

export default function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = document.querySelector("video");
    console.log({ video });
  }, [videoRef]);

  const handleClick = useCallback(() => {
    skipVideo();
  }, [videoRef]);

  useEffect(() => {
    const onMessage = ({ data: message }) => {
      console.log({ message });
      switch (message.type) {
        case SKIP_ACTION:
          skipVideo();
          break;
      }
    };

    const onKeyDown = ({ keyCode }) => {
      console.log({ keyCode });
      switch (keyCode) {
        case 83: // s
          skipVideo();
          break;
      }
    };

    addEventListener("message", onMessage);
    addEventListener("keydown", onKeyDown);

    return () => {
      removeEventListener("message", onMessage);
      removeEventListener("keydown", onKeyDown);
    };
  }, []);
  return (
    <section className={styles.App}>
      <button
        className={styles.Button}
        onClick={handleClick}
        title={
          import.meta.env.DEV
            ? "Board Extension App [dev]"
            : "Board Extension App"
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d={`M4 4 l10 7 v-7 h3 v14 h-3 v-7 l-10 7 z`}
            fill="currentColor"
          />
        </svg>
      </button>
    </section>
  );
}
