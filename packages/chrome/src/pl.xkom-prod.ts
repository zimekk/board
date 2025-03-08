import type { HTTPRequest, HTTPResponse, Page } from "puppeteer";

export const scrap = async (page: Page, url: string) =>
  page
    .on("request", (req: HTTPRequest) => {
      if (
        ["font", "image", "other", "stylesheet"].includes(req.resourceType())
      ) {
        req.abort();
      } else {
        console.log(["request"], {
          req: req.url(),
          // headers: req.headers(),
          resourceType: req.resourceType(),
        });
        req.continue();
      }
    })
    .on("response", async (res: HTTPResponse) => {
      console.log(res.url());
    })
    .goto(url, {
      // waitUntil: "networkidle0",
      waitUntil: "networkidle2",
      timeout: 90_000,
    })
    .then(async () => {
      const e = "__INITIAL_STATE__";
      console.log(["page.evaluate"], e);
      const json = (await page.evaluate(e)) as object;
      return { url, json };
    })
    .then((result) => {
      console.log(result);
      return result;
    })
    .finally(() => page.close());
