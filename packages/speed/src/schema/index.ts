import { z } from "zod";

export const SpeedSchema = z.object({
  bps: z.string().transform(Number),
  kbps: z.string().transform(Number),
  mbps: z.string().transform(Number),
});

export type SpeedType = z.infer<typeof SpeedSchema>;
