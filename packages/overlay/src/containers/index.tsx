import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import "typeface-roboto";
import styles from "./styles.module.scss";

export default function Section() {
  const [time, setTime] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className={styles.Section}>
      <div className={styles.Border}>
        <div className={styles.Logo}>
          Board
          <br />
          Logo
        </div>
        <div className={styles.Strip}>
          <div className={styles.Time}>{format(time, "HH:mm")}</div>
          <marquee className={styles.Marquee}>Board Text</marquee>
        </div>
      </div>
    </section>
  );
}
