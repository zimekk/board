import { api } from "@dev/api/lib";
import { Router } from "express";

export const router = Router()
  .use("/api", api)
  .use("/video", require("@dev/video/api").router())
  .use(require("@dev/api-graphql").router())
  .use(require("@dev/llama/api").router())
  .use(require("@dev/movie/api").router())
  .use(require("@dev/photo/api").router())
  .use(require("@dev/request/api").router())
  .use(require("@dev/share/api").router())
  .use(require("@dev/speed/api").router())
  .use(require("@dev/status/api").router())
  .use(require("@dev/transfer/api").router())
  .use(require("@dev/webrtc/api").router())
  .use(require("@dev/wled/api").router())
  .use(require("@dev/worker").router())
  .use(require("./push").default());
