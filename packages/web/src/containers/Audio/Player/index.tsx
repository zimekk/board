import React, { MouseEventHandler, useEffect, useRef, useState } from "react";

export const Button = ({
  title,
  onPress,
  ...rest
}: {
  title: string;
  onPress: MouseEventHandler;
  disabled?: boolean;
}) => (
  <button onClick={onPress} {...rest}>
    {title}
  </button>
);

export const Link = ({
  title,
  onPress,
}: {
  title: string;
  onPress: MouseEventHandler;
}) => (
  <a
    href="#"
    onClick={onPress ? (e) => (e.preventDefault(), onPress(e)) : undefined}
  >
    {title}
  </a>
);

export const Text = "div";
export const View = "div";

export default function Player({ uri, loop }: { uri: string; loop: boolean }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement>(null);

  async function play() {
    if (ref.current) {
      ref.current.play();
    }
  }

  async function pause() {
    if (ref.current) {
      ref.current.pause();
    }
  }

  useEffect(() => {
    const audio = ref.current;
    if (audio) {
      const onPlay = (e) => (console.log(["play"], e), setPlaying(true));
      const onPause = (e) => (console.log(["pause"], e), setPlaying(false));

      audio.addEventListener("play", onPlay);
      audio.addEventListener("pause", onPause);

      return () => {
        audio.removeEventListener("play", onPlay);
        audio.removeEventListener("pause", onPause);
      };
    }
  }, [ref]);

  return (
    <View>
      {playing ? (
        <Button title="Pause" onPress={pause} />
      ) : (
        <Button title="Play" onPress={play} disabled={!uri} />
      )}
      <audio ref={ref} src={uri} loop={loop} autoPlay controls />
    </View>
  );
}
