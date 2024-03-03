import React, { useCallback, useEffect, useRef } from "react";

export default function RemotesList({ data, onPing, onPingAll }) {
  const ref = useRef(null);
  const onPingAllCallback = useCallback(() => {
    if (onPingAll) {
      onPingAll();
    }
  }, [onPingAll]);
  const onPingCallback = useCallback(
    (e) => {
      if (onPing) {
        onPing(e.detail.id);
      }
    },
    [onPing],
  );
  useEffect(() => {
    // copy the ref to be able to cleanup the right one if it changed
    const refCurrent = ref?.current;
    if (refCurrent) {
      refCurrent.addEventListener("pingAll", onPingAllCallback);
      refCurrent.addEventListener("ping", onPingCallback);
    }
    return () => {
      if (ref) {
        refCurrent.removeEventListener("pingAll", onPingAllCallback);
        refCurrent.removeEventListener("ping", onPingCallback);
      }
    };
  }, [onPingAllCallback, onPingCallback, ref]);
  return (
    <div ref={ref}>
      RemotesList
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
