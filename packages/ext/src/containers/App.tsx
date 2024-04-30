import React, { useCallback, useEffect, useRef, useState } from "react";
import { SKIP_ACTION } from "../constants";
import styles from "./App.module.scss";

function skipVideo() {
  const button = document.querySelector("button.ytp-ad-skip-button-modern");
  console.log({ button });
  if (button && button instanceof HTMLButtonElement) {
    button.click();
    return;
  }

  const consent = Array.from(
    document.querySelectorAll("ytd-consent-bump-v2-lightbox button"),
  ).find((button) => button.getAttribute("aria-label")?.match(/^Nie /));
  console.log({ consent });
  if (consent && consent instanceof HTMLButtonElement) {
    consent.click();
    return;
  }

  const ads = document.querySelector("div.video-ads div");
  console.log({ ads });
  if (ads) {
    const video = document.querySelector("video");
    console.log({ video });
    if (video) {
      video.currentTime = video.duration - 0.1;
      return;
    }
  }
}

export default function App() {
  const [auto, setAuto] = useState(false);

  const autoSkip = useRef(auto);

  const handleClick = useCallback(() => {
    skipVideo();
  }, []);

  useEffect(() => {
    autoSkip.current = auto;
  }, [auto]);

  useEffect(() => {
    const autoSkipVideo = () => autoSkip.current && skipVideo();

    const onLoadedMetadata = ({ target }) => {
      console.log(["loadedmetadata"], { target });
      setTimeout(() => {
        autoSkipVideo();
      }, 1000);
    };

    const video = document.querySelector("video");
    console.log({ video });

    if (video) {
      autoSkipVideo();
      video.addEventListener("loadedmetadata", onLoadedMetadata);

      return () => {
        video.removeEventListener("loadedmetadata", onLoadedMetadata);
      };
    }
  }, [autoSkip]);

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
        case 65: // a
          setAuto((auto) => !auto);
          break;
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

  console.log({ auto });

  return (
    <section className={styles.App}>
      <button
        className={styles.Button}
        style={{ borderColor: auto ? "currentColor" : "transparent" }}
        onClick={handleClick}
        title={
          import.meta.env.DEV
            ? "Board Extension App [dev]"
            : "Board Extension App"
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d={`M1.5 2 l10 7 v-7 h3 v14 h-3 v-7 l-10 7 z`}
            fill="currentColor"
          />
        </svg>
      </button>
    </section>
  );
}
