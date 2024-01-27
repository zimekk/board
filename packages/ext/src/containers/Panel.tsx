import React from "react";
import styles from "./App.module.scss";

export default function Panel() {
  return (
    <section className={styles.Panel}>
      <h1 className={styles.Nav}>
        {import.meta.env.DEV
          ? "Board Extension Panel [dev]"
          : "Board Extension Panel"}
      </h1>
    </section>
  );
}
