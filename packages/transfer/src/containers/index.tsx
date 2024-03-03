import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";

// https://github.com/chidokun/p2p-file-transfer
export default function Section() {
  return (
    <section>
      <h2>Transfer</h2>
      <Provider store={store}>
        <App />
      </Provider>
    </section>
  );
}
