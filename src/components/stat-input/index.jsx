import React from "react";

const StatInput = ({ onChange, stat, value }) => {
  const handleChange = (e) => {
    onChange(stat, parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col border rounded p-3 px-6 my-4 bg-gray-200 relative">
      <label htmlFor={stat} className="font-semibold">
        {stat}
      </label>
      <input
        id={stat}
        name={stat}
        type="range"
        className="cursor-pointer rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128 outline-none"
        min="1"
        max="100"
        step="1"
        onChange={handleChange}
      ></input>
      <div className="absolute right-4 top-1 font-semibold text-xs w-8 h-5 text-center bg-pink-400 rounded-full border text-black">
        {value}
      </div>
    </div>
  );
};

export default StatInput;
