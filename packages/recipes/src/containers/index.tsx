import { Spinner } from "@dev/video/components";
import {
  BasicInfoSchema as InfoSchema,
  type BasicInfoType as InfoType,
} from "@dev/video/schema";
import React, {
  useCallback,
  useEffect,
  useState,
  type MouseEventHandler,
} from "react";
import ReactPlayer from "react-player/youtube";
import data from "../recipes";

interface RecipeType {
  name: string;
  link?: string;
  video?: string;
  servings?: number;
  ingredients?: (servings?: number) => string[];
  instructions?: (servings?: number) => string[];
  directions?: (servings?: number) => string[];
  preparation?: (servings?: number) => string[];
  additions?: string[];
}

function Checklist({ list }: { list: string[] }) {
  const [checked, setChecked] = useState<number[]>([]);

  return (
    <ol>
      {list.map((item, index) => (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              checked={checked.includes(index)}
              onChange={({ target }) =>
                setChecked((checked) =>
                  target.checked
                    ? checked.concat(index)
                    : checked.filter((i) => i !== index),
                )
              }
            />
            <span>{item}</span>
          </label>
        </li>
      ))}
    </ol>
  );
}

function Recipe({
  recipe,
  setVideoId,
}: {
  recipe: RecipeType;
  setVideoId: (video: string) => void;
}) {
  const [info, setInfo] = useState<InfoType | null>(null);
  const [servings, setServings] = useState<RecipeType["servings"]>(
    recipe.servings,
  );

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
        {recipe.servings && (
          <div>
            <label>
              <select
                value={servings}
                onChange={({ target }) => setServings(Number(target.value))}
              >
                {[1, 2, 3, 4, 5, 6, 9, 12].map((servings) => (
                  <option key={servings} value={servings}>
                    {servings}
                  </option>
                ))}
              </select>
              <span>servings</span>
            </label>
          </div>
        )}
        {recipe.ingredients && (
          <div>
            <h4>ingredients</h4>
            <Checklist list={recipe.ingredients(servings)} />
          </div>
        )}
        {recipe.preparation && (
          <div>
            <h4>preparation</h4>
            <Checklist list={recipe.preparation(servings)} />
          </div>
        )}
        {recipe.additions && (
          <div>
            <h4>additions</h4>
            <Checklist list={recipe.additions} />
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
  const [recipes] = useState<RecipeType[]>(() => data);

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
