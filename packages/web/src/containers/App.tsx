import React, { Suspense, lazy, useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import history from "history/browser";
import styles from "./App.module.scss";

const Spinner = () => <span>Loading...</span>;

const PAGES = {
  audio: lazy(() => import("@dev/audio")),
  cron: lazy(() => import("@dev/cron")),
  hello: lazy(() => import("./Hello")),
  movie: lazy(() => import("@dev/movie")),
  overlay: lazy(() => import("@dev/overlay")),
  photo: lazy(() => import("@dev/photo")),
  recipes: lazy(() => import("@dev/recipes")),
  request: lazy(() => import("@dev/request")),
  scrap: lazy(() => import("@dev/scrap")),
  share: lazy(() => import("@dev/share")),
  status: lazy(() => import("@dev/status")),
  stream: lazy(() => import("@dev/stream")),
  video: lazy(() => import("@dev/video")),
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
    history.listen(({ location }) => setPage(getPage(location))),
  );

  const Page = PAGES[page] || null;

  return (
    <section className={styles.App}>
      {page !== "overlay" && (
        <h1 className={styles.Nav}>
          Board
          {Object.keys(PAGES).map((page) => (
            <a key={page} href={`#${page}`}>
              {page}
            </a>
          ))}
          <a href="ext.zip">ext</a>[{page}]
        </h1>
      )}
      <Suspense fallback={<Spinner />}>
        <Page />
      </Suspense>
    </section>
  );
}

export default hot(App);
