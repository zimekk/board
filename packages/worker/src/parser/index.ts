import chunk from "chunk";
import { chrome, parse } from "../client";

export const parser = async (
  url = "https://api.um.warszawa.pl/api/action/dbstore_get/?id=ab75c33d-3a26-4342-b36a-6e5fef0a3ac3"
) => {
  console.log(["parser"], { url });

  const { json, ...rest } = await chrome(url);

  await chunk(json.result.slice(0, 10_000), 1_000).reduce(
    (promise, result, key, list) =>
      promise
        .then(() => ({
          ...rest,
          json: {
            result,
          },
        }))
        .then((returnvalue) =>
          (console.log(`${key + 1}/${list.length}`, { returnvalue }),
          parse({
            id: url,
            data: { url },
            returnvalue,
          })).then(console.log)
        ),
    Promise.resolve()
  );
};
