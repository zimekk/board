import React, { useCallback } from "react";
import { SKIP_ACTION } from "../constants";
import styles from "./App.module.scss";

export default function Popup() {
  const handleClick = useCallback(() => {
    chrome.runtime.sendMessage({
      type: SKIP_ACTION,
    });
    console.log(["sendMessage"]);
  }, []);
  return (
    <section className={styles.Popup}>
      <h1 className={styles.Nav}>
        {import.meta.env.DEV
          ? "Board Extension Popup [dev]"
          : "Board Extension Popup"}
      </h1>
      <button onClick={handleClick}>skip</button>
    </section>
  );
}
