import { useState, useEffect } from "react";
import { useObserver } from "mobx-react";

import Graph from "../stats-graph";

const Stats = ({ heroes }) => {
  const observableHeroes = useObserver(() => heroes);
  const numOfFavs = observableHeroes.length;

  const [power, setPower] = useState(0);
  const [strength, setStrength] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [combat, setCombat] = useState(0);

  const setStats = () => {
    observableHeroes.forEach((hero) => {
      setPower(() => power + parseInt(hero.powerstats.power));
      setStrength(() => strength + parseInt(hero.powerstats.strength));
      setIntelligence(
        () => intelligence + parseInt(hero.powerstats.intelligence)
      );
      setSpeed(() => speed + parseInt(hero.powerstats.speed));
      setCombat(() => combat + parseInt(hero.powerstats.combat));
    });
  };

  useEffect(() => {
    setStats();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col mt-6">
      <h1 className="text-3xl p-4">Your favorite heroes' average stats: </h1>
      <ul className="border w-4/5 self-center p-6 text-left rounded">
        <Graph stat={power} heroes={numOfFavs} skill="Power" />
        <Graph stat={strength} heroes={numOfFavs} skill="Strength" />
        <Graph stat={intelligence} heroes={numOfFavs} skill="Intelligence" />
        <Graph stat={speed} heroes={numOfFavs} skill="Speed" />
        <Graph stat={combat} heroes={numOfFavs} skill="Combat" />
      </ul>
    </div>
  );
};

export default Stats;
