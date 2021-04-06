import HeroCard from "../hero-card";

import { useObserver } from "mobx-react";
import { toJS } from "mobx";

import { useHeroesStore } from "../../mobx/heroes-context/HeroesContext";

const Favs = () => {
  const heroesStore = useHeroesStore();
  const proksi = toJS(heroesStore.heroes);

  console.log(proksi);

  return useObserver(() => (
    <div className="grid grid-cols-1 gap-4 content-center md:grid-cols-3">
      {heroesStore.heroes.map((hero) => (
        <div key={hero}>
          <HeroCard hero={hero} />
        </div>
      ))}
    </div>
  ));
};

export default Favs;
