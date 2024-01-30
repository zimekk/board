import React from "react";
// import { createAsset } from "use-asset";
import styles from "./Hello.module.scss";

// const asset = createAsset(async (version = 1) => {
//   const res = await fetch(`api/data.json?${version}`);
//   return await res.json();
// });

export default function Section() {
  // const data = asset.read(); // As many cache keys as you need
  return (
    <section className={styles.Section}>
      <h2>Hello</h2>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </section>
  );
}
