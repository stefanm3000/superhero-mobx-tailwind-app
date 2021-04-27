import { Link } from "react-router-dom";

import AddOrRemove from "../add-or-remove";

const HeroCard = ({ hero }) => {
  return (
    <div className="relative">
      <Link key={hero.id} to={`/superhero/${hero.id}`}>
        <div className="justify-center heros-center flex flex-col p-4 bg-black shadow-2xl rounded-2xl border-2 border-white-1">
          <img src={hero.images.sm} alt={hero.name} className="rounded" />
          <p className="p-3 text-white">{hero.name}</p>
          <AddOrRemove hero={hero} />
        </div>
      </Link>
    </div>
  );
};

export default HeroCard;
