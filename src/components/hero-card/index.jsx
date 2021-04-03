import React from "react";
import { Link } from "react-router-dom";

import useHeroes from "../use-hero";

const HeroCard = () => {
  const heroes = useHeroes();

  return (
    <div className="hero-grid grid grid-cols-1 gap-4 content-center md:grid-cols-3">
      {heroes.map((item) => (
        <Link key={item.id} to={`/superhero/${item.id}`}>
          <div className=" justify-center items-center flex flex-col p-4 bg-black shadow-2xl rounded-2xl border-2 border-white-1">
            <img src={item.images.sm} alt={item.name} className="rounded" />
            <p className="p-3 text-white">{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HeroCard;
