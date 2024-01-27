import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const dev = process.env.NODE_ENV === "development";

// https://github.com/crxjs/vite-4-react
// https://github.com/JohnBra/vite-web-extension
// https://mk668a.com/en/blog/Chrome%20Extension%20with%20React%20+%20CRXJS%20+%20Vite%20+%20Docker/
const manifest = defineManifest({
  manifest_version: 3,
  name: dev ? "Board Extension [dev]" : "Board Extension",
  version: "1.0.0",
  action: {
    // default_popup: "popup.html",
    default_title: dev ? "Board Extension App [dev]" : "Board Extension App",
  },
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
      run_at: "document_end",
    },
  ],
  devtools_page: "devtools.html",
  options_page: "options.html",
  permissions: [
    "activeTab",
    "background",
    "bookmarks",
    "contextMenus",
    "history",
    "scripting",
    "storage",
    "tabs",
  ],
});

export default defineConfig({
  plugins: [react(), crx({ manifest })],
  // server: {
  //   port: 5173,
  //   strictPort: true,
  //   hmr: {
  //     port: 5173,
  //   },
  // },
});
