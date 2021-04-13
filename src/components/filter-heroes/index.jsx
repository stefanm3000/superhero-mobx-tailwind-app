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

  const onChange = (stat, value) => {
    setHeroStats({
      ...heroStats,
      [stat]: value,
    });
  };

  return (
    <div>
      <div className="flex m-auto flex-col border rounded p-4 transparent ">
        <StatInput
          key="power"
          onChange={onChange}
          stat="power"
          value={heroStats.power}
        />
        <StatInput
          key="strength"
          onChange={onChange}
          stat="strength"
          value={heroStats.strength}
        />
        <StatInput
          key="speed"
          onChange={onChange}
          stat="speed"
          value={heroStats.speed}
        />
        <StatInput
          key="intelligence"
          onChange={onChange}
          stat="intelligence"
          value={heroStats.intelligence}
        />
        <StatInput
          key="combat"
          onChange={onChange}
          stat="combat"
          value={heroStats.combat}
        />
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

const StatInput = ({ onChange, stat, value }) => {
  const handleChange = () => {
    onChange(stat, value);
  };

  console.log(stat, value);

  return (
    <div className="flex flex-col border rounded p-3 px-6 my-4 bg-gray-200 relative">
      <label htmlFor={stat} className="font-semibold">
        {stat}
      </label>
      <input
        id={stat}
        name={stat}
        type="range"
        className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128 outline-none"
        min="1"
        max="100"
        step="1"
        onChange={handleChange}
      ></input>
      <div className="absolute right-4 top-1 font-semibold text-xs w-8 h-5 text-center bg-pink-400 rounded-full border text-black">
        {value}
      </div>
    </div>
  );
};

export default FilterHeroes;
