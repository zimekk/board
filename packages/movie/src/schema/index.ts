import { z } from "zod";

export const ItemSchema = z.object({
  name: z.string(),
});

export type ItemType = z.infer<typeof ItemSchema>;
