import React from "react";

import HeroCard from "../hero-card";
import useHeroes from "../use-hero";

const Filtered = ({ power, strength, intelligence, speed, combat }) => {
  const heroes = useHeroes();

  const filtered = heroes.filter(
    (hero) =>
      hero.powerstats.power >= power &&
      hero.powerstats.strength >= strength &&
      hero.powerstats.intelligence >= intelligence &&
      hero.powerstats.speed >= speed &&
      hero.powerstats.combat >= combat
  );

  return (
    <div className="hero-grid grid grid-cols-1 gap-4 content-center md:grid-cols-3 mt-20">
      {filtered.map((item) => (
        <HeroCard key={item.id} hero={item} />
      ))}
    </div>
  );
};

export default Filtered;
