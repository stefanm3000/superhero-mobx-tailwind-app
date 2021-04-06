const createHeroStore = () => {
  return {
    heroes: [],
    addHero(id) {
      this.heroes.push(id);
    },
    removeHero(id) {
      this.heroes = this.heroes.filter((hero) => hero.id !== id);
    },
    removeAll() {
      this.heroes = [];
    },
  };
};

export default createHeroStore;
