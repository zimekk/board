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

export const getTypeByUrl = (url: string) =>
  Object.entries({
    [Type.PROMO]: new RegExp("x-kom.pl/promocje|al.to/promocje"),
    [Type.PROMO_ITEM]: new RegExp("promocje.x-kom.pl/|promocje.al.to/"),
    [Type.UNKNOWN]: new RegExp(""),
  })
    .find(([, regExp]) => regExp.test(url))
    ?.shift() as string;

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
    opts: OptsSchema.default({ delay: 0 }),
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
    debounceId: z.null(),
    failedReason: z.string().optional(),
    finishedOn: z.number().nullable(),
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
  returnvalue: z.any(),
});

export const FailedSchema = DelayedSchema;
