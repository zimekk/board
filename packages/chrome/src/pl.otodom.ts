import type { HTTPRequest, Page } from "puppeteer";

export const scrap = async (page: Page, url: string) =>
  page
    .on("request", (req: HTTPRequest) => {
      if (
        ["document", "script"].includes(req.resourceType()) &&
        req.url().match(".otodom.pl/")
      ) {
        console.log(["request"], {
          req: req.url(),
          // headers: req.headers(),
          resourceType: req.resourceType(),
        });
        req.continue();
      } else {
        req.abort();
      }
    })
    .goto(url, {
      waitUntil: "networkidle2",
      // timeout: 60_000,
    })
    .then(async () => {
      const e = "__NEXT_DATA__";
      console.log(["page.evaluate"], e);
      const json = (await page.evaluate(e)) as object;
      console.log({ json });
      return { url, json };
    })
    .finally(() => page.close());
