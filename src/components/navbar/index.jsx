import React from "react";
import { Link } from "react-router-dom";

import { useObserver } from "mobx-react";
import { useHeroesStore } from "../../mobx/heroes-context/HeroesContext";

const Navbar = () => {
  const heroesStore = useHeroesStore();
  const favsNumber = useObserver(() => heroesStore.heroes.length);

  return (
    <header className="flex flex-row items-baseline justify-evenly bg-black border-b p-6 pb-0 md:pb-4 fixed w-full z-10 top-0">
      <div className="flex items-center justify-between mb-4 ">
        <h1 className="leading-none text-2xl text-white">
          <Link className="no-underline text-white hover:text-blue-500" to="/">
            home
          </Link>
        </h1>
      </div>
      <div className="flex items-center justify-between mb-4 ">
        <h1 className="leading-none text-2xl text-white">
          <Link
            className="no-underline text-white hover:text-blue-500 flex"
            to="/favs"
          >
            favs{"  "}
            <div className="relative bg-white">
              <span
                className="font-semibold text-xs w-4 absolute top-0 left-1 text-center bg-white rounded-full text-black
            "
              >
                {favsNumber}
              </span>
            </div>
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Navbar;
