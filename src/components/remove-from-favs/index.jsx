import React from "react";
import { useHeroesStore } from "../../mobx/heroes-context/HeroesContext";

const RemoveFromFavs = ({ id }) => {
  const heroesStore = useHeroesStore();

  const handleRemoveHero = (e) => {
    e.preventDefault();
    heroesStore.removeHero(id);
  };

  return (
    <div>
      <button
        className="text-white z-100 p-2 border rounded"
        onClick={handleRemoveHero}
      >
        Remove from favorites
      </button>
    </div>
  );
};

export default RemoveFromFavs;
