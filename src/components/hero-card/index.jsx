import React from "react";
import useHeroes from "../use-hero";

const HeroCard = () => {
  const heroes = useHeroes();

  return (
    <div className="hero-grid grid grid-cols-1 gap-4 content-center md:grid-cols-3">
      {heroes.map((item) => (
        <div
          key={item.id}
          className=" justify-center items-center flex flex-col p-4 bg-opacity-5 bg-gray-200 rounded-2xl border-2 border-white-1"
        >
          <img src={item.images.sm} alt={item.name} className="rounded" />
          <p className="p-3">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroCard;