import React, { useMemo } from "react";
import Peer from "peerjs";
import { WebRTCRemoteControlProvider } from "@webrtc-remote-control/react";
import Master from "./Master";
import Remote from "./Remote";

export const API_URL = process.env.API_URL || "";

const VITE_USE_LOCAL_PEER_SERVER = true;

export function getPeerjsConfig() {
  // when using the local signaling server
  // if (import.meta.env.VITE_USE_LOCAL_PEER_SERVER) {
  if (VITE_USE_LOCAL_PEER_SERVER) {
    return {
      host: "localhost",
      port: 9000,
      path: "/myapp",
    };
  }
  // // default case, we use the alternate server since on some mobile carriers (orange - France)
  // the default host 0.peerjs.com hangs on forever - see https://github.com/peers/peerjs/issues/948#issuecomment-1107437915
  // todo what if this fix triggers the same kind of problem on other carriers ? implement some kind of balancing ?
  return {
    host: "0.peerjs.com",
    port: 443,
    path: "/",
  };
}

// https://github.com/topheman/webrtc-remote-control
export default function Section() {
  const [, masterPeerId = null] = useMemo(
    () => decodeURI(location.hash).match(/^#[^:]+:(.+)?/) || [],
    [],
  );
  const mode = useMemo(
    () => (masterPeerId ? "remote" : "master"),
    [masterPeerId],
  );

  console.log({ masterPeerId, mode });

  return (
    <section>
      <h2>WebRtc</h2>
      {mode && (
        <WebRTCRemoteControlProvider
          mode={mode}
          init={({ getPeerId }) =>
            new Peer(
              getPeerId(),
              // line bellow is optional - you can rely on the signaling server exposed by peerjs
              getPeerjsConfig(),
            )
          }
          masterPeerId={masterPeerId}
          sessionStorageKey="webrtc-remote-control-peer-id-react"
        >
          {mode === "remote" ? <Remote /> : <Master />}
        </WebRTCRemoteControlProvider>
      )}
    </section>
  );
}
