(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[59],{59:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>F});var n=a(2983),r=a(1861);const o=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],l=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],i=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],c=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],s=(e,t,a)=>{let n=e;return"string"==typeof t||Array.isArray(t)?n=e.toLocaleString(t,a):!0!==t&&void 0===a||(n=e.toLocaleString(void 0,a)),n};var u=a(1906),d=a(4917),p=a(5232),m=a(9097),h=a(6256);const k={AUTOS:"AUTOS",AUTOS_ITEM:"AUTOS_ITEM",DEPOT:"DEPOT",DIRECTIONS:"DIRECTIONS",EURO:"EURO",FLATS:"FLATS",FUNDS:"FUNDS",GAMES:"GAMES",GPASS:"GPASS",HOTSHOT:"HOTSHOT",LECLERC:"LECLERC",MACAN:"MACAN",PLOTS:"PLOTS",PROMO:"PROMO",PROMO_ITEM:"PROMO_ITEM",OTODOM:"OTODOM",OTODOM_OFFER:"OTODOM_OFFER",OTOMOTO:"OTOMOTO",OTOMOTO_OFFER:"OTOMOTO_OFFER",PRODUCTS:"PRODUCTS",PRODUCTS2:"PRODUCTS2",RATES:"RATES",ROOMS:"ROOMS",RYNEK:"RYNEK",SALOM:"SALOM",STATIONS:"STATIONS",STATION:"STATION",STOCK:"STOCK",ROSSM:"ROSSM",THULE:"THULE",UNKNOWN:"UNKNOWN"},w=h.z.object({url:h.z.string(),body:h.z.object({}).passthrough().optional()}),y=h.z.object({delay:h.z.number().default(0),priority:h.z.number().optional(),removeOnComplete:h.z.union([h.z.boolean(),h.z.number()]).optional(),repeat:h.z.object({cron:h.z.string().optional()}).optional(),timestamp:h.z.number().optional()}),g=h.z.object({id:h.z.string(),data:h.z.object({url:h.z.string()}),timestamp:h.z.number().optional()}),b=(h.z.object({data:h.z.object({url:h.z.string()}),opts:y.default({})}).transform((({data:{url:e},opts:{timestamp:t=Date.now()}})=>({timestamp:t,url:e}))),h.z.object({id:h.z.string(),name:h.z.string(),data:h.z.object({url:h.z.string().optional()}).passthrough(),opts:y.extend({removeOnComplete:h.z.union([h.z.boolean(),h.z.number()]).optional(),repeat:h.z.object({count:h.z.number(),key:h.z.string(),cron:h.z.string()}).strict().optional(),jobId:h.z.string().optional(),backoff:h.z.object({type:h.z.enum(["fixed"]),delay:h.z.number()}).optional(),delay:h.z.number(),timestamp:h.z.number(),prevMillis:h.z.number().optional(),attempts:h.z.number()}).strict(),progress:h.z.number(),delay:h.z.number(),timestamp:h.z.number(),attemptsMade:h.z.number(),stacktrace:h.z.array(h.z.unknown()),returnvalue:h.z.null(),failedReason:h.z.string().optional(),finishedOn:h.z.null(),processedOn:h.z.number().nullable()}).strict().array()),z=g.extend({data:h.z.object({url:h.z.string().optional()}).passthrough(),type:h.z.string().optional(),returnvalue:h.z.any({})});var f=a(681);const E=f.ZP.div`
  display: inline-block;
  width: 1em;
  height: 1em;
  position: relative;

  .spinner {
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    margin: 0;
  }

  svg {
    animation: rotate 2s linear infinite;
    margin: -25px 0 0 -25px;
    width: 50px;
    height: 50px;

    & .path {
      stroke: #5652bf;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;function C(){return n.createElement(E,null,n.createElement("svg",{className:"spinner",viewBox:"0 0 50 50"},n.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})))}var S=a(1019),O=a.n(S),_=a(4235);const v=f.ZP.fieldset`
  min-inline-size: auto;
`,M=f.ZP.legend``;function B({children:e,expanded:t=!1,legend:a}){const[r,o]=(0,n.useState)((()=>t)),l=(0,n.useCallback)((e=>(e.preventDefault(),o((e=>!e)))),[]);return n.createElement(v,null,a&&n.createElement(M,null,n.createElement("a",{href:"#",onClick:l},`${r?"-":"+"} ${a}`)),r&&e)}function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},P.apply(this,arguments)}function T({href:e="#",...t}){const a="#"===e[0];return n.createElement("a",P({href:e,target:a?void 0:"_blank",rel:a?void 0:"noopener noreferrer"},t))}const j="",N=["Andrychów","Augustów","Bartoszyce","Bełchatów","Biała Podlaska","Białki","Białogard","Białystok","Bielsk Podlaski","Bielsko-Biała","Biłgoraj","Bochnia","Bogatynia","Bolesławiec","Braniewo","Brodnica","Brzeg","Brzesko","Bydgoszcz","Bytom","Bytów","Chełm","Chojnice","Chorzów","Choszczno","Chrzanów","Ciechanów","Cieszyn","Czeladź","Częstochowa","Działdowo","Dąbrowa Górnicza","Dębica","Dęblin","Elbląg","Ełk","Garwolin","Gdańsk","Gdynia","Giżycko","Gliwice","Gniezno","Gorlice","Gorzów Wielkopolski","Gostyń","Grodzisk Mazowiecki","Grudziądz","Gryfice","Głogów","Hrubieszów","Inowrocław","Iława","Janki","Jarocin","Jarosław","Jastrzębie Zdrój","Jasło","Jaworzno","Jelenia Góra","Kalisz","Katowice","Kielce","Kluczbork","Kobierzyce","Konin","Koszalin","Kozienice","Koło","Kołobrzeg","Kościan","Kościerzyna","Kraków","Krapkowice","Krosno","Krotoszyn","Kutno","Kwidzyn","Kędzierzyn-Koźle","Kępno","Kłodzko","Legionowo","Legnica","Leszno","Lubań","Lublin","Lubliniec","Lębork","Malbork","Mielec","Mińsk Mazowiecki","Mrągowo","Myszków","Mysłowice","Myślenice","Myślibórz","Mława","Namysłów","Nowa Sól","Nowy Dwór Mazowiecki","Nowy Sącz","Nowy Targ","Nowy Tomyśl","Nysa","Olecko","Oleśnica","Olsztyn","Opoczno","Opole","Ostrowiec Świętokrzyski","Ostrołęka","Ostrów Mazowiecka","Ostrów Wielkopolski","Otwock","Oława","Oświęcim","Pabianice","Piaseczno","Piekary Śląskie","Piotrków Trybunalski","Pisz","Piła","Pleszew","Polkowice","Poznań","Pruszcz Gdański","Pruszków","Przasnysz","Przemyśl","Pszczyna","Puck","Puławy","Płock","Płońsk","Racibórz","Radom","Radomsko","Rawa Mazowiecka","Rawicz","Ruda Śląska","Rumia","Rybnik","Rzeszów","Sandomierz","Sanok","Siedlce","Siemianowice Śląskie","Sieradz","Sierpc","Skierniewice","Skoczów","Sochaczew","Sokołów Podlaski","Sokółka","Solec Kujawski","Sosnowiec","Stalowa Wola","Starachowice","Stargard","Starogard Gdański","Stojadła","Strzegom","Strzelce Opolskie","Suwałki","Swarzędz","Szamotuły","Szczawno Zdrój","Szczecin","Szczecinek","Szczytno","Słupsk","Tarnobrzeg","Tarnowo Podgórne","Tarnowskie Góry","Tarnów","Tczew","Tomaszów Lubelski","Tomaszów Mazowiecki","Toruń","Trzcianka","Tychy","Wadowice","Warszawa","Warszawa Białołęka","Warszawa Mokotów","Warszawa Ochota","Warszawa Praga","Warszawa Wola/Żoliborz","Warszawa Śródmieście","Wałbrzych","Wejherowo","Wieluń","Wodzisław Śląski","Wołomin","Wrocław","Września","Wyszków","Włocławek","Zabrze","Zakopane","Zambrów","Zamość","Zawiercie","Zduńska Wola","Zgierz","Zgorzelec","Zielona Góra","Łomża","Łuków","Łódź","Łęczna","Śrem","Środa Wielkopolska","Świdnica","Świdnik","Świdwin","Świebodzin","Świecie","Świnoujście","Świętochłowice","Żagań","Żary","Żory","Żyrardów","Żywiec"],D=(e,t,a=j)=>fetch(`${a}${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:t?JSON.stringify(t):null}),x=["repeatable","delayed"],$=[5,10,15,30],R=async(e,t)=>(console.info([t],{item:e}),D("scrap",e,"")).then((e=>e.json())).then((e=>e.returnvalue.json&&D("parse",e)));function L({getDelayed:e}){const[t,a]=(0,n.useState)((()=>[])),[r,o]=(0,n.useState)((()=>!1)),[l,i]=(0,n.useState)(!1),[c,s]=(0,n.useState)((()=>x[1])),[k,g]=(0,n.useState)((()=>$[0])),[b,z]=(0,n.useState)((()=>({blocked:!0,type:"",query:""}))),[f,E]=(0,n.useState)((()=>b)),S=(0,n.useMemo)((()=>new u.x),[]);(0,n.useEffect)((()=>{const e=S.pipe((0,d.U)((({query:e,...t})=>JSON.stringify({...t,query:e.toLowerCase().trim()}))),(0,p.x)(),(0,m.b)(400)).subscribe((e=>E((t=>({...t,...JSON.parse(e)})))));return()=>e.unsubscribe()}),[S]),(0,n.useEffect)((()=>{S.next(b)}),[b]);const[v,M]=(0,n.useState)((()=>[{data:{url:"https://www.autocentrum.pl/ac-ajax/stations-get-stations?zoom=6"},opts:{repeat:{cron:"0 15 * * *"}}},{data:{url:"https://rvm-prod.aws.bmw.cloud/similarity-search/v2/search?countries=PL&consumer=stockLocator_PL&maxResults=12&startIndex=0",body:{searchContext:[{productTypes:{value:["CAR"]},salesDestinations:[{name:"ONLINE",onlineStatus:!0}],model:{marketingModelRange:{value:["JCW_F56","JCW_F57","X3_G01"]}}}],resultsContext:{sort:[{by:"PRODUCTION_DATE",order:"DESC"}]}}},opts:{repeat:{cron:"0 12 * * *"}}},{blocked:!0,data:{url:"https://finder.porsche.com/pl/pl-PL/search?model=macan&model-generation=95b-iii"},opts:{repeat:{cron:"5 12 1 * *"}}},{data:{url:"https://www.rbinternational.com.pl/rest/rates/?type=kursywalut&range=all"},opts:{repeat:{cron:"15 8 * * *"}}},{blocked:!0,data:{url:"https://www.x-kom.pl/promocje"},opts:{repeat:{cron:"1 11,20 * * *"}}},{data:{url:"https://www.al.to/promocje"},opts:{repeat:{cron:"1 12,19 * * *"}}},{blocked:!0,data:{url:"https://www.x-kom.pl/goracy_strzal"},opts:{repeat:{cron:"15 10,22 * * *"}}},{data:{url:"https://www.al.to/goracy_strzal"},opts:{repeat:{cron:"5 9,21 * * *"}}},{data:{url:"https://ursynow.leclerc.pl/"},opts:{repeat:{cron:"0 10,20 * * *"}}},{data:{url:"https://www.xbox.com/pl-PL/xbox-game-pass"},opts:{repeat:{cron:"30 13 * * *"}}}].concat(["hale-magazyny/wynajem/mazowieckie","mieszkania/wynajem/warszawa/?search%5Bdistrict_id%5D=373&search%5Bfilter_enum_builttype%5D%5B0%5D=blok&search%5Bfilter_enum_rooms%5D%5B0%5D=one","mieszkania/wynajem/warszawa/?search%5Bdistrict_id%5D=353&search%5Bfilter_enum_builttype%5D%5B0%5D=blok&search%5Bfilter_float_m:from%5D=70&search%5Bfilter_enum_rooms%5D%5B0%5D=three"].map((e=>`https://www.olx.pl/nieruchomosci/${e}/`)).map(((e,t)=>({data:{url:e},opts:{repeat:{cron:`${t} 9,18 * * *`}}})))).concat([].map((e=>`https://www.thule.com/pl-pl/${e}`)).map(((e,t)=>({data:{url:e},opts:{repeat:{cron:`${t} 21 * * *`}}})))).concat(["granica_45581","kanie_134919","komorow_117329","konstancin-jeziorna","michalowice_101993","nowa-wies_139387","otrebusy","pecice","podkowa-lesna","stare-babice","warszawa","zalesie-gorne"].map((e=>`https://www.olx.pl/d/nieruchomosci/dzialki/sprzedaz/${e}/`)).map(((e,t)=>({data:{url:e},opts:{repeat:{cron:`${t} 9,17 * * *`}}})))).concat([].map((e=>`https://www.otodom.pl/pl/oferty/sprzedaz/${e}?limit=72&page=1`)).concat(["dom/mazowieckie/piaseczynski/konstancin--jeziorna","dzialka/lodzkie/belchatowski/kleszczow","dzialka/mazowieckie/otwocki/jozefow/jozefow","dzialka/mazowieckie/piaseczynski/konstancin--jeziorna","dzialka/mazowieckie/piaseczynski/piaseczno/zalesie-gorne","dzialka/mazowieckie/pruszkowski/michalowice","dzialka/mazowieckie/pruszkowski/raszyn","dzialka/mazowieckie/warszawa/warszawa/warszawa","dzialka/mazowieckie/warszawa/warszawa/warszawa/bemowo/boernerowo","dzialka/mazowieckie/warszawa/warszawa/warszawa/ursus","dzialka/mazowieckie/warszawa/warszawa/warszawa/wawer/anin","dzialka/mazowieckie/warszawa/warszawa/warszawa/wawer/miedzeszyn","dzialka/mazowieckie/warszawa/warszawa/warszawa/wawer/miedzylesie","dzialka/mazowieckie/warszawski-zachodni/izabelin","dzialka/mazowieckie/warszawski-zachodni/stare-babice"].map((e=>`https://www.otodom.pl/pl/wyniki/sprzedaz/${e}?limit=72&page=1`))).map(((e,t)=>({blocked:!0,data:{url:e},opts:{repeat:{cron:`${t+30} 10,18 * * *`}}})))).concat(["bmw/x3?search%5Bfilter_enum_generation%5D=gen-g01-2017","honda/accord/seg-combi?search%5Bfilter_enum_generation%5D=gen-viii-2008","mini/cooper-s--john-cooper-works","porsche/macan"].map((e=>`https://www.otomoto.pl/osobowe/${e}`)).map(((e,t)=>({data:{url:e},opts:{repeat:{cron:`${t+30} 9 * * *`}}})))).concat(["nowe-domy-mazowieckie","nowe-domy-warszawa"].map((e=>`https://rynekpierwotny.pl/s/${e}/`)).map(((e,t)=>({data:{url:e},opts:{repeat:{cron:`${t+1} 10 * * *`}}})))).concat([2,4,8,33,34,35,36,37,43,44,73,74,75,77,79,80,82,84,91,103,104,105,106,107,112,113,114,117,119,121,122,123,124,126,127,128,129,130,132].map((e=>`https://www.pkotfi.pl/_ajax/rest/v2/tfi/fund/${e}/values/?format=json&division=daily`)).map(((e,t)=>({data:{url:e},opts:{repeat:{cron:`${t+1} 14 * * *`}}})))).concat(O()(["9NKX70BBCDRN","9Z1W36CRQ9DF","B4X7PC56X1VV","9MTLKM2DJMZ2","C08JXNK0VG5L","9N9J38LPVSM3","9P6SRW1HVW9K","BVH2R2SBWL51","9PNJXVCVWD4K","9MZ0SR207MG8","9P4SH7HLMLFS","9N1CS194W1Q6","9P1HX37NMJLT","BRZZLBF5T245","9P513P4MWC71","C2MBDNDS3H5W","BWVBNCMF22ZK","9N6J02VPG635","BS5RXLL3WQ2J","C2HQVXVVLMKG","BVJLKDG2TX8H","C4VKLMG1HLZW","9N04KQK2LBZL","9NMBJQ0265ZK","BSMZH25V6V46","9N9QFGPBH418","9NS86BQ33SPX","9NXPBSMHPLTV","9N8VG0B7TDZ0","9PH3RR8MVFJL","9NM0CRXJ389D","BNNMLWZRNQF6","9P778MQ2JPKC","9NH5HN11FG4M","C348248BJZCQ","9PGPQK0XTHRZ","9PG5Q9HGZXQ2","9MTJ74MKQM46","9NHXSG62QD2L","9NC7XRNRMNFH","9NRX3HRMZQ7Z","9NFM39PSFXJD","9NDDMHZRZ0R6","9NP5S7RDH5QB","9NNF99GPP4XW","9PMQDM08SNK9"],5).map((e=>`https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=${e.join(",")}&market=PL&languages=pl-pl&MS-CV=DGU1mcuYo0WMMp+F.1`)).map(((e,t)=>({data:{url:e},opts:{repeat:{cron:`${t+1} 13 * * *`}}})))).concat(["g-2/c/159-laptopy-notebooki-ultrabooki.html?producent=357-apple","g-2/c/1439-plecaki-na-laptopy.html?producent=1150-thule","g-2/c/1663-tablety.html?producent=357-apple","g-2/c/1709-nettopy-mini-pc.html?producent=357-apple","g-2/c/1709-nettopy-mini-pc.html?producent=1832-raspberry-pi","g-2/c/2980-notebooki-laptopy-14-0.html?producent=357-apple","g-4/c/310-karty-pamieci-sd.html?producent=303-sandisk","g-4/c/315-pendrive-pamieci-usb.html?producent=29-samsung&producent=59-kingston&producent=303-sandisk","g-4/c/979-karty-pamieci-microsd.html?producent=29-samsung&producent=59-kingston&producent=303-sandisk","g-4/c/1590-smartfony-i-telefony.html?producent=357-apple","g-4/c/1836-etui-i-obudowy-na-smartfony.html?producent=357-apple","g-4/c/1837-ladowarki-do-smartfonow.html?producent=357-apple&producent=1839-green-cell","g-4/c/2287-akcesoria-do-tabletow.html?producent=357-apple","g-4/c/2748-sluchawki-true-wireless.html?producent=357-apple","g-4/c/3008-smartwatche-lte.html?producent=357-apple","g-5/c/158-zasilacze-do-komputera.html?producent=368-nzxt","g-5/c/346-karty-graficzne-nvidia.html?producent=27-asus&producent=57-gigabyte&producent=1126-inno3d","g-5/c/388-obudowy-komputerowe.html?producent=368-nzxt","g-5/c/439-dyski-zewnetrzne-hdd.html?producent=26-wd&f1730-format=18808-2.5","g-5/c/1779-dyski-ssd.html?producent=29-samsung&producent=59-kingston&producent=506-crucial","g-5/c/2599-chlodzenia-komputerowe.html?producent=368-nzxt","g-5/c/2997-procesory-amd-ryzen-5.html?producent=3-amd","g-5/c/3402-pamieci-ram-ddr5.html?producent=2484-kingston-fury","g-5/c/3618-plyty-glowne-socket-am5.html","g-6/c/15-monitory.html?producent=357-apple","g-6/c/34-zasilacze-awaryjne-ups.html?producent=154-apc","g-6/c/34-zasilacze-awaryjne-ups.html?producent=1308-eaton","g-6/c/421-urzadzenia-sieciowe.html?producent=628-ubiquiti&hide_unavailable=1","g-6/c/425-switche.html?producent=276-tp-link&f3303-typ-obudowy=45868-do-szaf-rack&hide_unavailable=1","g-6/c/456-access-pointy.html?producent=276-tp-link&hide_unavailable=1","g-6/c/1215-sluchawki.html?producent=357-apple&producent=1214-marshall&producent=2334-shure","g-6/c/1295-monitory-led-32-i-wieksze.html?producent=396-dell","g-6/c/2280-szafy-rack.html?producent=1278-lanberg","g-6/c/2326-kamery-ip.html?producent=276-tp-link&producent=2287-hikvision","g-6/c/2506-glosniki-przenosne.html?producent=374-jbl&f1872-moc-glosnikow-rms=71075-10-49-w","g-6/c/3095-statywy-do-mikrofonow.html?producent=818-elgato&producent=2025-rode&producent=2438-blue-microphones","g-7/c/171-joysticki.html?producent=896-thrustmaster","g-8/c/1425-odtwarzacze-multimedialne.html?producent=357-apple","g-8/c/2672-etui-na-sluchawki.html?f5654-kompatybilnosc=151468-apple-airpods","g-12/c/2466-baterie-i-akumulatorki.html?f2834-typ-ogniwa=41678-aa-r6&f2834-typ-ogniwa=41679-aaa-r03","g-12/c/3472-stacje-zasilania.html?producent=2599-ecoflow","g-64/c/2294-drony.html?producent=1009-dji","g-64/c/2368-baterie-do-dronow.html?producent=1009-dji&f5168-kompatybilnosc=246374-dji-mini-3-pro","g-64/c/2326-kamery-ip.html?producent=2287-hikvision","g-64/c/2326-kamery-ip.html?producent=276-tp-link&producent=628-ubiquiti","g-64/c/2406-inteligentny-dom.html?producent=807-google","g-64/c/2412-gniazda-smart-plug.html?producent=276-tp-link&producent=1023-xiaomi&producent=1311-wiz","g-64/c/2582-gimbale.html?producent=1009-dji&producent=1155-zhiyun","g-64/c/3006-inteligentne-lampy.html?producent=2867-twinkly","g-64/c/3037-rejestratory-ip.html?producent=276-tp-link&producent=628-ubiquiti&producent=2287-hikvision","g-64/c/3086-dyski-twarde-do-monitoringu.html"].map((e=>`https://www.x-kom.pl/${e}`)).map(((e,t)=>({blocked:!0,data:{url:e},opts:{repeat:{cron:`${t+1} 7,14 * * *`}}})))).concat(["g-19/c/1786-odkurzacze.html?producent=539-bosch&producent=545-dyson&producent=546-karcher&producent=555-tefal&f170-typ-odkurzacza=25377-pionowy","g-19/c/1796-maszynki-do-mielenia.html?producent=539-bosch","g-19/c/1798-ekspresy-do-kawy.html?producent=464-siemens&producent=1977-wmf","g-19/c/1800-suszarko-lokowki.html?producent=567-babyliss&producent=569-remington","g-19/c/1803-roboty-kuchenne.html?producent=539-bosch&producent=1977-wmf","g-19/c/1820-wentylatory.html?producent=1023-xiaomi","g-19/c/2354-agd-do-kuchni.html?producent=1977-wmf","g-19/c/2362-akcesoria-do-kuchni.html?producent=3035-girmi","g-19/c/2362-akcesoria-do-kuchni.html?producent=1977-wmf","g-19/c/2471-akcesoria-roboty-kuchenne.html?producent=539-bosch&producent=1977-wmf","g-19/c/2880-generatory-pary.html","g-19/c/3519-parownice-do-sprzatania.html?producent=546-karcher","g-25/c/3038-inteligentne-kamery.html?producent=1023-xiaomi","g-63/c/2073-klocki-lego.html?producent=629-lego&f833-seria=8890-lego-technic&f833-seria=161664-lego-dots","g-70/c/3503-zmywarki-do-zabudowy-60-cm.html?producent=464-siemens"].map((e=>`https://www.al.to/${e}`)).map(((e,t)=>({data:{url:e},opts:{repeat:{cron:`${t+1} 8,15 * * *`}}})))).concat(["category=akcesoria-do-ipada-i-tabletow-multimedialnych&__=Apple","category=archiwizacja-danych1&__=WD","category=czysciki-parowe&__=Karcher","category=dyski-wewnetrzne-ssd&__=Kingston","category=ekspresy-cisnieniowe&__=Siemens,jura","category=etui-do-telefonow&__=Apple","category=fotele-i-stojaki-do-kierownicy&__=Asus,sparco","category=gilotyny-i-trymery","category=glosniki-przenosne&__=BowersWilkins,Sonos,Yamaha,jbl,marshall","category=karty-pamieci&__=SanDisk&_i=2,4&_j=6,8","category=ladowarki-ipod-iphone&__=Apple","category=laptopy-i-netbooki&__=Apple","category=lodowki-do-zabudowy&__=Siemens","category=lokowko-suszarki&__=Babyliss,Dyson,Remington","category=miksery-kielichowe&__=Bosch,KitchenAid,Tefal,wmf","category=obiektywy&_h=2","category=odkurzacze-pionowe&__=Bosch,Dyson,Karcher,Tefal","category=pendrive-pamieci-usb&__=Kingston,SanDisk&_h=2,3","category=piekarniki-do-zabudowy&__=Siemens","category=plyty-do-zabudowy&__=Siemens","category=pralki&__=Siemens","category=roboty-wieloczynnosciowe&__=Bosch,wmf&_az=4","category=roboty-wieloczynnosciowe&__=KitchenAid&_aw=1","category=sluchawki&__=Apple,marshall","category=smartwatch&__=Apple","category=stabilizatory-do-kamer-i-aparatow","category=suszarki&__=Siemens","category=telefony-komorkowe&__=Apple","category=telewizory-led-lcd-plazmowe&__=Panasonic","category=wentylatory-i-klimatory&__=xiaomi","category=wyposazenie-do-ekspresow&__=Siemens","category=wyposazenie-do-robotow-kuchennych&__=Bosch","category=zelazka-systemowe&__=Philips","category=zmywarki-do-zabudowy&__=Siemens"].map((e=>`https://www.euro.com.pl/rest/api/products/search?startFrom=0&numberOfItems=17&${e}&developSearchMode=false&orderBy=POPULARITY&direction=ASC`)).map(((e,t)=>({data:{url:e},opts:{repeat:{cron:`${t+1} 9,16 * * *`}}})))).concat(["CategoryId=8305&BrandIds=6254","CategoryId=8339&BrandIds=4081","CategoryId=8343&BrandIds=10624&BrandIds=10757","CategoryId=8344","CategoryId=8380&BrandIds=10504","CategoryId=8379&BrandIds=10251","CategoryId=8382&BrandIds=10193&BrandIds=11576","CategoryId=8576&BrandIds=7261","CategoryId=8589&BrandIds=5259","CategoryId=8603&BrandIds=4309&Tags=393_2702","CategoryId=8613&BrandIds=2353","CategoryId=8615&BrandIds=2353","CategoryId=8657&BrandIds=2362"].map((e=>`https://www.rossmann.pl/szukaj?${e}&Page=1&PageSize=24`)).map(((e,t)=>({data:{url:e},opts:{repeat:{cron:`${t+1} 7 * * *`}}})))).concat([].map((e=>`https://www.salomon.com/pl-pl/shop-emea/${e}.html`)).map(((e,t)=>({data:{url:e},opts:{repeat:{cron:`${t+1} 8 * * *`}}})))).concat(O()([],1).map((e=>`https://www.x-kom.pl/szukaj?q=${e.join("+")}`)).map(((e,t)=>({data:{url:e},opts:{repeat:{cron:`${t} 16 * * *`}}})))).concat(O()([],1).map((e=>`https://www.al.to/szukaj?q=${e.join("+")}`)).map(((e,t)=>({data:{url:e},opts:{repeat:{cron:`${t} 17 * * *`}}})))).concat([].map((e=>[`https://booking.profitroom.com/api/${e}/details`])).flat().map(((e,t)=>({data:{url:e},opts:{repeat:{cron:`${t} 18 * * *`}}})))).concat([].map((([e,t,a="driving"])=>`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent([e,t].join(","))}&destination=${encodeURIComponent([52.2268,20.9921].join(","))}&travelmode=${encodeURIComponent(a)}&hl=pl`)).map(((e,t)=>({data:{url:e},opts:{repeat:{cron:`${t} 19 * * *`}}})))).concat(["ab75c33d-3a26-4342-b36a-6e5fef0a3ac3"].map((e=>`https://api.um.warszawa.pl/api/action/dbstore_get/?id=${encodeURIComponent(e)}`)).map(((e,t)=>({data:{url:e},opts:{repeat:{cron:`${t+30} 22 * * *`}}})))))),P=(0,n.useMemo)((()=>h.z.object({data:w,opts:y.extend(r?{priority:h.z.number().default(1)}:{}).transform((({repeat:e,...t})=>({delayed:{...t,delay:(0,_.seconds)(k)},repeatable:{...t,repeat:e}}[c])))}).transform((e=>({...e,id:e.data.url}))).array().parse(v.filter((({blocked:e=!1})=>e===b.blocked)))),[c,k,r,v,b.blocked]),j=(0,n.useMemo)((()=>P.filter((e=>""===f.query||e.data.url.includes(f.query)))),[P,f]),L=(0,n.useCallback)((({target:e})=>a((t=>e.checked?t.concat(e.value):t.filter((t=>t!==e.value))))),[]),I=(0,n.useCallback)((({target:e})=>g(Number(e.value))),[]),K=(0,n.useCallback)((({target:e})=>s(e.value)),[]),A=(0,n.useCallback)(((e,t="scrap")=>(i(!0),R(e,t)).catch(console.error).then((()=>i(!1)))),[]),W=(0,n.useCallback)((e=>N.reduce(((t,a)=>t.then((()=>fetch(`shops/${e}?areaName=${encodeURIComponent(a)}`))).then((e=>e.json())).then((e=>console.log({areaName:a},e.filter((({productAvailability:e})=>!["UNAVAILABLE"].includes(e)))))).then((()=>new Promise((e=>setTimeout(e,(0,_.seconds)(10*Math.random()))))))),Promise.resolve())),[]),G=(0,n.useMemo)((()=>j.map((e=>e.id)).filter((e=>t.includes(e)))),[j,t]);return n.createElement(B,{legend:"process",expanded:!0},n.createElement("div",null,n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:j.length>0&&G.length===j.length,disabled:0===j.length,onChange:(0,n.useCallback)((({target:e})=>{return t=j.map((e=>e.id)),a((a=>a.filter((e=>!t.includes(e))).concat(e.checked?t:[])));var t}),[j])})),n.createElement("span",null,`${t.length} / ${j.length}`)," ",n.createElement("label",null,n.createElement("span",null,"query"),n.createElement("input",{type:"search",value:b.query,onChange:(0,n.useCallback)((({target:e})=>z((t=>({...t,query:e.value})))),[])})),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:b.blocked,onChange:(0,n.useCallback)((({target:e})=>z((t=>({...t,blocked:e.checked})))),[])}),n.createElement("span",null,"blocked")),n.createElement("span",null,x.map((e=>n.createElement("label",{key:e},n.createElement("input",{type:"radio",name:"useId",value:e,onChange:K,checked:c===e}),n.createElement("span",null,e)))),"delayed"===c&&n.createElement("span",null," ",n.createElement("select",{value:k,onChange:I},$.map((e=>n.createElement("option",{key:e,value:e},`${e} s`)))))),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:r,onChange:(0,n.useCallback)((({target:e})=>o(e.checked)),[])}),n.createElement("span",null,"priority")),n.createElement("button",{onClick:(0,n.useCallback)((()=>j.filter((e=>t.includes(e.id))).reduce(((e,t)=>e.then((()=>D("process",t)))),Promise.resolve()).then((()=>a([]))).then(e)),[j,t])},"delayed"===c?"process":"add"),n.createElement("button",{onClick:(0,n.useCallback)((()=>D("cleanup").then(e)),[])},"cleanup"),n.createElement("button",{onClick:()=>{return(e=prompt("plu:","1225761"))&&W(e);var e}},"shops"),n.createElement("button",{onClick:(0,n.useCallback)((()=>{const e=prompt("Url:","https://");e&&(M((t=>[{data:{url:e},opts:{repeat:{cron:"0 19 * * *"}}}].concat(t))),a([e]))}),[])},"append url"),n.createElement("button",{disabled:l,onClick:(0,n.useCallback)((()=>(i(!0),j).filter((e=>t.includes(e.id))).reduce(((e,t,n,r)=>e.then((()=>R(t,`scrap ${n+1}/${r.length}`))).then((()=>a((e=>e.filter((e=>e!==t.id)))))).then((()=>n<r.length-1&&new Promise((e=>setTimeout(e,(0,_.seconds)(10*Math.random()))))))),Promise.resolve()).catch(console.error).then((()=>i(!1)))),[j,t])},"scrap"),l&&n.createElement(C,null)),j.map((e=>n.createElement("div",{key:e.id},n.createElement("div",null,n.createElement("label",{style:{display:"flex",flexDirection:"row",overflow:"hidden"}},n.createElement("input",{type:"checkbox",value:e.id,checked:t.includes(e.id),onChange:L}),n.createElement(T,{href:e.id,style:{flex:1,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"auto"}},e.id),e.opts.repeat?.cron?n.createElement("pre",{style:{fontSize:"xx-small",margin:4}},e.opts.repeat.cron):n.createElement("button",{disabled:l,onClick:()=>A(e)},"scrap"))),t.includes(e.id)&&n.createElement("pre",null,JSON.stringify(e,null,2))))))}const I={_date:"date",_url:"url"},K=50,A={start:0,limit:100,data:!1,returnvalue:!0};function W(){const[e,t]=(0,n.useState)(0),[a,w]=(0,n.useState)((()=>A)),[y,g]=(0,n.useState)((()=>({groupBy:Object.keys(I)[0],type:"",query:""}))),[b]=(0,n.useState)((()=>({type:[""].concat(Object.values(k))}))),[f,E]=(0,n.useState)(!1),[S,O]=(0,n.useState)((()=>y)),[_,v]=(0,n.useState)([]),[M,B]=(0,n.useState)((()=>[])),P=(0,n.useCallback)((({target:e})=>B((t=>e.checked?t.concat(e.value):t.filter((t=>t!==e.value))))),[]),T=(0,n.useMemo)((()=>new u.x),[]);(0,n.useEffect)((()=>{const e=T.pipe((0,d.U)((({query:e,...t})=>JSON.stringify({...t,query:e.toLowerCase().trim()}))),(0,p.x)(),(0,m.b)(400)).subscribe((e=>O((t=>({...t,...JSON.parse(e)})))));return()=>e.unsubscribe()}),[T]),(0,n.useEffect)((()=>{T.next(y)}),[y]);const N=(0,n.useMemo)((()=>(console.log(S),_.filter((e=>(""===S.type||S.type===e.type)&&(""===S.query||e.data.url.includes(S.query)))))),[_,S]);console.log(N);const x=(0,n.useMemo)((()=>N.map((e=>({...e,_date:e.timestamp?(0,r.W)(e.timestamp,"yyyy-MM-dd"):"",_url:e.data.url||""}))).reduce(((e,t)=>{return a=t[y.groupBy],Object.assign(e,{[a]:(e[a]||[]).concat(t)});var a}),{})),[N,y.groupBy]),$=(0,n.useCallback)((e=>{return e.preventDefault(),t=e.target instanceof HTMLAnchorElement&&e.target.dataset&&e.target.dataset.group?x[e.target.dataset.group].map((e=>e.id)):[],B((e=>e.filter((e=>!t.includes(e))).concat(t)));var t}),[x]),R=(0,n.useCallback)((e=>(E(!0),D("entries",e)).then((e=>(t(Number(e.headers.get("content-length"))),e.json()))).then((t=>e.data?h.z.any({}).array().parseAsync(t):Promise.all(t.map((e=>z.parseAsync(e)))))).then(v).then((()=>(E(!1),B([]))))),[]),L=(0,n.useMemo)((()=>N.map((e=>e.id)).filter((e=>M.includes(e)))),[N,M]),W=(0,n.useRef)(null);return n.createElement("fieldset",{ref:W},n.createElement("legend",null,"entries"),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"limit"),n.createElement("select",{value:a.limit,onChange:(0,n.useCallback)((({target:e})=>w((t=>({...t,start:0,limit:Number(e.value)})))),[])},[1,5,10,25,50,100,250,500,1e3].map((e=>n.createElement("option",{key:e,value:e},e))))),n.createElement("label",null,n.createElement("span",null,"start"),n.createElement("button",{disabled:0==a.start,onClick:(0,n.useCallback)((()=>w((e=>({...e,start:e.start-e.limit})))),[])},"‹"),n.createElement("select",{value:a.start,onChange:(0,n.useCallback)((({target:e})=>w((t=>({...t,start:Number(e.value)})))),[])},[...Array(K+1)].map(((e,t)=>t*a.limit)).filter((e=>e<1e4)).map((e=>n.createElement("option",{key:e,value:e},e)))),n.createElement("button",{disabled:a.start===a.limit*K,onClick:(0,n.useCallback)((()=>w((e=>({...e,start:e.start+e.limit})))),[])},"›")),n.createElement("button",{disabled:f,onClick:()=>R(a)},"entries"),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:a.data,onChange:(0,n.useCallback)((({target:e})=>w((t=>({...t,data:e.checked})))),[])}),n.createElement("span",null,"data")),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:a.returnvalue,onChange:(0,n.useCallback)((({target:e})=>w((t=>({...t,returnvalue:e.checked})))),[])}),n.createElement("span",null,"returnvalue")),n.createElement("button",{disabled:f,onClick:()=>w((e=>(e=>(R(e),e))({...e,start:0,limit:5})))},"top 5"),n.createElement("button",{disabled:f,onClick:()=>w((e=>(e=>(R(e),e))({...e,start:0,limit:10})))},"top 10"),n.createElement("button",{disabled:f,onClick:()=>w((e=>(e=>(R(e),e))({...e,start:0,limit:100})))},"top 100"),n.createElement("button",{disabled:f,onClick:()=>w((e=>(e=>(R(e),e))({...e,start:3e3,limit:100})))},"3000+"),n.createElement("button",{disabled:f,onClick:()=>w((e=>(e=>(R(e),e))({...e,start:5e3,limit:100})))},"5000+"),f&&n.createElement(C,null)),n.createElement("div",null,n.createElement("label",null,n.createElement("span",null,"groupby"),n.createElement("select",{value:y.groupBy,onChange:(0,n.useCallback)((({target:e})=>g((t=>({...t,groupBy:e.value})))),[])},Object.entries(I).map((([e,t])=>n.createElement("option",{key:e,value:e},t))))),n.createElement("label",null,n.createElement("span",null,"type"),n.createElement("select",{value:y.type,onChange:(0,n.useCallback)((({target:e})=>g((t=>({...t,type:e.value})))),[])},b.type.map((e=>n.createElement("option",{key:e,value:e},e))))),n.createElement("label",null,n.createElement("span",null,"query"),n.createElement("input",{type:"search",value:y.query,onChange:(0,n.useCallback)((({target:e})=>g((t=>({...t,query:e.value})))),[])})),e>0&&n.createElement("span",null,function(e,t){if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);const a=(t={bits:!1,binary:!1,space:!0,...t}).bits?t.binary?c:i:t.binary?l:o,n=t.space?" ":"";if(t.signed&&0===e)return` 0${n}${a[0]}`;const r=e<0,u=r?"-":t.signed?"+":"";let d;if(r&&(e=-e),void 0!==t.minimumFractionDigits&&(d={minimumFractionDigits:t.minimumFractionDigits}),void 0!==t.maximumFractionDigits&&(d={maximumFractionDigits:t.maximumFractionDigits,...d}),e<1)return u+s(e,t.locale,d)+n+a[0];const p=Math.min(Math.floor(t.binary?Math.log(e)/Math.log(1024):Math.log10(e)/3),a.length-1);return e/=(t.binary?1024:1e3)**p,d||(e=e.toPrecision(3)),u+s(Number(e),t.locale,d)+n+a[p]}(e))),n.createElement("div",null,n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:N.length>0&&L.length===N.length,disabled:0===N.length,onChange:(0,n.useCallback)((({target:e})=>{return t=N.map((e=>e.id)),B((a=>a.filter((e=>!t.includes(e))).concat(e.checked?t:[])));var t}),[N])})),n.createElement("span",null,`${M.length} / ${N.length}`)," ",n.createElement("button",{disabled:0===M.length,onClick:(0,n.useCallback)((()=>D("entries/delete",{selected:M}).then((e=>e.json())).then((()=>v((e=>e.filter((({id:e})=>!M.includes(e))))))).then((()=>B([])))),[M])},"delete")),n.createElement("div",{style:f?{opacity:.5}:{}},Object.entries(x).map((([e,t])=>n.createElement("section",{key:e},e&&n.createElement("div",null,n.createElement("strong",null,n.createElement("a",{href:"#",onClick:$,"data-group":e},e))),n.createElement("div",null,t.map((({error:e,...t})=>n.createElement("div",{key:t.id,style:e?{color:"red"}:{}},n.createElement("div",null,n.createElement("label",null,n.createElement("input",{type:"checkbox",value:t.id,checked:M.includes(t.id),onChange:P}),t.timestamp&&n.createElement("span",null,(0,r.W)(t.timestamp,"yyyy-MM-dd HH:mm:ss")))," ","| ",n.createElement("a",{href:`${j}entry/${t.id}`},"item")," |"," ",n.createElement("a",{href:`${j}json/${t.id}`},"json")," |"," ",n.createElement("a",{href:`${j}html/${t.id}`},"html")," |"," ",n.createElement("a",{href:t.data.url},"open")," |"," ",n.createElement("a",{href:`${j}delete/${t.id}`},"delete")),n.createElement("pre",null,JSON.stringify(M.includes(t.id)?t:h.z.object({id:h.z.string(),data:h.z.object({data:h.z.object({url:h.z.string()}).optional(),url:h.z.string().optional()}).transform((({data:e,url:t})=>t||e.url)),type:h.z.string().optional()}).parse(t),null,2)),e&&M.includes(t.id)&&n.createElement("pre",null,e))))))))),N.length>0&&N.length===a.limit&&n.createElement("div",null,n.createElement("button",{disabled:f,onClick:()=>(W.current?.scrollIntoView({behavior:"auto",block:"start",inline:"nearest"}),w((e=>(e=>(R(e),e))({...e,start:e.start+e.limit}))))},"next ›")))}function G({loading:e,setLoading:t,delayed:a,setDelayed:r,getDelayed:o,selected:l,setSelected:i}){const[c,s]=(0,n.useState)((()=>({query:""}))),[k,w]=(0,n.useState)((()=>c)),y=(0,n.useMemo)((()=>new u.x),[]);(0,n.useEffect)((()=>{const e=y.pipe((0,d.U)((({query:e,...t})=>JSON.stringify({...t,query:e.toLowerCase().trim()}))),(0,p.x)(),(0,m.b)(400)).subscribe((e=>w((t=>({...t,...JSON.parse(e)})))));return()=>e.unsubscribe()}),[y]),(0,n.useEffect)((()=>{y.next(c)}),[c]),(0,n.useEffect)((()=>{o()}),[]);const g=(0,n.useCallback)((({target:e})=>i((t=>e.checked?t.concat(e.value):t.filter((t=>t!==e.value))))),[]),b=(0,n.useMemo)((()=>(console.log(k),a.filter((e=>""===k.query||"string"==typeof e.data.url&&e.data.url.includes(k.query))))),[a,k]),z=(0,n.useMemo)((()=>b.map((e=>e.id)).filter((e=>l.includes(e)))),[b,l]);return n.createElement(B,{legend:"delayed"},n.createElement("div",null,n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:a.length>0&&z.length===b.length,disabled:0===a.length,onChange:(0,n.useCallback)((({target:e})=>{return t=b.map((e=>e.id)),i((a=>a.filter((e=>!t.includes(e))).concat(e.checked?t:[])));var t}),[b])})),n.createElement("span",null,`${l.length} / ${b.length}`)," ",n.createElement("label",null,n.createElement("span",null,"query"),n.createElement("input",{type:"search",value:c.query,onChange:(0,n.useCallback)((({target:e})=>s((t=>({...t,query:e.value})))),[])})),n.createElement("button",{disabled:0===l.length||e,onClick:(0,n.useCallback)((()=>(t(!0),D("entries/delete",{selected:l})).then((e=>e.json())).then((()=>r((e=>e.filter((({id:e})=>!l.includes(e))))))).then((()=>(t(!1),i([]))))),[l])},"delete"),n.createElement("button",{disabled:e,onClick:(0,n.useCallback)(o,[])},"refresh"),e&&n.createElement(C,null)),b.map((e=>n.createElement("div",{key:e.id},n.createElement("div",null,n.createElement("label",null,n.createElement("input",{type:"checkbox",value:e.id,checked:l.includes(e.id),onChange:g}),n.createElement("span",null,e.id))," ","| ",n.createElement("a",{href:e.data.url},"open")," |"," ",n.createElement("a",{href:`${j}delete/${e.id}`},"delete")),n.createElement("pre",null,JSON.stringify(l.includes(e.id)?e:h.z.object({id:h.z.string(),data:h.z.object({url:h.z.string().optional()}).transform((({url:e})=>e))}).parse(e),null,2))))))}function Z(){const[e,t]=(0,n.useState)((()=>[])),[a,r]=(0,n.useState)(!1),[o,l]=(0,n.useState)((()=>[])),i=(0,n.useCallback)((()=>(r(!0),D("delayed",{})).then((e=>e.json())).then(b.parseAsync).then(l).then((()=>(r(!1),t([]))))),[]);return n.createElement(n.Fragment,null,n.createElement(G,{loading:a,setLoading:r,delayed:o,setDelayed:l,getDelayed:i,selected:e,setSelected:t}),n.createElement(L,{getDelayed:i}))}function F(){return n.createElement("section",null,n.createElement("h2",null,"Hello ",n.createElement("a",{href:"board"},"board")),n.createElement(Z,null),n.createElement(W,null))}},1019:function(e,t){"use strict";(function(){function a(e,t){var a=[];t=parseInt(t)||2;for(var n=0;n<Math.ceil(e.length/t);n++){var r=n*t,o=r+t;a.push(e.slice(r,o))}return a}e.exports&&(t=e.exports=a),t.chunk=a}).call(this)},4235:e=>{function t(e){return function(t){return Math.round(t*e)}}e.exports={seconds:t(1e3),minutes:t(6e4),hours:t(36e5),days:t(864e5),weeks:t(6048e5),months:t(26298e5),years:t(315576e5)}}}]);
//# sourceMappingURL=59.js.map