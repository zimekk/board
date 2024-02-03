import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { format } from "date-fns";
import "typeface-roboto";
import styles from "./styles.module.scss";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export default function Section() {
  const [data, setData] = useState(() => ({
    logo: "Board Logo",
    text: "Board Text",
  }));
  const [edit, setEdit] = useState(() => false);
  const [time, setTime] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClick = useCallback<MouseEventHandler<HTMLElement>>(
    () => setEdit((edit) => !edit),
    [],
  );
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      (({ name, value }) =>
        (console.log({ name, value }), setData)((data) => ({
          ...data,
          [name]: value,
        })))(target),
    [],
  );

  return (
    <section className={styles.Section}>
      <div className={styles.Border}>
        <div className={styles.Logo} onClick={handleClick}>
          {data.logo}
        </div>
        <div className={styles.Strip}>
          <div className={styles.Time}>{format(time, "HH:mm")}</div>
          <marquee className={styles.Marquee}>{data.text}</marquee>
        </div>
        {edit && (
          <form className={styles.Form}>
            <div>
              <label>
                <div>logo</div>
                <input
                  type="text"
                  name="logo"
                  value={data.logo}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                <div>text</div>
                <input
                  type="text"
                  name="text"
                  value={data.text}
                  onChange={handleChange}
                />
              </label>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
