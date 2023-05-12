import React, { MouseEventHandler, useRef, useState } from "react";

export const Button = ({
  title,
  onPress,
}: {
  title: string;
  onPress: MouseEventHandler;
}) => <button onClick={onPress}>{title}</button>;
export const Text = "div";
export const View = "div";

export default function Player({ uri }: { uri: string }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement>(null);
  async function play() {
    if (ref.current) {
      setPlaying(true);
      ref.current.play();
    }
  }
  async function pause() {
    if (ref.current) {
      setPlaying(false);
      ref.current.pause();
    }
  }

  return (
    <View>
      {playing ? (
        <Button title="Pause" onPress={pause} />
      ) : (
        <Button title="Play" onPress={play} />
      )}
      <audio ref={ref} src={uri} />
    </View>
  );
}
