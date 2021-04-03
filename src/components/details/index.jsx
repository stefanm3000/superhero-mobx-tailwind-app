import { useState, useEffect } from "react";

const Details = (props) => {
  const [hero, setHero] = useState([]);
  const id = props.match.params.id;
  const url = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`;

  useEffect(() => {
    fetch(url).then(async (response) => {
      if (response.ok) setHero(await response.json());
    });
  }, []);

  console.log(hero);
  return (
    <div>
      <div>Name: {hero.name}</div>
      <br></br>
      <div>Power: {hero.powerstats.power}</div>
      <div>Intelligence: {hero.powerstats.intelligence}</div>
      <div>Speed: {hero.powerstats.soeed}</div>
      <div>Durability: {hero.powerstats.durability}</div>
      <div>Strength: {hero.powerstats.strength}</div>
      <div>Combat: {hero.powerstats.combat}</div>
    </div>
  );
};

export default Details;
