import { z } from "zod";

export const PhotoSchema = z.object({
  name: z.string(),
});

export type PhotoType = z.infer<typeof PhotoSchema>;
