import { useState, useEffect } from "react";

const useHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const url =
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";

  useEffect(() => {
    fetch(url).then(async (response) => {
      if (response.ok) setHeroes(await response.json());
    });
  }, []);

  return heroes;
};

export default useHeroes;
