import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AddOrRemove from "../add-or-remove";

const Details = (props) => {
  const [open, setIsOpen] = useState(false);
  const [hero, setHero] = useState(null);
  const id = props.match.params.id;
  const url = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`;

  useEffect(() => {
    fetch(url).then(async (response) => {
      if (response.ok) setHero(await response.json());
    });
  }, [url]);

  const GoBack = () => {
    return (
      <button
        className="my-10 mt-0 font-bold text-xl border rounded p-5 break-words	"
        onClick={() => props.history.goBack()}
      >
        ⟵ back
      </button>
    );
  };

  const CheckNext = ({ currentId }) => {
    return (
      <Link
        className=" my-10 mt-0 font-bold text-xl border rounded break-normal p-5 break-words	"
        to={`/superhero/${parseInt(currentId) + 1}`}
      >
        next ⟶
      </Link>
    );
  };

  const More = () => {
    return (
      <div className="my-4">
        <div className="my-4">
          <span className="font-bold">Place of Birth</span>:{" "}
          <p>{hero.biography.placeOfBirth}</p>
        </div>
        <div className="my-4">
          <span className="font-bold">Aliases</span>:{" "}
          <ul>
            {hero.biography.aliases.map((alias) => (
              <li key={alias}>{alias}</li>
            ))}
          </ul>
        </div>
        <div className="my-4">
          <span className="font-bold">Connections</span>:{" "}
          <p>
            {hero.connections.groupAffiliations
              ? hero.connections.groupAffiliations
              : "None"}
          </p>
        </div>
        <div className="my-4">
          <span className="font-bold">Relatives</span>:{" "}
          <p>{hero.connections.relatives}</p>
        </div>
        <div className="my-4">
          <span className="font-bold">Occupation</span>:{" "}
          <p>{hero.work.occupation}</p>
        </div>
        <div className="my-4">
          <span className="font-bold">First Appearance</span>:{" "}
          <p>{hero.biography.firstAppearance}</p>
        </div>
      </div>
    );
  };

  if (!hero) return null;

  return (
    <div>
      <div className="flex justify-evenly items-center  ">
        <GoBack />
        <CheckNext currentId={id} />
      </div>

      <div className="flex justify-center items-center">
        <div className="relative">
          <img
            src={hero.images.lg}
            alt={hero.name}
            className={`rounded border-2  ${
              hero.biography.alignment === "good"
                ? "border-green-400"
                : "border-red-400"
            }`}
          ></img>
          <AddOrRemove hero={hero} />
        </div>
      </div>
      <br></br>

      <br></br>
      <div className="infoContainer flex justify-evenly text-left">
        <div className="biography">
          <div>
            <span className="font-bold">Name</span>: {hero.name}
          </div>
          <div>
            <span className="font-bold">Full name</span>:{" "}
            {hero.biography.fullName}
          </div>
          <div>
            <span className="font-bold">Alignment</span>:{" "}
            <span
              className={
                hero.biography.alignment === "good"
                  ? "text-green-600"
                  : "text-red-800"
              }
            >
              {hero.biography.alignment}
            </span>
          </div>
          <div className="appearance">
            <span className="font-bold">Height</span>:{" "}
            {hero.appearance.height[1]}
          </div>
          <div className="appearance">
            <span className="font-bold">Weight</span>:{" "}
            {hero.appearance.weight[1]}
          </div>
          <div className="appearance">
            <span className="font-bold">Race</span>: {hero.appearance.race}
          </div>
        </div>
        <div className="powerstats text-right">
          <span className="font-bold">Powerstats:</span>
          <br></br>
          <div>
            <span className="font-bold">Power</span>: {hero.powerstats.power}
          </div>
          <div>
            <span className="font-bold">Speed</span>: {hero.powerstats.speed}
          </div>
          <div>
            <span className="font-bold">Strength</span>:{" "}
            {hero.powerstats.strength}
          </div>
          <div>
            <span className="font-bold">Intelligence</span>:{" "}
            {hero.powerstats.intelligence}
          </div>
          <div>
            <span className="font-bold">Combat</span>: {hero.powerstats.combat}
          </div>
        </div>
      </div>
      {open ? null : (
        <button
          className="my-10 font-bold text-xl border rounded p-5"
          onClick={() => setIsOpen(true)}
        >
          Read more
        </button>
      )}

      <div className="readMoreContainer">
        {open ? (
          <div>
            <More />
          </div>
        ) : null}
      </div>
      {open ? (
        <button
          className="my-10 font-bold text-xl border rounded p-5"
          onClick={() => setIsOpen(false)}
        >
          Read less
        </button>
      ) : null}
    </div>
  );
};

export default Details;
