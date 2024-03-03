import { Router, json } from "express";

export const router = () =>
  Router().post("/transfer", json(), (req, res) => res.json({}));
