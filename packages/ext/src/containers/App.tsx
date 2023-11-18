import React, { useCallback, useEffect, useRef } from "react";
import styles from "./App.module.scss";

export default function App() {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = document.querySelector("video");
    console.log({ video });
  }, [videoRef]);
  const handleClick = useCallback(() => {
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
  }, [videoRef]);
  return (
    <section className={styles.App}>
      <h1 className={styles.Nav}>Board Extension App</h1>
      <button onClick={handleClick}>skip</button>
    </section>
  );
}
