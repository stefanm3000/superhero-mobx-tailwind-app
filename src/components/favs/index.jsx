import { useObserver } from "mobx-react";

import HeroCard from "../hero-card";
import { useHeroesStore } from "../../mobx/heroes-context/HeroesContext";

const Favs = (props) => {
  const heroesStore = useHeroesStore();

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

  return useObserver(() => (
    <div>
      <GoBack />
      <div className="grid grid-cols-1 gap-4 content-center md:grid-cols-3">
        {heroesStore.heroes.map((hero) => (
          <div key={hero.id}>
            <HeroCard hero={hero} />
          </div>
        ))}
      </div>
      {heroesStore.heroes.length ? (
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
  ));
};

export default Favs;
