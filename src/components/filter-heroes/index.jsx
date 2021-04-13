import { useState } from "react";
import { Link } from "react-router-dom";

const FilterHeroes = () => {
  const [heroStats, setHeroStats] = useState({
    power: 50,
    strength: 50,
    speed: 50,
    intelligence: 50,
    combat: 50,
  });

  console.log("heroStats", heroStats);

  const StatInput = ({ powerstat }) => {
    const [num, setNum] = useState(50);
    const handleChange = (e) => {
      setHeroStats((prevState) => ({
        ...prevState,
        [e.target.name]: parseInt(e.target.value),
      }));
      setNum(parseInt(e.target.value));
    };

    return (
      <div className="flex flex-col border rounded p-3 px-6 my-4 bg-gray-200 relative">
        <label htmlFor={`${powerstat}`} className="font-semibold">
          {powerstat}
        </label>
        <input
          id={powerstat}
          name={powerstat}
          type="range"
          className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128 outline-none"
          min="1"
          max="100"
          step="1"
          value={num}
          onChange={handleChange}
        ></input>
        <div className="absolute right-4 top-1 font-semibold text-xs w-8 h-5 text-center bg-pink-400 rounded-full border text-black">
          {num}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex m-auto flex-col border rounded p-4 transparent ">
        <StatInput powerstat="power" />
        <StatInput powerstat="strength" />
        <StatInput powerstat="speed" />
        <StatInput powerstat="intelligence" />
        <StatInput powerstat="combat" />
        <Link
          to="/filtered"
          className="m-auto font-bold text-xl border rounded p-6 w-40 bg-white text-blue-600"
        >
          filter
        </Link>
      </div>
    </div>
  );
};

export default FilterHeroes;
