import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";

// https://github.com/crxjs/vite-4-react
// https://github.com/JohnBra/vite-web-extension
// https://mk668a.com/en/blog/Chrome%20Extension%20with%20React%20+%20CRXJS%20+%20Vite%20+%20Docker/
const manifest = defineManifest({
  manifest_version: 3,
  name: "Board Extension",
  version: "1.0.0",
  action: { default_popup: "popup.html", default_title: "Board Extension App" },
  background: {
    service_worker: "src/background.ts",
    type: "module",
  },
  content_scripts: [
    {
      matches: [
        "https://www.youtube.com/*",
        // "http://*/*",
        // "https://*/*",
        // "<all_urls>",
      ],
      js: ["src/index.tsx"],
      // css: ["contentStyle.css"],
    },
  ],
  options_page: "options.html",
  permissions: [
    "background",
    "contextMenus",
    "bookmarks",
    "tabs",
    "storage",
    "history",
  ],
});

export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
