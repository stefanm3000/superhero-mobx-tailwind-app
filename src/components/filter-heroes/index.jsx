import { useState } from "react";

import StatInput from "../stat-input/";
import Filtered from "../filtered-page";

const FilterHeroes = () => {
  const [open, setOpen] = useState(false);
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
    console.log(heroStats);
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
        <button
          onClick={() => setOpen(true)}
          className="m-auto font-bold text-xl border rounded p-6 w-40 bg-white text-blue-600"
        >
          filter
        </button>
      </div>
      {open ? (
        <Filtered
          power={heroStats.power}
          strength={heroStats.strength}
          speed={heroStats.speed}
          intelligence={heroStats.intelligence}
          combat={heroStats.combat}
        />
      ) : null}
    </div>
  );
};

export default FilterHeroes;
