import type { HTTPRequest, HTTPResponse, Page } from "puppeteer";

export async function scrap(page: Page) {
  return new Promise<{ url: string; html?: string; json?: object }>(
    (resolve, reject) => {
      page
        .on("request", (req: HTTPRequest) => {
          if (["font", "image", "stylesheet"].includes(req.resourceType())) {
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
          try {
            const req = res.request();
            const headers = res.headers();

            if (
              ["fetch", "xhr"].includes(req.resourceType()) &&
              res
                .url()
                .match(
                  "/get/(xkom|alto)/|/v1/(xkom|alto)/hotShots/current|/v1/(xkom|alto)/hotShots/\\d+\\?onlyHeader|/v1/(xkom|alto)/products/searchHints|/api/\\w+/details"
                )
            ) {
              console.log(["resolve.json"], res.url(), headers);
              resolve({ url: res.url(), json: await res.json() });
            }
          } catch (e) {
            console.error(e);
            reject(e);
          }
        });
    }
  );
}
