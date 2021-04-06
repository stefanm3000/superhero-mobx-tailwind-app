import { useHeroesStore } from "../../mobx/heroes-context/HeroesContext";

const AddToFavs = ({ id }) => {
  const heroesStore = useHeroesStore();

  const handleClick = (e) => {
    e.preventDefault();
    heroesStore.addHero(id);
  };

  return (
    <div className="">
      <button
        className="text-white z-100 p-2 border rounded"
        onClick={handleClick}
      >
        Add to favorites
      </button>
    </div>
  );
};

export default AddToFavs;
