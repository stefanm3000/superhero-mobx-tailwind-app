import { createContext, useContext, useState } from "react";
import createHeroStore from "../hero-store";
import { useLocalObservable } from "mobx-react";


const HeroesContext = createContext();

export const HeroesProvider = ({ children }) => {
  const heroesStore = useLocalObservable(createHeroStore);

  return (
    <HeroesContext.Provider value={heroesStore}>
      {children}
    </HeroesContext.Provider>
  );
};

export const useHeroesStore = () => useContext(HeroesContext);

export default HeroesContext;
