import React from "react";

const Graph = ({ stat, heroes, skill }) => {
  return (
    <li className="relative p-1">
      <span className="flex-start">{skill}: </span>
      <span className="absolute right-2 font-semibold">
        {(stat / heroes).toFixed(2)}
      </span>
      <span className="bg-gradient-to-r from-red-400 to-green-400 h-100 w-4/5 left-28 absolute">
        &nbsp;
        <span
          className={`${skill} h-6 rounded left-30% absolute border w-1 bg-white`}
          style={{ left: `${stat / heroes}%` }}
        >
          &nbsp;
        </span>
      </span>
    </li>
  );
};

export default Graph;