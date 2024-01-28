import React, {
  type MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import ReactPlayer from "react-player/youtube";
import { Spinner } from "@dev/video/components";
import {
  type BasicInfoType as InfoType,
  BasicInfoSchema as InfoSchema,
} from "@dev/video/schema";

interface RecipeType {
  name: string;
  link?: string;
  video?: string;
  ingredients?: string[];
  preparation?: string[];
  additions?: string[];
}

function Recipe({
  recipe,
  setVideoId,
}: {
  recipe: RecipeType;
  setVideoId: (video: string) => void;
}) {
  const [info, setInfo] = useState<InfoType | null>(null);

  useEffect(() => {
    fetch(`video/info?videoId=${recipe.video}`)
      .then((res) => res.json())
      .then((info) => InfoSchema.parseAsync(info))
      .then(setInfo);
  }, []);

  const handleClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => (e.preventDefault(), setVideoId(recipe.video)),
    [],
  );

  return (
    <details>
      <summary>
        <h3 style={{ display: "inline" }}>{recipe.name}</h3>
      </summary>
      <section style={{ padding: "1em" }}>
        {info ? (
          <div>
            {info.videoDetails.thumbnails
              .slice(0, 1)
              .map(({ url, width, height }, key) => (
                <div key={key}>
                  <a href={recipe.video} onClick={handleClick}>
                    <img
                      src={url}
                      width={width}
                      height={height}
                      referrerPolicy="no-referrer"
                    />
                  </a>
                  <div>
                    <strong>{info.videoDetails.title}</strong>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <Spinner />
        )}
        {recipe.ingredients && (
          <div>
            <h4>ingredients</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        )}
        {recipe.preparation && (
          <div>
            <h4>preparation</h4>
            <ul>
              {recipe.preparation.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        )}
        {recipe.additions && (
          <div>
            <h4>additions</h4>
            <ul>
              {recipe.additions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        )}
        {recipe.link && (
          <div>
            <a
              href={recipe.link}
              rel="noopener noreferrer"
              target="_blank"
              onClick={(e) => e.preventDefault()}
            >
              {recipe.link.split("//")[1]}
            </a>
          </div>
        )}
      </section>
    </details>
  );
}

const textToList = (text: string) =>
  text
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

export default function Section() {
  const [videoId, setVideoId] = useState("");
  const [recipes] = useState<RecipeType[]>(() => [
    {
      name: "Domowa PIZZA lepsza niż z pizzerii - przepis na najlepsze ciasto na pizzę 🍕",
      video: "https://www.youtube.com/watch?v=fvm7uz4IUZ0",
      ingredients: textToList(`350g mąki 00 (W250-280)
      200-210ml zimnej wody
      10g soli (ok 1,5 łyżeczki)
      10ml oliwy (ok 2 łyżeczki)
      1g drożdży świeżych
      `),
      preparation: textToList(`200ml wody + 1,5 łyżeczki sól + 2 łyżeczki oliwy
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
      ingredients: textToList(`500g mąki W260 - W280
      300g wody
      13g soli
      1g drożdży świeżych
      `),
      preparation: textToList(`1 min (woda + drożdże + 1/2 mąki)
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
      ingredients: textToList(`2 jajka
      1/2 szklanki mleka (125ml)
      3 łyżki mąki (50g)
      2 łyżki oleju (20g)
      1/4 łyżeczki soli (1g)
      `),
    },
    {
      name: "Przepis na najlepsze bułki do burgerów - Brioche. Jak je najlepiej zrobić.",
      video: "https://www.youtube.com/watch?v=PILcY1a5amc",
      ingredients: textToList(`60ml mleka
      30ml wody
      20g mąki typ 00
      120ml mleka 35st
      9g drożdży suchych
      320g mąki
      1 jajko + 1 żółtko
      35g cukru i 7g soli
      40g miękkiego masła
      `),
    },
    {
      name: "Puszyste, maślane BUŁKI DO BURGERÓW! Nigdy nie jedliście lepszych!",
      video: "https://www.youtube.com/watch?v=Nn3rVOEgC7Y",
      ingredients: textToList(`Przestudzony Tangzhong: 200g wody + 40 mąki
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
      ingredients: textToList(`na 4 bułki do burgerów:
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
      ingredients:
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
  ]);

  return (
    <section>
      <h2>Recipes</h2>
      <div style={{ padding: "0 1em 1em" }}>
        {recipes.map((recipe, key) => (
          <Recipe key={key} recipe={recipe} setVideoId={setVideoId} />
        ))}
      </div>
      {videoId && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            border: "2px solid black",
            background: "lightgray",
          }}
        >
          <ReactPlayer
            url={videoId}
            width={320}
            height={180}
            controls
            light
            loop
            pip
            playing
          />
        </div>
      )}
    </section>
  );
}
