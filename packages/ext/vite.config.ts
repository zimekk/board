import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  manifest_version: 3,
  name: "CRXJS React Vite Example",
  version: "1.0.0",
  action: { default_popup: "popup.html", default_title: "Board Extension App" },
  background: {
    service_worker: "src/background.ts",
    type: "module",
  },
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
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
});
