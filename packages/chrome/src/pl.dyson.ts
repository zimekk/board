import type { HTTPRequest, HTTPResponse, Page } from "puppeteer";
import { z } from "zod";

const Result = z.object({
  productSKU: z.string(),
  bvProductSku: z.string().optional(),
  productName: z.string(),
  stockStatus: z.string(),
  productId: z.string(),
  fullPrice: z.string(),
  saleprice: z.string(),
  primaryImageUrl: z.string(),
  badge: z.object({ theme: z.string().or(z.boolean()), text: z.string() }),
  review: z.object({ number: z.coerce.number(), stars: z.coerce.number() }),
  promotionalPriceCopy: z.string().optional(),
  parents: z.string().array().optional(),
});

const JsonSchema = z.object({
  results: Result.array(),
});

export const scrap = async (page: Page, url: string) =>
  page
    .on("request", (req: HTTPRequest) => {
      if (["document"].includes(req.resourceType())) {
        console.log(["request"], {
          req: req.url(),
          resourceType: req.resourceType(),
        });
        req.continue();
      } else {
        req.abort();
      }
    })
    .on("response", async (res: HTTPResponse) => {
      console.log([res.url(), res.status()]);
    })
    .goto(url, {
      waitUntil: "networkidle2",
      // timeout: 60_000,
    })
    .then(async () => {
      console.log(await page.title());

      const e = `dataLayer.filter(({ event }) => ["tradeUpCardProducts", "promotionalHeroProducts"].includes(event)).flatMap(({ tradeUpCardProducts, promotionalHeroProducts }) => tradeUpCardProducts || promotionalHeroProducts)`;
      console.log(["page.evaluate"], e);
      const results = (await page.evaluate(e)) as unknown;
      console.log({ results });
      const json = { results };
      return JsonSchema.parseAsync(json).then((json) => ({
        url,
        json,
        html: undefined,
      }));
    })
    .finally(() => page.close());
