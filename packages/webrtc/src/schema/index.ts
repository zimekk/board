import { z } from "zod";

export const Schema = z.object({});

export type Type = z.infer<typeof Schema>;
