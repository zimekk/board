import { formatQuantity } from "format-quantity";

const textToList = (text: string) =>
  text
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

export default [
  {
    name: "Foxx Gotuje - Carbonarę Na 5 sposobów",
    video: "https://www.youtube.com/watch?v=prFvMhE10Mc",
    servings: 2,
    ingredients: (servings: number) =>
      ((rate) =>
        textToList(`${formatQuantity(4 * rate)} żółtka
      ${150 * rate}-${200 * rate}g guanciale lub pancetty (ostatecznie dobrego suszonego boczku)
      ${40 * rate}g pecorino romano
      ${40 * rate}g grana padano lub parmezanu
      ${200 * rate}-${250 * rate}g makaronu rigatoni
      `))(servings / 2),
    additions: textToList(`
      sól i pieprz
      `),
  },
  {
    name: "Foxx Gotuje - KEBAB PROSTY I WYPASIONY W DOMU",
    video: "https://www.youtube.com/watch?v=eNBK66CXTCs",
    servings: 2,
    ingredients: (servings: number) =>
      ((rate) =>
        textToList(`
      antrykot wołowy
      sos sambal lub harissa
      duże placki tortilla (30cm)
      jogurt naturalny
      majonez
      czosnek
      sól i pieprz
      olej
      pomidor
      sałata
      cebula
      miks przypraw (poniżej składniki)
      ser cheddar (opcja)
      bekon (opcja)
          `))(servings / 2),
    additions: textToList(`
      2 łyżki papryki słodkiej
      3 łyżeczki oregano
      4 łyżeczki bazylii suszonej
      2 łyżeczki rozmarynu
      4 łyżeczki tymianku suszonego
      2 łyżeczki majeranu tartego
      2 łyżeczki soli
      2 łyżeczki kminu rzymskiego
      `),
  },
  {
    name: "Foxx Gotuje - Jaka jest idealna bułka do Smash Burgera",
    video: "https://www.youtube.com/watch?v=dA6TY1xxqcQ",
    servings: 2,
    ingredients: (servings: number) =>
      ((rate) =>
        textToList(`
      Light Brioche:

      ${385 * rate}g mąki
      ${180 * rate}g mleka
      ${40 * rate}g wody
      ${formatQuantity(7.5 * rate)}g drożdży w proszku
      ${5 * rate}g soli
      ${30 * rate}g cukru
      ${formatQuantity(1 * rate)} jajko i ${formatQuantity(1 * rate)} żółtko (białko na eggwash - smarowanie przed wypiekiem)
      ${35 * rate}g miękkiego masła
          `))(servings / 2),
    preparation: () =>
      textToList(`Wszystkie składniki do miksera. Wyrabiamy na gładko, ciasto się może minimalnie lepić, ważne by nie było zbyt rzadkie.
        45 min pod przykryciem w ciepłym miejscu, po tym czasie przewijamy kulkę od spodu (zobacz na filmie) kilkukrotnie.
        Po kolejnych 45 min wyrastania, lepimy kulki po 110-115 g.
        Po przykryciem kolejną godzinę. Smarujemy białkiem pozostałym z jajka.
        Wypiek w 200 stopniach około 15 min, ale najlepiej obserwować jak się robią brązowe. Niższa temp typu 180 też będzie ok, wtedy nieco dłuższy wypiek.
        Smarowanie masłem na końcu :).
      `),
  },
  {
    name: "Domowa PIZZA lepsza niż z pizzerii - przepis na najlepsze ciasto na pizzę 🍕",
    video: "https://www.youtube.com/watch?v=fvm7uz4IUZ0",
    servings: 2,
    ingredients: (servings: number) =>
      ((rate) =>
        textToList(`${350 * rate}g mąki 00 (W250-280)
      ${200 * rate}-${210 * rate}ml zimnej wody
      ${10 * rate}g soli (ok ${formatQuantity((1 / 2) * rate)} łyżeczki)
      ${10 * rate}ml oliwy (ok ${formatQuantity(2 * rate)} łyżeczki)
      ${formatQuantity(1 * rate)}g drożdży świeżych
      `))(servings / 2),
    preparation: () =>
      textToList(`200ml wody + 1,5 łyżeczki sól + 2 łyżeczki oliwy
      rozetrzeć w wodzie 1g drożdży + wsypać połowę mąki
      dosypać resztę mąki
      uformować kulkę i przykryć na 20 min wilgotną ściereczką (lub zwilżyć ciasto)
      uformować blok i pozostawić szczelnie zamknięte na 1h
      podzielić i uformować na kulki i pozostawić do wyrośnięcia 6-7h (2h pierwszego dnia + 4-5h kolejnego po wyjęciu z lodówki)
      najlepiej włożyć do lodówki na 12h
      `),
    additions: textToList(`mozzarella świeża w kulce
      parmezan
      prosciutto cotto, anchois, oliwki, cebula, kapary, salami, pieczarki
      `),
  },
  {
    name: "Ciasto na Napoletanę - Pierwszy TEST miksera planetarnego MAXIMA",
    video: "https://www.youtube.com/watch?v=WS1XryTDFX0",
    ingredients: () =>
      textToList(`500g mąki W260 - W280
      300g wody
      13g soli
      1g drożdży świeżych
      `),
    preparation: () =>
      textToList(`1 min (woda + drożdże + 1/2 mąki)
      10 min (reszta mąki + sól)
      uformować 5-10 min przerwy
      1 min - wyrabianie
      uformować i odczekać 10-15 min
      12 h w temperaturze otoczenia
      porcjowanie na kulki (4x 200 g)
      pozostawić na 6-7h w temperaturze otoczenia
      wrzucić do lodówki na kolejne 24h
      wyciągnąć na 3-4h przed wypiekiem
      `),
  },
  {
    name: "Puszysty omlet z 2 jaj 👌 pyszne i szybkie śniadanie w 10 minut 👍",
    video: "https://www.youtube.com/watch?v=3HTbEWhpe9k",
    servings: 2,
    ingredients: (servings: number) =>
      ((rate) =>
        textToList(`${formatQuantity(2 * rate)} jajka
      ${formatQuantity((1 / 2) * rate)} szklanki mleka (${125 * rate}ml)
      ${formatQuantity(3 * rate)} łyżki mąki (${50 * rate}g)
      ${formatQuantity(2 * rate)} łyżki oleju (${20 * rate}g)
      ${formatQuantity((1 / 4) * rate)} łyżeczki soli (${formatQuantity(
        1 * rate,
      )}g)
      `))(servings / 2),
  },
  {
    name: "Przepis na najlepsze bułki do burgerów - Brioche. Jak je najlepiej zrobić.",
    video: "https://www.youtube.com/watch?v=PILcY1a5amc",
    ingredients: () =>
      textToList(`60ml mleka
      30ml wody
      20g mąki typ 00
      120ml mleka 35\u00B0
      9g drożdży suchych
      320g mąki
      1 jajko + 1 żółtko
      35g cukru i 7g soli
      40g miękkiego masła
      `),
  },
  {
    name: "NAJLEPSZE BUŁKI NA ŚWIECIE - chrupiące bułki Maryny z mąki orkiszowej w domowej piekarni.",
    video: "https://www.youtube.com/watch?v=U2RXIiCXa-M",
    servings: 9,
    ingredients: (servings: number) =>
      ((rate) =>
        textToList(`${500 * rate}g mąki orkiszowej TYP 630
      ${300 * rate}ml zimnej wody
      ${20 * rate}g oliwy z oliwek lub masła
      ${10 * rate}g soli
      kawałek świeżych drożdży
      `))(servings / 9),
  },
  {
    name: "Bułki z piekarni jak za starych dobrych czasów. Przepis jak zrobić domowe bułeczki. MENU Dorotki",
    video: "https://www.youtube.com/watch?v=_-0aiXG09wc",
    servings: 9,
    ingredients: (servings: number) =>
      ((rate) =>
        textToList(`SKŁADNIKI:
      ${
        500 * rate
      }g mąki pszennej najlepiej typ 550 (można też użyć 450, 650 czy 750)
      ${30 * rate}g świeżych drożdży (ewentualnie ${formatQuantity(
        2 * rate,
      )} opakowania drożdży suszonych po 7g)
      ${formatQuantity(2 * rate)} łyżeczki soli
      ${330 * rate}g wody
      `))(servings / 9),
    preparation: (servings: number) =>
      ((rate) =>
        textToList(`Z powyższych składników biorę:
      ${10 * rate}g drożdży
      ${150 * rate}ml wody
      ${formatQuantity(3 * rate)} łyżki mąki
      i przygotowuję rozczyn 
      
      dodatkowo mąka do podsypania i ewentualnie ${formatQuantity(
        2,
      )} łyżki oleju do posmarowania 
      
      PIECZENIE:
      temperatura piekarnika: 230\u00B0C (górna i dolna grzałka)
      czas pieczenia: około 20 minut
      `))(servings / 9),
  },
  {
    name: "Puszyste, maślane BUŁKI DO BURGERÓW! Nigdy nie jedliście lepszych!",
    video: "https://www.youtube.com/watch?v=Nn3rVOEgC7Y",
    ingredients: () =>
      textToList(`Przestudzony Tangzhong: 200g wody + 40 mąki
      600g mąki pszennej typ 650
      30g świeżych lub 10g suchych drożdży
      40g cukru
      1 jajko
      1 żółtko
      180g ciepłego mleka
      120g masła
      2 łyżeczki soli
  Do posmarowania:
      1 jajko + 2 łyżki mleka,
      odrobina sezamu
  Na wykończenie:
      2 łyżki rozpuszczonego masła do posmarowania.
      `),
  },
  {
    name: "Jak zrobić idealne BUŁKI do HAMBURGERÓW",
    link: "https://policzona-szama.pl/blogs/przepisy/bulka-do-hamburgera-prosta-i-smaczna",
    video: "https://www.youtube.com/watch?v=JL4jyt-LbWI",
    ingredients: () =>
      textToList(`na 4 bułki do burgerów:
      mąka typ 650 – 400 g
      masło – 40 g
      mleka 1,5% (bez laktozy – słodsze w smaku) – 150 ml
      drożdże świeże – 25 g
      sól – 5 g
      cukier brązowy – 10 g
      woda – 100 ml
      do posmarowania: żółtko + mleko, sezam
      `),
  },
  {
    name: "Najlepszy przepis na BUŁKI do BURGERÓW!",
    video: "https://www.youtube.com/watch?v=apmsMiRddtU",
    ingredients: () =>
      textToList(`300g mąki pszennej (w trakcie dodaliśmy jeszcze ok. 50g)
      100 ml wody
      150 ml mleka
      40 g masła
      2 jajka
      5 g drożdży suchych **
      1 łyzka cukru
      pół łyżeczki soli
      sezam/ czarnuszka/ mak
      `),
  },
  {
    name: 'Policzone SAJGONKI. Lepsze niż "U CHIŃCZYKA" ?',
    video: "https://www.youtube.com/watch?v=hszZgtrbYtY",
  },
];
