import { Link } from "react-router-dom";
import { useHeroesStore } from "../../mobx/heroes-context/HeroesContext";

import { useObserver } from "mobx-react";
import AddToFavs from "../add-to-favs";
import RemoveFromFavs from "../remove-from-favs";

const HeroCard = ({ hero }) => {
  const heroesStore = useHeroesStore();

  const heroFind = heroesStore.heroes.find((i) => i.id === hero.id);

  return useObserver(() => (
    <div>
      <Link key={hero.id} to={`/superhero/${hero.id}`}>
        <div className="justify-center heros-center flex flex-col p-4 bg-black shadow-2xl rounded-2xl border-2 border-white-1">
          <img src={hero.images.sm} alt={hero.name} className="rounded" />
          <p className="p-3 text-white">{hero.name}</p>
          {heroFind ? <RemoveFromFavs id={hero.id} /> : <AddToFavs id={hero} />}
        </div>
      </Link>
    </div>
  ));
};

export default HeroCard;
