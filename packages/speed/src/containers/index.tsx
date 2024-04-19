import React, { useCallback, useState } from "react";
import type { SpeedType } from "../schema";

interface State {
  download: SpeedType;
  upload: SpeedType;
}

export default function Section() {
  const [state, setState] = useState<State>(() => ({
    download: null,
    upload: null,
  }));

  const handleDownloadSpeed = useCallback(async () => {
    fetch("speed/download")
      .then((res) => res.json())
      .then((download) => setState((state) => ({ ...state, download })));
  }, []);

  const handleUploadSpeed = useCallback(async () => {
    fetch("speed/upload")
      .then((res) => res.json())
      .then((upload) => setState((state) => ({ ...state, upload })));
  }, []);

  return (
    <section>
      <h2>Speed</h2>
      <button onClick={handleDownloadSpeed}>download speed</button>
      <button onClick={handleUploadSpeed}>upload speed</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </section>
  );
}
