import { useState, useEffect } from "react";

const Details = (props) => {
  const [hero, setHero] = useState([]);
  const id = props.match.params.id;
  const url = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`;

  useEffect(() => {
    fetch(url).then(async (response) => {
      if (response.ok) setHero(await response.json());
    });
  }, [url]);

  console.log(hero);
  return (
    <div>
      <div>Name: {hero.name}</div>
    </div>
  );
};

export default Details;
