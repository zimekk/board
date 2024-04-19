import { Router } from "express";
import NetworkSpeed from "network-speed";
import { z } from "zod";
import { SpeedSchema } from "../schema";

const testNetworkSpeed = new NetworkSpeed();

export const router = () =>
  Router()
    .get("/speed/download", async (req, res) =>
      z
        .object({})
        .parseAsync(req.params)
        .then(async () => {
          // https://github.com/kenigbolo/network-speed?tab=readme-ov-file#usage
          const fileSizeInBytes = 500000;
          const baseUrl = `https://eu.httpbin.org/stream-bytes/${fileSizeInBytes}`;
          return await testNetworkSpeed.checkDownloadSpeed(
            baseUrl,
            fileSizeInBytes,
          );
        })
        .then(SpeedSchema.parseAsync)
        .then((speed) => res.send(speed)),
    )
    .get("/speed/upload", async (req, res) =>
      z
        .object({})
        .parseAsync(req.params)
        .then(async () => {
          // https://github.com/kenigbolo/network-speed?tab=readme-ov-file#usage
          const options = {
            hostname: "www.google.com",
            port: 80,
            path: "/catchers/544b09b4599c1d0200000289",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          };
          const fileSizeInBytes = 2000000;
          return await testNetworkSpeed.checkUploadSpeed(
            options,
            fileSizeInBytes,
          );
        })
        .then(SpeedSchema.parseAsync)
        .then((speed) => res.send(speed)),
    );
