import React from "react";
import styles from "./App.module.scss";

export default function Options() {
  return (
    <section className={styles.Options}>
      <h1 className={styles.Nav}>
        {import.meta.env.DEV
          ? "Board Extension Options [dev]"
          : "Board Extension Options"}
      </h1>
    </section>
  );
}
