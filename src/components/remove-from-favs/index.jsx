import React from "react";

import { useHeroesStore } from "../../mobx/heroes-context/HeroesContext";

const RemoveFromFavs = ({ id }) => {
  const heroesStore = useHeroesStore();

  const handleRemoveHero = (e) => {
    e.preventDefault();
    heroesStore.removeHero(id);
  };

  return (
    <div className="absolute absolute top-1.5 right-3">
      <button
        className="h-24 w-24 text-white z-100 p-2 outline-none opacity-70"
        onClick={handleRemoveHero}
      >
        <svg
          className="fill-current text-red-600 stroke-current"
          viewBox="0 0 24 24"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>
    </div>
  );
};

export default RemoveFromFavs;
