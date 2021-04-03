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
      <div>Name: {hero.name}</div>
      <div>Power: {hero.powerstats.power}</div>
      
    </div>
  );
};

export default Details;
