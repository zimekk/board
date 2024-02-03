import React, { useEffect, useRef } from "react";
// import { MediaPlayer } from "dashjs";
import flvjs from "pro-flv.js";

export const MEDIA_URL =
  process.env.MEDIA_URL ||
  (({ protocol, hostname }) => `${protocol}//${hostname}:7000`)(
    new URL(window.location.href),
  );

console.log({ MEDIA_URL });

// https://github.com/illuspas/Node-Media-Server
function Stream() {
  const videoRef = useRef();

  // useEffect(() => {
  //   const video = videoRef.current;
  //   const url = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";
  //   // const url = "http://192.168.2.22:7000/live/MAC/index.mpd";
  //   const player = MediaPlayer().create();
  //   player.initialize(video, url, false);
  // }, []);

  useEffect(() => {
    // https://github.com/illuspas/pro-fiv.js
    if (flvjs.isSupported()) {
      const video = videoRef.current;
      const flvPlayer = flvjs.createPlayer({
        type: "flv",
        url: `${MEDIA_URL}/live/NZXT.flv`,
      });
      flvPlayer.attachMediaElement(video);
      flvPlayer.load();
      // flvPlayer.play();
    }
  }, []);

  return (
    <div>
      <video ref={videoRef} width="480" height="270" autoPlay controls></video>
    </div>
  );
}

export default function Section() {
  return (
    <section>
      <h2>Stream</h2>
      <Stream />
      <a href={`${MEDIA_URL}/admin/streams`} target="_blank">
        streams
      </a>
    </section>
  );
}
