import React from "react";
import { Link } from "react-router-dom";

const Alphabet = () => {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div>
      <h1 className="font-bold text-xl">
        Pick your superhero's starting letter
      </h1>
      <br></br>
      <br></br>

      <div className="grid grid-cols-3 gap-4 flex justify-center ">
        {letters.map((letter) => (
          <Link
            key={letter}
            to={`/starts-with/${letter.toLowerCase()}`}
            className="text-4xl"
          >
            {letter}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Alphabet;
