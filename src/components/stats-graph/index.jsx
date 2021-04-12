import React from "react";

const Graph = ({ stat, heroes, skill }) => {
  const number = parseInt(stat / heroes);

  return (
    <>
      <li className="relative p-1">
        <span className="flex-start font-semibold">{skill}: </span>
        <span className="absolute right-2 font-semibold">{number}</span>
        <span className="bg-gradient-to-r from-red-400 to-green-400 h-100 w-4/5 left-28 rounded absolute">
          &nbsp;
          <span className={`leftperc-${number} arrow-up bottom-0 absolute w-1`}>
            &nbsp;
          </span>
        </span>
      </li>
    </>
  );
};

export default Graph;
