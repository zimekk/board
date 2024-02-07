import { z } from "zod";

export const DeviceSchema = z.object({
  host: z.string(),
  name: z.string(),
  xml: z.string(),
  type: z.string(),
});

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
