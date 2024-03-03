import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./containers/App";

const root = createRoot(
  document.body.appendChild(document.createElement("div")),
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

if ("serviceWorker" in navigator) {
  // window.addEventListener("load", () => {
  //   navigator.serviceWorker
  //     .register("sw.js")
  //     .then((registration) => {
  //       console.log("SW registered: ", registration);
  //     })
  //     .catch((registrationError) => {
  //       console.log("SW registration failed: ", registrationError);
  //     });
  // });
}
