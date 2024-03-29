import { useObserver } from "mobx-react";
import { toJS } from "mobx";

import Graph from "../stats-graph";

const Stats = ({ heroes }) => {
  const observableHeroes = useObserver(() => heroes);
  const heroesJS = toJS(observableHeroes);
  const numOfFavs = observableHeroes.length;

  let powerNum = 0;
  let strengthNum = 0;
  let intelliNum = 0;
  let speedNum = 0;
  let combatNum = 0;

  const powerstat = () =>
    heroesJS.forEach((hero) => {
      powerNum += hero.powerstats.power;
      strengthNum += hero.powerstats.strength;
      intelliNum += hero.powerstats.intelligence;
      speedNum += hero.powerstats.speed;
      combatNum += hero.powerstats.combat;
    });

  powerstat();

  return (
    <div className="flex flex-col mt-6">
      <h1 className="text-3xl my-10">Your favorite heroes' average stats: </h1>
      <ul className="border flex flex-col space-y-4 w-full max-w-l self-center p-3 text-left rounded">
        <Graph stat={powerNum} heroes={numOfFavs} skill="power" />
        <Graph stat={strengthNum} heroes={numOfFavs} skill="strength" />
        <Graph stat={intelliNum} heroes={numOfFavs} skill="intelligence" />
        <Graph stat={speedNum} heroes={numOfFavs} skill="speed" />
        <Graph stat={combatNum} heroes={numOfFavs} skill="combat" />
      </ul>
    </div>
  );
};

export default Stats;
