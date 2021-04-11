import React from "react";
import { useObserver } from "mobx-react";

import { useHeroesStore } from "../../mobx/heroes-context/HeroesContext";

import AddToFavs from "../add-to-favs";
import RemoveFromFavs from "../remove-from-favs";

const AddOrRemove = ({ hero }) => {
  const heroesStore = useHeroesStore();
  const heroFind = useObserver(() =>
    heroesStore.heroes.find((i) => i.id === hero.id)
  );

  const button = heroFind ? (
    <RemoveFromFavs key={hero.id} id={hero.id} />
  ) : (
    <AddToFavs key={hero.id} id={hero} />
  );
  return button;
};

export default AddOrRemove;
