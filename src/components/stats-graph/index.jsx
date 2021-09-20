import React from "react";

const Graph = ({ stat, heroes, skill }) => {
  const number = parseInt(stat / heroes);

  return (
    <div className="flex flex-col border p-2 rounded">
      <label htmlFor={skill}>
        <div className="flex justify-between">
          <span>{skill}</span>
          <span>{number}</span>
        </div>
        <meter
          id={skill}
          className="w-full h-6"
          value={number}
          min="0"
          low="20"
          optimum="50"
          high="80"
          max="100"
        />
      </label>
    </div>
  );
};

export default Graph;
