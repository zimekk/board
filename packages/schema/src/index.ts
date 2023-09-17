import { z } from "zod";

export const Type = {
  AUTOS: "AUTOS",
  AUTOS_ITEM: "AUTOS_ITEM",
  DEPOT: "DEPOT",
  DIRECTIONS: "DIRECTIONS",
  EURO: "EURO",
  FLATS: "FLATS",
  FUNDS: "FUNDS",
  GAMES: "GAMES",
  GPASS: "GPASS",
  HOTSHOT: "HOTSHOT",
  LECLERC: "LECLERC",
  MACAN: "MACAN",
  PLOTS: "PLOTS",
  PROMO: "PROMO",
  PROMO_ITEM: "PROMO_ITEM",
  OTODOM: "OTODOM",
  OTODOM_OFFER: "OTODOM_OFFER",
  OTOMOTO: "OTOMOTO",
  OTOMOTO_OFFER: "OTOMOTO_OFFER",
  PRODUCTS: "PRODUCTS",
  PRODUCTS2: "PRODUCTS2",
  RATES: "RATES",
  ROOMS: "ROOMS",
  RYNEK: "RYNEK",
  SALOM: "SALOM",
  STATIONS: "STATIONS",
  STATION: "STATION",
  STOCK: "STOCK",
  ROSSM: "ROSSM",
  THULE: "THULE",
  UNKNOWN: "UNKNOWN",
} as const;

export const DataSchema = z.object({
  url: z.string(),
  body: z.object({}).passthrough().optional(),
});

export const OptsSchema = z.object({
  delay: z.number().default(0),
  priority: z.number().optional(),
  removeOnComplete: z.union([z.boolean(), z.number()]).optional(),
  repeat: z
    .object({
      cron: z.string().optional(),
    })
    .optional(),
  timestamp: z.number().optional(),
});

export const ReturnSchema = z.object({
  id: z.string(),
  data: z.object({
    url: z.string(),
  }),
  timestamp: z.number().optional(),
});

export const CompletedSchema = z
  .object({
    data: z.object({ url: z.string() }),
    opts: OptsSchema.default({}),
  })
  .transform(({ data: { url }, opts: { timestamp = Date.now() } }) => ({
    timestamp,
    url,
  }));

export const DelayedSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    data: z
      .object({
        url: z.string().optional(),
      })
      .passthrough(),
    opts: OptsSchema.extend({
      removeOnComplete: z.union([z.boolean(), z.number()]).optional(),
      repeat: z
        .object({ count: z.number(), key: z.string(), cron: z.string() })
        .strict()
        .optional(),
      jobId: z.string().optional(),
      backoff: z
        .object({
          type: z.enum(["fixed"]),
          delay: z.number(),
        })
        .optional(),
      delay: z.number(),
      timestamp: z.number(),
      prevMillis: z.number().optional(),
      attempts: z.number(),
    }).strict(),
    progress: z.number(),
    delay: z.number(),
    timestamp: z.number(),
    attemptsMade: z.number(),
    stacktrace: z.array(z.unknown()),
    returnvalue: z.null(),
    failedReason: z.string().optional(),
    finishedOn: z.null(),
    processedOn: z.number().nullable(),
  })
  .strict()
  .array();

export const EntriesSchema = ReturnSchema.extend({
  data: z
    .object({
      url: z.string().optional(),
    })
    .passthrough(),
  type: z.string().optional(),
  returnvalue: z.any({}),
});
