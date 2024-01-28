import React, { useState } from "react";

interface RecipeType {
  name: string;
}

function Recipe({ recipe }: { recipe: RecipeType }) {
  return (
    <div>
      <h3>{recipe.name}</h3>
    </div>
  );
}

export default function Section() {
  const [recipes] = useState<RecipeType[]>(() => [
    {
      name: "Domowa PIZZA lepsza niż z pizzerii - przepis na najlepsze ciasto na pizzę 🍕",
      link: "https://www.youtube.com/watch?v=fvm7uz4IUZ0",
    },
    {
      name: "Ciasto na Napoletanę - Pierwszy TEST miksera planetarnego MAXIMA",
      link: "https://www.youtube.com/watch?v=WS1XryTDFX0",
    },
    {
      name: "Puszysty omlet z 2 jaj 👌 pyszne i szybkie śniadanie w 10 minut 👍",
      link: "https://www.youtube.com/watch?v=3HTbEWhpe9k",
    },
    {
      name: "Przepis na najlepsze bułki do burgerów - Brioche. Jak je najlepiej zrobić.",
      link: "https://www.youtube.com/watch?v=PILcY1a5amc",
    },
    {
      name: "Puszyste, maślane BUŁKI DO BURGERÓW! Nigdy nie jedliście lepszych!",
      link: "https://www.youtube.com/watch?v=Nn3rVOEgC7Y",
    },
    {
      name: "Jak zrobić idealne BUŁKI do HAMBURGERÓW",
      link: "https://www.youtube.com/watch?v=JL4jyt-LbWI",
      // link: 'https://policzona-szama.pl/blogs/przepisy/bulka-do-hamburgera-prosta-i-smaczna',
    },
    {
      name: 'Policzone SAJGONKI. Lepsze niż "U CHIŃCZYKA" ?',
      link: "https://www.youtube.com/watch?v=hszZgtrbYtY",
    },
  ]);

  return (
    <section>
      <h2>Recipes</h2>
      {recipes.map((recipe, key) => (
        <Recipe key={key} recipe={recipe} />
      ))}
    </section>
  );
}
