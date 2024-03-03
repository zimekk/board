import { Router, json } from "express";
import { PeerServer } from "peer";

export const peerServer = PeerServer({ port: 9000, path: "/myapp" });

export const router = () =>
  Router().post("/webrtc", json(), (req, res) => res.json({}));
