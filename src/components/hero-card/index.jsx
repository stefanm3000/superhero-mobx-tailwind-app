import React from "react";
import { Link } from "react-router-dom";

import AddToFavs from "../add-to-favs";

const HeroCard = ({ hero }) => {
  return (
    <Link key={hero.id} to={`/superhero/${hero.id}`}>
      <div className="justify-center heros-center flex flex-col p-4 bg-black shadow-2xl rounded-2xl border-2 border-white-1">
        <img src={hero.images.sm} alt={hero.name} className="rounded" />
        <p className="p-3 text-white">{hero.name}</p>
        <AddToFavs id={hero} />
      </div>
    </Link>
  );
};

export default HeroCard;
