import { useObserver } from "mobx-react";
import { useHeroesStore } from "../../mobx/heroes-context/HeroesContext";

import HeroCard from "../hero-card";
import Stats from "../stats";

const Favs = (props) => {
  const heroesStore = useHeroesStore();

  const heroes = useObserver(() => heroesStore.heroes);

  const handleRemoveAll = (e) => {
    e.preventDefault();
    heroesStore.removeAll();
  };

  const GoBack = () => {
    return (
      <button
        className="my-10 font-bold text-xl border rounded p-5"
        onClick={() => props.history.goBack()}
      >
        ⟵ go back to last page
      </button>
    );
  };

  return (
    <div>
      <GoBack />
      <div className="grid grid-cols-1 gap-4 content-center md:grid-cols-3">
        {heroes.map((hero) => (
          <div key={hero.id}>
            <HeroCard hero={hero} />
          </div>
        ))}
      </div>
      {heroes.length ? <Stats heroes={heroes} /> : null}

      {heroes.length ? (
        <button
          className="my-10 font-bold text-xl border rounded p-5"
          onClick={handleRemoveAll}
        >
          Clear favorites
        </button>
      ) : (
        <h1 className="text-xl font-bold">Please select favorites :)</h1>
      )}
    </div>
  );
};

export default Favs;
