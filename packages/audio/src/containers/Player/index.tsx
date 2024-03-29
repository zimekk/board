import React, {
  type ComponentProps,
  type MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

export interface MetaType {
  title: string;
  album?: string;
  artist?: string;
  artwork?: { src: string }[];
}

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
  ...rest
}: ComponentProps<"a"> & {
  title: string;
  onPress: MouseEventHandler;
}) => (
  <a
    href="#"
    onClick={onPress ? (e) => (e.preventDefault(), onPress(e)) : undefined}
    {...rest}
  >
    {title}
  </a>
);

export const Text = "div";
export const View = "div";

export default function Player({
  uri,
  loop,
  meta,
  onEnded,
}: {
  uri: string;
  loop: boolean;
  meta: MetaType;
  onEnded?: () => void;
}) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement>(null);

  async function play() {
    if (ref.current) {
      await ref.current.play();
      console.log(["play"]);
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
      const onPlay = (e) => (console.log(["onPlay"], e), setPlaying(true));
      const onPause = (e) => (console.log(["onPause"], e), setPlaying(false));
      // const onEnded = (e) => (console.log(["onEnded"], e));

      audio.addEventListener("play", onPlay);
      audio.addEventListener("pause", onPause);
      audio.addEventListener("ended", onEnded);

      return () => {
        audio.removeEventListener("play", onPlay);
        audio.removeEventListener("pause", onPause);
        audio.removeEventListener("ended", onEnded);
      };
    }
  }, [ref, onEnded]);

  useEffect(() => {
    if (playing) {
      // https://web.dev/media-session/
      if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata(meta);
      }
    }
  }, [playing, meta]);

  return (
    <View>
      {playing ? (
        <Button title="Pause" onPress={pause} />
      ) : (
        <Button title="Play" onPress={play} disabled={!uri} />
      )}
      <audio ref={ref} src={uri} loop={loop} autoPlay controls />
      <Button
        title="Forward"
        onPress={() => {
          const audio = ref.current;
          if (audio && audio.duration) {
            audio.currentTime = audio.duration - 3;
          }
        }}
        disabled={!ref}
      />
    </View>
  );
}
