import React from "react";

const Graph = ({ stat, heroes, skill }) => {
  const number = parseInt(stat / heroes);

  return (
    <>
      <li className="z-30 bg-gradient-to-r from-red-400 to-green-400 h-2 relative w-full rounded p-4 my-2">
        <span className="font-semibold absolute z-40 bottom-1">{skill}:</span>
        <span className="absolute right-0 font-semibold z-40 bottom-1 right-3">{number}</span>

        <span className={`leftperc-${number} arrow-up bottom-0 absolute w-1`}>
          &nbsp;
        </span>
      </li>
    </>
  );
};

export default Graph;
