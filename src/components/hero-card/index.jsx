import React from "react";
import useHeroes from "../use-hero";
import { BrowserRouter as Router, Link } from "react-router-dom";

const HeroCard = () => {
  const heroes = useHeroes();

  return (
    <div className="hero-grid grid grid-cols-1 gap-4 content-center md:grid-cols-3">
      {heroes.map((item) => (
        <Router>
          <Link to={`/${item.name.replace(/\s+/g, "").toLowerCase()}`}>
            <div
              key={item.id}
              className=" justify-center items-center flex flex-col p-4 bg-black shadow-2xl rounded-2xl border-2 border-white-1"
            >
              <img src={item.images.sm} alt={item.name} className="rounded" />
              <p className="p-3">{item.name}</p>
            </div>
          </Link>
        </Router>
      ))}
    </div>
  );
};

export default HeroCard;
