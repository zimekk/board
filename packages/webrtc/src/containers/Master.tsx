import React, { useEffect, useState } from "react";
import { usePeer } from "@webrtc-remote-control/react";

import ErrorsDisplay from "./ErrorsDisplay";
import CounterDisplay from "./CounterDisplay";
import RemotesList from "./RemotesList";
import ConsoleDisplay from "./ConsoleDisplay";

import { useLogger } from "./react-common";

const MASTER_PERSISTANCE_COUNTERS_SESSION_STORAGE_KEY =
  "master-persist-counters";

export function persistCountersToStorage(counters) {
  let payload;
  try {
    payload = JSON.stringify(
      counters.reduce((acc, cur) => {
        acc[cur.peerId] = cur.counter;
        return acc;
      }, {}),
    );
  } catch {
    payload = JSON.stringify({});
  }
  sessionStorage.setItem(
    MASTER_PERSISTANCE_COUNTERS_SESSION_STORAGE_KEY,
    payload,
  );
}

export function getCountersFromStorage() {
  try {
    return JSON.parse(
      sessionStorage.getItem(MASTER_PERSISTANCE_COUNTERS_SESSION_STORAGE_KEY),
    );
  } catch {
    return {};
  }
}

export function counterReducer(state, { data, id }) {
  return state.reduce((acc, cur) => {
    if (cur.peerId === id) {
      switch (data.type) {
        case "COUNTER_INCREMENT":
          acc.push({
            ...cur,
            counter: cur.counter + 1,
          });
          break;
        case "COUNTER_DECREMENT":
          acc.push({
            ...cur,
            counter: cur.counter - 1,
          });
          break;
        case "REMOTE_SET_NAME":
          acc.push({
            ...cur,
            name: data.name,
          });
          break;
        default:
          acc.push(cur);
          break;
      }
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
}

export function globalCount(counters) {
  return counters.reduce((acc, { counter }) => counter + acc, 0);
}

export default function Master() {
  const { logs, logger } = useLogger();
  const [peerId, setPeerId] = useState(null);
  const [remotesList, setRemotesList] = useState([]);
  const [errors, setErrors] = useState(null);

  const { ready, api, peer, humanizeError } = usePeer();

  const onRemoteConnect = ({ id }) => {
    const countersFromStorage = getCountersFromStorage();
    logger.log({ event: "remote.connect", payload: { id } });
    setRemotesList((counters) => [
      ...counters,
      { counter: countersFromStorage?.[id] ?? 0, peerId: id },
    ]);
  };
  const onRemoteDisconnect = ({ id }) => {
    logger.log({ event: "remote.disconnect", payload: { id } });
    setRemotesList((counters) =>
      // eslint-disable-next-line no-shadow
      counters.filter(({ peerId }) => peerId !== id),
    );
  };
  const onData = ({ id }, data) => {
    logger.log({ event: "data", data, id });
    setRemotesList((counters) => {
      const state = counterReducer(counters, { data, id });
      persistCountersToStorage(state);
      return state;
    });
  };
  const onPeerError = (error) => {
    setPeerId(null);
    logger.error({ event: "error", error });
    setErrors([humanizeError(error)]);
  };

  useEffect(() => {
    if (peer) {
      peer.on("error", onPeerError);
    }
    return () => {
      if (peer) {
        peer.off("error", onPeerError);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [peer]);

  useEffect(() => {
    if (ready) {
      setPeerId(peer.id);
      logger.log({
        event: "open",
        comment: "Master connected",
        payload: { id: peer.id },
      });
      api.on("remote.connect", onRemoteConnect);
      api.on("remote.disconnect", onRemoteDisconnect);
      api.on("data", onData);
    }
    return () => {
      console.log("Master.jsx.cleanup");
      if (ready) {
        api.off("remote.connect", onRemoteConnect);
        api.off("remote.disconnect", onRemoteDisconnect);
        api.off("data", onData);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);
  return (
    <>
      <ErrorsDisplay data={errors} />
      {/* {peerId ? <QrcodeDisplay data={makeRemotePeerUrl(peerId)} /> : null}
      <OpenRemote peerId={peerId} /> */}
      {peerId && (
        <div>
          <a
            href={`${location.href}:${peerId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {peerId}
          </a>
        </div>
      )}
      <div>
        Global counter: <CounterDisplay count={globalCount(remotesList)} />
      </div>
      <RemotesList
        data={remotesList}
        onPingAll={() => {
          if (ready) {
            // api.sendAll({
            //   type: "PING",
            //   date: new Date(),
            // });
          }
        }}
        onPing={(id) => {
          if (ready) {
            // api.sendTo(id, {
            //   type: "PING",
            //   date: new Date(),
            // });
          }
        }}
      />
      <ConsoleDisplay data={[...logs].reverse()} />
    </>
  );
}
