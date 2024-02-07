import { z } from "zod";

export const DeviceSchema = z.object({
  host: z.string(),
  name: z.string(),
  xml: z.string(),
  type: z.string(),
});
