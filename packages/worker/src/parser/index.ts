import { parse } from "../client";

export const parser = async (
  url = "https://api.um.warszawa.pl/api/action/dbstore_get/?id=ab75c33d-3a26-4342-b36a-6e5fef0a3ac3"
) => {
  console.log(["parser"], { url });

  const returnvalue = {
    url,
    json: {
      result: [
        {
          values: [
            {
              value: "1001",
              key: "zespol",
            },
            {
              value: "03",
              key: "slupek",
            },
            {
              value: "Kijowska",
              key: "nazwa_zespolu",
            },
            {
              value: "2201",
              key: "id_ulicy",
            },
            {
              value: "52.248928",
              key: "szer_geo",
            },
            {
              value: "21.044169",
              key: "dlug_geo",
            },
            {
              value: "al.Zieleniecka",
              key: "kierunek",
            },
            {
              value: "2023-05-02 00:00:00.0",
              key: "obowiazuje_od",
            },
          ],
        },
        {
          values: [
            {
              value: "1001",
              key: "zespol",
            },
            {
              value: "04",
              key: "slupek",
            },
            {
              value: "Kijowska",
              key: "nazwa_zespolu",
            },
            {
              value: "2201",
              key: "id_ulicy",
            },
            {
              value: "52.249969",
              key: "szer_geo",
            },
            {
              value: "21.041588",
              key: "dlug_geo",
            },
            {
              value: "Ząbkowska",
              key: "kierunek",
            },
            {
              value: "2023-05-02 00:00:00.0",
              key: "obowiazuje_od",
            },
          ],
        },
      ],
    },
  };

  console.log(
    await parse({
      id: url,
      data: { url },
      returnvalue,
    })
  );
};
