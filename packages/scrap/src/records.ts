import chunk from "chunk";

export const SHOPS = [
  "Warszawa",
  "Warszawa Białołęka",
  "Warszawa Mokotów",
  "Warszawa Ochota",
  "Warszawa Praga",
  "Warszawa Wola/Żoliborz",
  "Warszawa Śródmieście",
];

export const records = [
  {
    data: {
      url: "https://www.autocentrum.pl/ac-ajax/stations-get-stations?zoom=6",
    },
    opts: {
      repeat: { cron: "0 15 * * *" },
    },
  },
  // {
  //   data: {
  //     url: "https://najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/search",
  //     body: {
  //       $match: {
  //         transactionalPrice: {
  //           $min: 0,
  //           $max: 1790000,
  //         },
  //       },
  //       $skip: 0,
  //       $limit: 100,
  //     },
  //   },
  //   opts: {
  //     repeat: { cron: "30 11,19 * * *" },
  //   },
  // },
  {
    data: {
      url: "https://rvm-prod.aws.bmw.cloud/similarity-search/v2/search?countries=PL&consumer=stockLocator_PL&maxResults=12&startIndex=0",
      body: {
        searchContext: [
          {
            // usageState: {
            //   value: ["NEW", "DEALER_YOUNG_USED"],
            // },
            // vehicleSalesProcessState: {
            //   type: {
            //     value: ["AVAILABLE", "RESERVED_MANUAL"],
            //   },
            // },
            // brands: {
            //   value: ["MINI"],
            // },
            productTypes: {
              value: ["CAR"],
            },
            salesDestinations: [
              {
                name: "ONLINE",
                onlineStatus: true,
              },
            ],
            // validities: [
            //   {
            //     filters: [
            //       "DEGREE_OF_ELECTRIFICATION_BASED_FUEL_TYPE",
            //       "POWER_KW_BASED_ON_DEGREE_OF_ELECTRIFICATION",
            //       "TRANSMISSION",
            //       "EMISSION_DATA_BASED_ON_DEGREE_OF_ELECTRIFICATION",
            //       "UCP_PRICE_ALL_OPTIONS_PRICED",
            //     ],
            //     requireAll: true,
            //     validity: "VALID",
            //   },
            // ],
            // buNos: [
            //   "32940",
            //   "27023",
            //   "44852",
            //   "35466",
            //   "51057",
            //   "35941",
            //   "28966",
            //   "33160",
            //   "49584",
            //   "35140",
            //   "29029",
            //   "44845",
            //   "28965",
            //   "28597",
            //   "42099",
            //   "06030",
            //   "36891",
            //   "32059",
            //   "51448",
            //   "34238",
            //   "41094",
            //   "50457",
            // ],
            // model: { marketingModelRange: { value: ["MINI_F56"] } },
            model: {
              marketingModelRange: {
                value: ["JCW_F56", "JCW_F57", "X3_G01"],
              },
            },
          },
        ],
        resultsContext: {
          // excludes: ["EQUIPMENT_PRICES"],
          // sort: [
          //   {
          //     by: "PRICE",
          //     order: "ASC",
          //   },
          // ],
          sort: [
            {
              by: "PRODUCTION_DATE",
              order: "DESC",
            },
          ],
        },
      },
    },
    opts: {
      repeat: { cron: "0 12 * * *" },
    },
  },
  {
    blocked: false,
    data: {
      url: "https://finder.porsche.com/pl/pl-PL/search?model=macan&model-generation=95b-iii",
    },
    opts: {
      repeat: { cron: "5 12 1 * *" },
    },
  },
  {
    data: {
      url: "https://www.rbinternational.com.pl/rest/rates/?type=kursywalut&range=all",
    },
    opts: {
      repeat: { cron: "15 8 * * *" },
    },
  },
  {
    blocked: true,
    data: {
      url: "https://www.x-kom.pl/promocje",
    },
    opts: {
      repeat: { cron: "1 11,20 * * *" },
    },
  },
  {
    blocked: true,
    data: {
      url: "https://www.al.to/promocje",
    },
    opts: {
      repeat: { cron: "1 12,19 * * *" },
    },
  },
  {
    blocked: true,
    data: {
      url: "https://www.x-kom.pl/goracy_strzal",
    },
    opts: {
      // removeOnComplete: 2,
      repeat: { cron: "15 10,22 * * *" },
    },
  },
  {
    blocked: true,
    data: {
      url: "https://www.al.to/goracy_strzal",
    },
    opts: {
      repeat: { cron: "5 9,21 * * *" },
    },
  },
  {
    data: {
      url: "https://ursynow.leclerc.pl/",
    },
    opts: {
      repeat: { cron: "0 10,20 * * *" },
    },
  },
  {
    data: {
      url: "https://www.xbox.com/pl-PL/xbox-game-pass",
    },
    opts: {
      repeat: { cron: "30 13 * * *" },
    },
  },
]
  .concat(
    [
      "hale-magazyny/wynajem/mazowieckie",
      // "hale-magazyny/wynajem/stare-babice",
      // "hale-magazyny/wynajem/zielonki-parcela",
      "mieszkania/wynajem/warszawa/?search%5Bdistrict_id%5D=373&search%5Bfilter_enum_builttype%5D%5B0%5D=blok&search%5Bfilter_enum_rooms%5D%5B0%5D=one",
      "mieszkania/wynajem/warszawa/?search%5Bdistrict_id%5D=353&search%5Bfilter_enum_builttype%5D%5B0%5D=blok&search%5Bfilter_float_m:from%5D=70&search%5Bfilter_enum_rooms%5D%5B0%5D=three",
    ]
      .map((cat) => `https://www.olx.pl/nieruchomosci/${cat}/`)
      .map((url, i) => ({
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i} 9,18 * * *` },
        },
      })),
  )
  .concat(
    [
      // "backpacks/laptop-backpacks",
      // "bike-rack",
      // "cargo-carrier/car-top-carrier",
      // "roof-rack/car-roof-racks",
    ]
      .map((cat) => `https://www.thule.com/pl-pl/${cat}`)
      .map((url, i) => ({
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i} 21 * * *` },
        },
      })),
  )
  .concat(
    [
      "granica_45581",
      "kanie_134919",
      "komorow_117329",
      "konstancin-jeziorna",
      "michalowice_101993",
      "nowa-wies_139387",
      "otrebusy",
      "pecice",
      "podkowa-lesna",
      "stare-babice",
      "warszawa",
      "zalesie-gorne",
    ]
      .map(
        (cat) => `https://www.olx.pl/d/nieruchomosci/dzialki/sprzedaz/${cat}/`,
      )
      .map((url, i) => ({
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i} 9,17 * * *` },
        },
      })),
  )
  .concat(
    [
      // "dom/komorow_5600",
      // "dom/michalowice_62659",
      // "dom/warszawa",
      // "dzialka/komorow_5600",
      // "dzialka/michalowice_62659",
      // "dzialka/warszawa",
      // "dzialka/zalesie-gorne",
    ]
      .map(
        (cat) =>
          `https://www.otodom.pl/pl/oferty/sprzedaz/${cat}?limit=72&page=1`,
      )
      .concat(
        [
          "dom/mazowieckie/piaseczynski/konstancin--jeziorna",
          "dzialka/lodzkie/belchatowski/kleszczow",
          "dzialka/mazowieckie/otwocki/jozefow/jozefow",
          "dzialka/mazowieckie/piaseczynski/konstancin--jeziorna",
          "dzialka/mazowieckie/piaseczynski/piaseczno/zalesie-gorne",
          "dzialka/mazowieckie/pruszkowski/michalowice",
          "dzialka/mazowieckie/pruszkowski/raszyn",
          "dzialka/mazowieckie/warszawa/warszawa/warszawa",
          "dzialka/mazowieckie/warszawa/warszawa/warszawa/bemowo/boernerowo",
          "dzialka/mazowieckie/warszawa/warszawa/warszawa/ursus",
          "dzialka/mazowieckie/warszawa/warszawa/warszawa/wawer/anin",
          "dzialka/mazowieckie/warszawa/warszawa/warszawa/wawer/miedzeszyn",
          "dzialka/mazowieckie/warszawa/warszawa/warszawa/wawer/miedzylesie",
          "dzialka/mazowieckie/warszawski-zachodni/izabelin",
          "dzialka/mazowieckie/warszawski-zachodni/stare-babice",
        ].map(
          (cat) =>
            `https://www.otodom.pl/pl/wyniki/sprzedaz/${cat}?limit=72&page=1`,
        ),
      )
      .map((url, i) => ({
        blocked: true,
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i + 30} 10,18 * * *` },
        },
      })),
  )
  .concat(
    [
      // "audi/a4-allroad",
      // "audi/a5?search%5Bfilter_enum_generation%5D=gen-f5-2016",
      "audi/a6/seg-combi?search%5Bfilter_enum_generation%5D=gen-c8-2018",
      "audi/a6-allroad?search%5Bfilter_enum_generation%5D=gen-c8-2019",
      // "audi/q5?search%5Bfilter_enum_generation%5D=gen-fy-2017",
      "audi/q7?search%5Bfilter_enum_generation%5D=gen-ii-2015-q7",
      // "audi/q8",
      "bmw/seria-5?search%5Bfilter_enum_generation%5D%5B0%5D=gen-g30-2017&search%5Bfilter_enum_generation%5D%5B1%5D=gen-g60-2023",
      "bmw/x3?search%5Bfilter_enum_generation%5D=gen-g01-2017",
      "bmw/x3?search%5Bfilter_enum_generation%5D=gen-g45-2024",
      "bmw/x5/od-2024?search%5Bbrand_program_id%5D=16&search%5Bfilter_enum_generation%5D=gen-g05-2018&search%5Border%5D=relevance_web",
      "honda/accord/seg-combi?search%5Bfilter_enum_generation%5D=gen-viii-2008",
      // "honda/jazz?search%5Bfilter_enum_generation%5D=gen-ii-2002-2008-jazz",
      "mini/cooper-s--john-cooper-works",
      "nowe/volvo/xc-90",
      "porsche/macan",
      "volvo/ex90",
      // "volvo/xc-60?search%5Bfilter_enum_generation%5D=gen-ii-2017",
    ]
      .map((cat) => `https://www.otomoto.pl/osobowe/${cat}`)
      .map((url, i) => ({
        blocked: true,
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i + 30} 9 * * *` },
        },
      })),
  )
  .concat(
    ["nowe-domy-mazowieckie", "nowe-domy-warszawa"]
      .map((cat) => `https://rynekpierwotny.pl/s/${cat}/`)
      .map((url, i) => ({
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i + 1} 10 * * *` },
        },
      })),
  )
  .concat(
    [
      2, 4,
      // 5, 6,
      8,
      // 10, 30,
      33, 34, 35, 36, 37, 43, 44, 73, 74, 75, 77, 79, 80, 82, 84, 91, 103, 104,
      105, 106, 107, 112, 113, 114, 117, 119, 121, 122, 123, 124, 126, 127, 128,
      129, 130,
      // 131,
      132,
    ]
      .map(
        (fund) =>
          `https://www.pkotfi.pl/_ajax/rest/v2/tfi/fund/${fund}/values/?format=json&division=daily`,
      )
      .map((url, i) => ({
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i + 1} 14 * * *` },
        },
      })),
  )
  .concat(
    chunk(
      [
        "9NKX70BBCDRN",
        "9Z1W36CRQ9DF",
        "B4X7PC56X1VV",
        "9MTLKM2DJMZ2",
        "C08JXNK0VG5L",
        "9N9J38LPVSM3",
        "9P6SRW1HVW9K",
        "BVH2R2SBWL51",
        "9PNJXVCVWD4K",
        "9MZ0SR207MG8",
        "9P4SH7HLMLFS",
        "9N1CS194W1Q6",
        "9P1HX37NMJLT",
        "BRZZLBF5T245",
        "9P513P4MWC71",
        "C2MBDNDS3H5W",
        "BWVBNCMF22ZK",
        "9N6J02VPG635",
        "BS5RXLL3WQ2J",
        "C2HQVXVVLMKG",
        "BVJLKDG2TX8H",
        "C4VKLMG1HLZW",
        "9N04KQK2LBZL",
        "9NMBJQ0265ZK",
        "BSMZH25V6V46",
        "9N9QFGPBH418",
        "9NS86BQ33SPX",
        "9NXPBSMHPLTV",
        "9N8VG0B7TDZ0",
        "9PH3RR8MVFJL",
        "9NM0CRXJ389D",
        "BNNMLWZRNQF6",
        "9P778MQ2JPKC",
        "9NH5HN11FG4M",
        "C348248BJZCQ",
        "9PGPQK0XTHRZ",
        "9PG5Q9HGZXQ2",
        "9MTJ74MKQM46",
        "9NHXSG62QD2L",
        "9NC7XRNRMNFH",
        "9NRX3HRMZQ7Z",
        "9NFM39PSFXJD",
        "9NDDMHZRZ0R6",
        "9NP5S7RDH5QB",
        "9NNF99GPP4XW",
        "9PMQDM08SNK9",
      ],
      5,
    )
      .map((ids) => {
        const mscv = "DGU1mcuYo0WMMp+F.1";
        return `https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=${ids.join(
          ",",
        )}&market=PL&languages=pl-pl&MS-CV=${mscv}`;
      })
      .map((url, i) => ({
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i + 1} 13 * * *` },
        },
      })),
  )
  .concat(
    [
      "g-2/c/159-laptopy-notebooki-ultrabooki.html?producent=357-apple",
      "g-2/c/494-konwertery.html",
      // "g-2/c/1329-notebooki-laptopy-13-3.html?producent=357-apple",
      // "g-2/c/1331-notebooki-laptopy-15-3.html?producent=357-apple",
      "g-2/c/1439-plecaki-na-laptopy.html?producent=1150-thule",
      "g-2/c/1663-tablety.html?producent=357-apple",
      "g-2/c/1709-nettopy-mini-pc.html?producent=357-apple",
      "g-2/c/1709-nettopy-mini-pc.html?producent=1832-raspberry-pi",
      "g-2/c/2980-notebooki-laptopy-14-0.html?producent=357-apple",
      "g-4/c/310-karty-pamieci-sd.html?producent=303-sandisk",
      "g-4/c/315-pendrive-pamieci-usb.html?producent=29-samsung&producent=59-kingston&producent=303-sandisk",
      // "g-4/c/315-pendrive-pamieci-usb.html?producent=59-kingston",
      // "g-4/c/315-pendrive-pamieci-usb.html?producent=303-sandisk",
      "g-4/c/979-karty-pamieci-microsd.html?producent=29-samsung&producent=59-kingston&producent=303-sandisk",
      // "g-4/c/979-karty-pamieci-microsd.html?producent=303-sandisk",
      "g-4/c/1590-smartfony-i-telefony.html?producent=357-apple",
      "g-4/c/1836-etui-i-obudowy-na-smartfony.html?producent=357-apple",
      "g-4/c/1837-ladowarki-do-smartfonow.html?producent=357-apple&producent=1839-green-cell",
      "g-4/c/2287-akcesoria-do-tabletow.html?producent=357-apple",
      "g-4/c/2301-powerbanki.html?f2901-pojemnosc-nominalna=71720-5-000-9-999-mah",
      "g-4/c/2748-sluchawki-true-wireless.html?producent=357-apple",
      "g-4/c/3008-smartwatche-lte.html?producent=357-apple",
      "g-5/c/158-zasilacze-do-komputera.html?producent=368-nzxt",
      "g-5/c/346-karty-graficzne-nvidia.html?producent=27-asus&producent=57-gigabyte&producent=1126-inno3d",
      // "g-5/c/346-karty-graficzne-nvidia.html?producent=27-asus",
      // "g-5/c/346-karty-graficzne-nvidia.html?producent=57-gigabyte",
      // "g-5/c/346-karty-graficzne-nvidia.html?producent=1126-inno3d",
      // "g-5/c/388-obudowy-komputerowe.html?producent=165-cooler-master",
      // "g-5/c/388-obudowy-komputerowe.html?producent=198-lian-li",
      "g-5/c/388-obudowy-komputerowe.html?producent=368-nzxt",
      "g-5/c/388-obudowy-komputerowe.html?producent=942-phanteks",
      // "g-5/c/388-obudowy-komputerowe.html?producent=1168-jonsbo",
      "g-5/c/439-dyski-zewnetrzne-hdd.html?producent=26-wd&f1730-format=18808-2.5",
      "g-5/c/1779-dyski-ssd.html?producent=29-samsung&producent=59-kingston&producent=506-crucial",
      // "g-5/c/1779-dyski-ssd.html?producent=29-samsung",
      // "g-5/c/1779-dyski-ssd.html?producent=59-kingston",
      // "g-5/c/1779-dyski-ssd.html?producent=506-crucial",
      "g-5/c/2493-zasilacze-komputerowe.html?producent=27-asus&producent=165-cooler-master&producent=198-lian-li&producent=368-nzxt&producent=501-fractal-design&producent=942-phanteks&f2135-typ-okablowania=23618-modularny",
      "g-5/c/2599-chlodzenia-komputerowe.html?producent=368-nzxt",
      "g-5/c/2665-karty-przechwytujace-wideo.html?producent=818-elgato",
      "g-5/c/2997-procesory-amd-ryzen-5.html?producent=3-amd",
      "g-5/c/3402-pamieci-ram-ddr5.html?producent=2484-kingston-fury",
      "g-5/c/3618-plyty-glowne-socket-am5.html",
      "g-6/c/15-monitory.html?producent=357-apple",
      // "g-6/c/34-zasilacze-awaryjne-ups.html?producent=154-apc",
      // "g-6/c/34-zasilacze-awaryjne-ups.html?producent=1308-eaton",
      "g-6/c/421-urzadzenia-sieciowe.html?producent=628-ubiquiti&hide_unavailable=1",
      "g-6/c/425-switche.html?producent=276-tp-link&f3303-typ-obudowy=45868-do-szaf-rack&hide_unavailable=1",
      "g-6/c/456-access-pointy.html?producent=276-tp-link&hide_unavailable=1",
      "g-6/c/459-drukarki-do-zdjec.html",
      "g-6/c/1119-przelaczniki-kvm.html?producent=832-unitek",
      "g-6/c/1215-sluchawki.html?producent=357-apple&producent=1214-marshall&producent=2334-shure",
      "g-6/c/1295-monitory-led-32-i-wieksze.html?producent=396-dell",
      "g-6/c/1407-manipulatory.html",
      // "g-6/c/1544-drukarki-etykiet.html",
      "g-6/c/1749-projektory.html?f1809-technologia-wyswietlania=126474-laser&f1809-technologia-wyswietlania=157709-led",
      "g-6/c/1751-prezentery.html",
      "g-6/c/2280-szafy-rack.html?producent=154-apc",
      "g-6/c/2280-szafy-rack.html?producent=1278-lanberg",
      "g-6/c/2326-kamery-ip.html?producent=276-tp-link&producent=2287-hikvision",
      "g-6/c/2495-sluchawki-bezprzewodowe.html?producent=374-jbl&f1895-budowa-sluchawek=167586-nauszne",
      "g-6/c/2506-glosniki-przenosne.html?producent=374-jbl&f1872-moc-glosnikow-rms=71075-10-49-w",
      "g-6/c/2511-drukarki-3d.html?producent=3499-bambu-lab",
      "g-6/c/2512-filamenty-do-drukarek-3d.html?producent=3499-bambu-lab",
      // "g-6/c/2511-drukarki-3d.html?producent=2367-creality",
      // "g-6/c/2512-filamenty-do-drukarek-3d.html",
      // "g-6/c/2673-etykiety-do-drukarek.html",
      "g-6/c/3095-statywy-do-mikrofonow.html?producent=818-elgato&producent=2025-rode&producent=2438-blue-microphones",
      // "g-7/c/171-joysticki.html?producent=896-thrustmaster",
      "g-7/c/2935-akcesoria-do-streamingu.html?producent=818-elgato",
      "g-8/c/1425-odtwarzacze-multimedialne.html?producent=357-apple",
      // "g-8/c/2672-etui-na-sluchawki.html?f5654-kompatybilnosc=151468-apple-airpods",
      "g-8/c/3478-sprzet-dj.html",
      "g-12/c/266-kable-usb.html?producent=470-gembird&producent=832-unitek&f2934-dlugosc=od-3",
      "g-12/c/409-ladowarki-do-aparatow.html?f3821-kompatybilne-baterie=207606-lp-e12",
      "g-12/c/2466-baterie-i-akumulatorki.html?f2834-typ-ogniwa=41678-aa-r6&f2834-typ-ogniwa=41679-aaa-r03",
      // "g-12/c/3472-stacje-zasilania.html?producent=2599-ecoflow",
      "g-64/c/1933-statywy.html?producent=921-manfrotto",
      // "g-64/c/1933-statywy.html?producent=1056-joby",
      "g-64/c/2294-drony.html?producent=1009-dji",
      "g-64/c/2367-smigla-do-dronow.html?producent=1009-dji&f4755-kompatybilnosc=246391-dji-mini-3-pro",
      "g-64/c/2368-baterie-do-dronow.html?producent=1009-dji&f5168-kompatybilnosc=246374-dji-mini-3-pro",
      // "g-64/c/2326-kamery-ip.html?producent=2287-hikvision",
      "g-64/c/2326-kamery-ip.html?producent=276-tp-link&producent=628-ubiquiti",
      "g-64/c/2406-inteligentny-dom.html?producent=807-google",
      "g-64/c/2406-inteligentny-dom.html?producent=3028-nice",
      // "g-64/c/2412-gniazda-smart-plug.html?producent=276-tp-link&producent=1023-xiaomi&producent=1311-wiz",
      "g-64/c/2582-gimbale.html?producent=1009-dji&producent=1155-zhiyun",
      // "g-64/c/2582-gimbale.html?producent=1009-dji",
      // "g-64/c/2582-gimbale.html?producent=1155-zhiyun",
      "g-64/c/2684-filtry-do-dronow.html?producent=1009-dji&f5751-kompatybilnosc=246401-dji-mini-3-pro",
      // "g-64/c/2994-lampy-led.html?producent=952-newell",
      "g-64/c/3003-inteligentne-sterowniki.html?producent=2421-grenton",
      "g-64/c/3006-inteligentne-lampy.html?producent=2867-twinkly",
      "g-64/c/3037-rejestratory-ip.html?producent=276-tp-link&producent=628-ubiquiti&producent=2287-hikvision",
      "g-64/c/3086-dyski-twarde-do-monitoringu.html",
      "g-64/c/3451-akcesoria-do-urzadzen-smart.html?producent=2421-grenton",
    ]
      .map((path) => `https://www.x-kom.pl/${path}`)
      .map((url, i) => ({
        blocked: true,
        data: {
          url,
        },
        opts: {
          repeat: {
            cron: `${(i + 1) % 60} ${7 + Math.floor((i + 1) / 60)},${14 + Math.floor((i + 1) / 60)} * * *`,
          },
        },
      })),
  )
  .concat(
    [
      "g-19/c/1786-odkurzacze.html?producent=539-bosch&producent=545-dyson&producent=546-karcher&producent=555-tefal&f170-typ-odkurzacza=25377-pionowy",
      // "g-19/c/1796-maszynki-do-mielenia.html?producent=539-bosch",
      "g-19/c/1798-ekspresy-do-kawy.html?producent=464-siemens&producent=1977-wmf",
      // "g-19/c/1800-suszarko-lokowki.html?producent=567-babyliss&producent=569-remington",
      "g-19/c/1803-roboty-kuchenne.html?producent=539-bosch&producent=1977-wmf",
      "g-19/c/1820-wentylatory.html?producent=1023-xiaomi",
      "g-19/c/1913-spieniacze-do-mleka.html",
      "g-19/c/2354-agd-do-kuchni.html?producent=1977-wmf",
      // "g-19/c/2362-akcesoria-do-kuchni.html?producent=3035-girmi",
      "g-19/c/2362-akcesoria-do-kuchni.html?producent=1977-wmf",
      "g-19/c/2471-akcesoria-roboty-kuchenne.html?producent=539-bosch&producent=1977-wmf",
      // "g-19/c/2880-generatory-pary.html",
      "g-19/c/3519-parownice-do-sprzatania.html?producent=546-karcher",
      "g-19/c/3664-akcesoria-do-grilla.html?producent=2375-weber",
      "g-25/c/1117-telewizory.html?producent=16-sony&f1411-rozdzielczosc=21788-uhd-4k-3840-x-2160",
      "g-25/c/1215-sluchawki.html?producent=1212-beyerdynamic",
      "g-25/c/2406-inteligentny-dom.html?producent=1982-sonoff",
      // "g-25/c/2407-czujniki.html?producent=1982-sonoff&producent=3315-shelly",
      // "g-25/c/2590-inteligentne-wlaczniki-swiatla.html?producent=1982-sonoff",
      "g-25/c/2953-dzwonki-do-drzwi.html?producent=628-ubiquiti",
      "g-25/c/3003-inteligentne-sterowniki.html?producent=3315-shelly",
      "g-25/c/3038-inteligentne-kamery.html?producent=1023-xiaomi",
      "g-27/c/1950-zamrazarki.html?producent=464-siemens&producent=539-bosch",
      // "g-63/c/2073-klocki-lego.html?producent=629-lego&f833-seria=8890-lego-technic&f833-seria=161664-lego-dots",
      "g-65/c/3047-grille-ogrodowe.html?producent=2375-weber",
      "g-65/c/3059-narzedzia.html?producent=2354-gardena",
      "g-65/c/3349-pompy-i-akcesoria.html",
      "g-68/c/1749-projektory.html?f1813-kontrast=77178-od-100-0001&f1915-rozdzielczosc-natywna=78689-3840-x-2160-4k",
      "g-70/c/3496-okapy-kuchenne.html?producent=464-siemens",
      "g-70/c/3503-zmywarki-do-zabudowy-60-cm.html?producent=464-siemens",
    ]
      .map((path) => `https://www.al.to/${path}`)
      .map((url, i) => ({
        blocked: true,
        data: {
          url,
        },
        opts: {
          repeat: {
            cron: `${(i + 1) % 60} ${7 + Math.floor((i + 1) / 60)},${15 + Math.floor((i + 1) / 60)} * * *`,
          },
        },
      })),
  )
  .concat(
    [
      "category=akcesoria-do-drukarek-3&__=3doodler&_n=1",
      "category=akcesoria-do-ipada-i-tabletow-multimedialnych&__=Apple",
      "category=archiwizacja-danych1&__=WD",
      "category=czysciki-parowe&__=Karcher",
      "category=dyski-wewnetrzne-ssd&__=Kingston",
      "category=ekspresy-cisnieniowe&__=Siemens,jura",
      "category=etui-do-telefonow&__=Apple",
      "category=fotele-i-stojaki-do-kierownicy&__=Asus,sparco",
      "category=gilotyny-i-trymery",
      "category=glosniki-przenosne&__=BowersWilkins,Sonos,Yamaha,jbl,marshall",
      // "category=glosniki-przenosne&__=jbl",
      // "category=glosniki-przenosne&__=marshall",
      "category=karty-pamieci&__=SanDisk&_i=2,4&_j=6,8",
      "category=ladowarki-ipod-iphone&__=Apple",
      "category=laptopy-i-netbooki&__=Apple",
      "category=lodowki-do-zabudowy&__=Siemens",
      "category=lokowko-suszarki&__=Babyliss,Dyson,Remington",
      // "category=miksery-kielichowe&__=Bosch,KitchenAid,Tefal,wmf",
      "category=mopy-elektryczne&__=Karcher,Vileda",
      // "category=obiektywy&__=Canon",
      // "category=obiektywy&__=Sigma&_h=32",
      "category=obiektywy&_h=2",
      "category=odkurzacze-pionowe&__=Bosch,Dyson,Karcher,Tefal",
      "category=parownice-do-ubran&__=Tefal",
      "category=pendrive-pamieci-usb&__=Kingston,SanDisk&_h=2,3",
      "category=piekarniki-do-zabudowy&__=Siemens",
      "category=plyty-do-zabudowy&__=Siemens",
      "category=pralki&__=Siemens",
      "category=roboty-wieloczynnosciowe&__=Bosch,wmf&_az=4",
      // "category=roboty-wieloczynnosciowe&__=KitchenAid&_aw=1",
      "category=sluchawki&__=Apple,marshall",
      "category=smartwatch&__=Apple",
      "category=stabilizatory-do-kamer-i-aparatow",
      "category=suszarki&__=Siemens",
      "category=telefony-komorkowe&__=Apple",
      "category=telewizory-led-lcd-plazmowe&__=Panasonic",
      "category=wentylatory-i-klimatory&__=xiaomi",
      "category=wyposazenie-do-ekspresow&__=Siemens",
      "category=wyposazenie-do-robotow-kuchennych&__=Bosch",
      // "category=zelazka-systemowe&__=Philips",
      "category=zelazka-systemowe&__=Tefal",
      "category=zmywarki-do-zabudowy&__=Siemens",
    ]
      .map(
        (path) =>
          `https://www.euro.com.pl/rest/api/products/search?startFrom=0&numberOfItems=17&${path}&developSearchMode=false&orderBy=POPULARITY&direction=ASC`,
      )
      .map((url, i) => ({
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i + 1} 9,16 * * *` },
        },
      })),
  )
  .concat(
    [
      "CategoryId=8305&BrandIds=6254", // Dzbanki i filtry / RUBIN
      "CategoryId=8339&BrandIds=4081", // Środki do zmywarki / FINISH
      "CategoryId=8343&BrandIds=10624&BrandIds=10757", // Akcesoria Do Sprzątania / 3M SCOTCH-BRITE / VILEDA
      "CategoryId=8344", // Worki na śmieci
      "CategoryId=8380&BrandIds=10504", // Karma sucha dla kota / PURINA ONE
      "CategoryId=8379&BrandIds=10251", // Karma mokra dla kota / PURINA GOURMET
      "CategoryId=8382&BrandIds=10193&BrandIds=11576", // Akcesoria dla kota / CATSI / ELOY
      "CategoryId=8576&BrandIds=7261", // Higiena / YOPE
      "CategoryId=8589&BrandIds=5259", // Pasty do zębów / MERIDOL
      "CategoryId=8603&BrandIds=4309&Tags=393_2702", // Maszynki i wkłady / GILLETTE / wkłady do maszynek
      "CategoryId=8613&BrandIds=2353", // Papiery toaletowe / ALOUETTE
      "CategoryId=8615&BrandIds=2353", // Chusteczki higieniczne / ALOUETTE
      "CategoryId=8657&BrandIds=2362", // Szampony / ALTERRA
    ]
      .map(
        (path) => `https://www.rossmann.pl/szukaj?${path}&Page=1&PageSize=24`,
      )
      .map((url, i) => ({
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i + 1} 7 * * *` },
        },
      })),
  )
  .concat(
    [
      // "kids/shoes/hiking-shoes",
      // "promotions/outlet/shoes",
      // "promotions/sale/skiing/boots/shopby/medium_16458",
      // "sports/alpine-skiing/boots/shopby/on_piste_74982",
    ]
      .map((path) => `https://www.salomon.com/pl-pl/shop-emea/${path}.html`)
      .map((url, i) => ({
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i + 1} 8 * * *` },
        },
      })),
  )
  .concat(
    [
      // "black-friday",
      // "dyson-na-prezent",
      "produkty/akcesoria/akcesoria-do-odkurzaczy",
      "promocje",
      // "produkty/pielegnacja-podlog",
    ]
      .map((path) => `https://www.dyson.pl/${path}`)
      .map((url, i) => ({
        blocked: true,
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i + 1} 7 * * *` },
        },
      })),
  )
  .concat(
    chunk(
      [
        // "592143",
        // "681134",
        // "681136",
        // "681152",
        // "730554",
        // "730597",
        // "1070889",
      ],
      1,
    )
      .map((ids) => `https://www.x-kom.pl/szukaj?q=${ids.join("+")}`)
      .map((url, i) => ({
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i} 16 * * *` },
        },
      })),
  )
  .concat(
    chunk(
      [
        // "1022668"
      ],
      1,
    )
      .map((ids) => `https://www.al.to/szukaj?q=${ids.join("+")}`)
      .map((url, i) => ({
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i} 17 * * *` },
        },
      })),
  )
  .concat(
    [
      // "aparthotelczarnagora",
      // "aparthotelgiewont1",
      // "belwederhotel",
      // "bluemountainresort",
      // "czarnygron",
      // "grandhotelstamary",
      // "grenohotelspa",
      // "greenmountainhotel",
      // "hotelaquarion",
      // "hotelbaniathermalski",
      // "hotelbukovina",
      // "hotelcrocus",
      // "hotelczarnypotokresortspakrynica",
      // "hotelharnas",
      // "hotelklimczok",
      // "hotelkrysztal4",
      // "hoteloliviamedicalspa",
      // "hotelskalny",
      // "hotelpegaz",
      // "hotelpiotrspawellness",
      // "hotelperlapoludnia1",
      // "hotelprezydentmedicalspawellness",
      // "hotelprzedwiosnie1",
      // "hotelsasanka",
      // "hotelspadrirenaeriskrynicazdroj",
      // "hotelspadrirenaerispolanicazdrj",
      // "hotelspadrirenaeriswzgorzadylewskie",
      // "hotelstok",
      // "hoteltoporow",
      // "hotelwierchomla",
      // "hotelzbjnicwka",
      // "hotelzywieckimedicalspasport",
      // "interferieaquaparksporthotelmalachit",
      // "interferiesporthotelbornit",
      // "kompleksszkoleniowowypoczynkowyskalnyspa",
      // "lemonresort",
      // "mazowszemedispa1",
      // "modrzewieparkhotel1",
      // "nosalowydworresort1",
      // "odysseyclubhotel",
      // "osadasniezka",
      // "willabelweder",
      // "zamekksiezagora",
    ]
      .map((name) => [
        // `https://booking.profitroom.com/pl/${name}/home?currency=PLN`,
        // `https://booking.profitroom.com/pl/${name}/pricelist/offers/?check-in=2023-01-16&check-out=2023-01-22&currency=PLN&r1_adults=2&r1_child5-12=2`,
        `https://booking.profitroom.com/api/${name}/details`,
        // `https://booking.profitroom.com/api/${name}/availability?checkIn=2023-02-13&checkOut=2023-02-19&occupancy%5B0%5D%5Badults%5D=2&occupancy%5B0%5D%5Bchildren%5D%5B0%5D%5BminAge%5D=5&occupancy%5B0%5D%5Bchildren%5D%5B0%5D%5BmaxAge%5D=12&occupancy%5B0%5D%5Bchildren%5D%5B0%5D%5Bcount%5D=2`,
      ])
      .flat()
      .map((url, i) => ({
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i} 18 * * *` },
        },
      })),
  )
  .concat(
    [
      // [52.2329, 21.2252],
      // [52.2329, 21.2252, "transit"],
      // [52.1722, 21.1723],
      // [52.1722, 21.1723, "transit"],
      // [52.202, 21.1559],
      // [52.202, 21.1559, "transit"],
      // [52.201, 21.1294],
      // [52.201, 21.1294, "transit"],
    ]
      // https://developers.google.com/maps/documentation/distance-matrix/distance-matrix#optional-parameters
      .map(
        ([lat, lng, travelmode = "driving"]) =>
          // `https://www.google.com/maps/dir/${lat},${lng}/52.2268,20.9921/data=!4m2!4m1!3e0`
          `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
            [lat, lng].join(","),
          )}&destination=${encodeURIComponent(
            [52.2268, 20.9921].join(","),
          )}&travelmode=${encodeURIComponent(travelmode)}&hl=pl`,
      )
      .map((url, i) => ({
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i} 19 * * *` },
        },
      })),
  )
  .concat(
    ["ab75c33d-3a26-4342-b36a-6e5fef0a3ac3"]
      .map(
        (id) =>
          `https://api.um.warszawa.pl/api/action/dbstore_get/?id=${encodeURIComponent(
            id,
          )}`,
      )
      .map((url, i) => ({
        data: {
          url,
        },
        opts: {
          repeat: { cron: `${i + 30} 22 * * *` },
        },
      })),
  );
