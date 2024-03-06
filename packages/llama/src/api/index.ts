import { Router, json } from "express";

export const router = () =>
  Router().post("/llama", json(), (req, res) => res.json({}));
