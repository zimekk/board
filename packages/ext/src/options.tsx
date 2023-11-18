import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./containers/App";

console.log(["options"]);

createRoot(document.body.appendChild(document.createElement("div"))).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
