import { useState, useEffect } from "react";

const Details = (props) => {
  const [hero, setHero] = useState(null);
  const id = props.match.params.id;
  const url = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`;

  useEffect(() => {
    fetch(url).then(async (response) => {
      if (response.ok) setHero(await response.json());
    });
  }, [url]);

  console.log(hero);

  if (!hero) return null;

  return (
    <div>
      <div className="flex justify-center items-center">
        <img src={hero.images.lg} alt={hero.name} className="rounded "></img>
      </div>
      <br></br>
      <div className="infoContainer flex justify-evenly text-left">
        <div className="biography">
          <div>
            <span className="font-bold">Name</span>: {hero.name}
          </div>
          <div>
            <span className="font-bold">Full name</span>:{" "}
            {hero.biography.fullName}
          </div>
          <div className="appearance">
            <span className="font-bold">Height</span>:{" "}
            {hero.appearance.height[1]}
          </div>
          <div className="appearance">
            <span className="font-bold">Weight</span>:{" "}
            {hero.appearance.weight[1]}
          </div>
          <div className="appearance">
            <span className="font-bold">Race</span>: {hero.appearance.race}
          </div>
        </div>
        <div className="powerstats text-right">
          <span className="font-bold">Powerstats:</span>
          <br></br>
          <div>
            <span className="font-bold">Power</span>: {hero.powerstats.power}
          </div>
          <div>
            <span className="font-bold">Speed</span>: {hero.powerstats.speed}
          </div>
          <div>
            <span className="font-bold">Strength</span>:{" "}
            {hero.powerstats.strength}
          </div>
          <div>
            <span className="font-bold">Intelligence</span>:{" "}
            {hero.powerstats.intelligence}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
