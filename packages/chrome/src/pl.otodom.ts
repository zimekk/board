import type { HTTPRequest, HTTPResponse, Page } from "puppeteer";

export const scrap = async (page: Page, url: string) =>
  page
    .on("request", (req: HTTPRequest) => {
      if (
        ["document"].includes(req.resourceType()) &&
        req.url().match("www.otodom.pl/")
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
    .on("response", async (res: HTTPResponse) => {
      console.log(res.url());
    })
    .goto(url, {
      waitUntil: "networkidle2",
      // timeout: 60_000,
    })
    .then(async () => {
      const e = `[document.querySelector('script#__NEXT_DATA__')].map(e => JSON.parse(unescape(e.textContent)))[0]`;
      console.log(["page.evaluate"], e);
      const json = (await page.evaluate(e)) as object;
      console.log({ json });
      return { url, json };
    })
    .finally(() => page.close());
