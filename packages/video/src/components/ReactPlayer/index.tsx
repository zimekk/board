import React, { Suspense, type ComponentProps } from "react";
import YoutubeVideo from "youtube-video-element/react";

// https://github.com/muxinc/media-elements/blob/main/examples/nextjs/app/youtube-video/page.tsx
// https://github.com/muxinc/media-elements/blob/main/examples/nextjs/app/player.client.tsx
export default function ReactPlayer({
  width,
  height,
  ...rest
}: ComponentProps<typeof YoutubeVideo> & {
  light: boolean;
  pip: boolean;
  playing: boolean;
}) {
  return (
    <Suspense fallback={null}>
      <YoutubeVideo
        autoplay
        {...rest}
        style={{ display: "block", width, height }}
        config={{}}
      />
    </Suspense>
  );
}
