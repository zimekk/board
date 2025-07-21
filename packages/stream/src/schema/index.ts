import { z } from "zod";

export const StreamsSchema = z.object({
  live: z
    .record(
      z.string(),
      z.object({
        publisher: z.object({
          app: z.string(),
          stream: z.string(),
          clientId: z.string(),
          connectCreated: z.string(),
          bytes: z.number(),
          ip: z.string(),
          audio: z
            .object({
              codec: z.string(),
              profile: z.string(),
              samplerate: z.number(),
              channels: z.number(),
            })
            .nullable(),
          video: z.object({
            codec: z.string(),
            width: z.number(),
            height: z.number(),
            profile: z.string(),
            level: z.number(),
            fps: z.number(),
          }),
        }),
        subscribers: z.array(z.unknown()),
      }),
    )
    .optional(),
});
