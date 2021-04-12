import { useObserver } from "mobx-react";
import { toJS } from "mobx";

import Graph from "../stats-graph";

const Stats = ({ heroes }) => {
  const observableHeroes = useObserver(() => heroes);
  const heroesJS = toJS(observableHeroes);
  const numOfFavs = observableHeroes.length;

  let powernum = 0;
  let strengthnum = 0;
  let intellinum = 0;
  let speednum = 0;
  let combatnum = 0;

  const powerstat = () =>
    heroesJS.forEach((hero) => {
      powernum = powernum + hero.powerstats.power;
      strengthnum = strengthnum + hero.powerstats.strength;
      intellinum = intellinum + hero.powerstats.intelligence;
      speednum = speednum + hero.powerstats.speed;
      combatnum = combatnum + hero.powerstats.combat;
    });

  powerstat();

  return (
    <div className="flex flex-col mt-6">
      <h1 className="text-3xl p-4">Your favorite heroes' average stats: </h1>
      <ul className="border w-4/5 self-center p-6 text-left rounded">
        <Graph stat={powernum} heroes={numOfFavs} skill="Power" />
        <Graph stat={strengthnum} heroes={numOfFavs} skill="Strength" />
        <Graph stat={intellinum} heroes={numOfFavs} skill="Intelligence" />
        <Graph stat={speednum} heroes={numOfFavs} skill="Speed" />
        <Graph stat={combatnum} heroes={numOfFavs} skill="Combat" />
      </ul>
    </div>
  );
};

export default Stats;
