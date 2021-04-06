const createHeroStore = () => {
  return {
    heroes: [],
    addHero(id) {
      this.heroes.push(id);
    },
    removeHero(id) {
      this.heroes = this.heroes.filter((hero) => hero.id !== id);
    },
  };
};

export default createHeroStore;
