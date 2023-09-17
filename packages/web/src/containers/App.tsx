import React, { Suspense, lazy, useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import history from "history/browser";
import styles from "./App.module.scss";

const Spinner = () => <span>Loading...</span>;

const PAGES = {
  audio: lazy(() => import("./Audio")),
  cron: lazy(() => import("@dev/cron")),
  hello: lazy(() => import("./Hello")),
  scrap: lazy(() => import("@dev/scrap")),
};

const getPage = (location: { hash: string }) => {
  const [, hash = Object.keys(PAGES)[0]] =
    decodeURI(location.hash).match(/^#(.+)/) || [];
  return hash;
};

function App() {
  const [page, setPage] = useState(getPage(history.location));

  useEffect(() =>
    // location is an object like window.location
    history.listen(({ location }) => setPage(getPage(location)))
  );

  const Page = PAGES[page] || null;

  return (
    <section className={styles.App}>
      <h1 className={styles.Nav}>
        Board
        {Object.keys(PAGES).map((page) => (
          <a key={page} href={`#${page}`}>
            {page}
          </a>
        ))}
        [{page}]
      </h1>
      <Suspense fallback={<Spinner />}>
        <Page />
      </Suspense>
    </section>
  );
}

export default hot(App);
