import { z } from "zod";
import { DeviceSchema } from "@dev/cast/schema";

export type DeviceType = z.infer<typeof DeviceSchema>;

export const NetworkSchema = z.object({
  address: z.string(),
  netmask: z.string(),
  family: z.enum(["IPv4", "IPv6"]),
  mac: z.string(),
  internal: z.boolean(),
  cidr: z.string(),
  scopeid: z.number().optional(),
});

export type NetworkType = z.infer<typeof NetworkSchema>;
