import React from "react";

import HeroCard from "../hero-card";
import useHeroes from "../use-hero";

const HeroesGrid = (props) => {
  const letter = props.match.params.letter;
  const heroes = useHeroes();

  const filtered = heroes.filter((hero) =>
    hero.name.toLowerCase().startsWith(letter)
  );

  return (
    <div className="hero-grid grid grid-cols-1 gap-4 content-center md:grid-cols-3">
      {filtered.map((item) => (
        <HeroCard key={item.id} hero={item} />
      ))}
    </div>
  );
};

export default HeroesGrid;
