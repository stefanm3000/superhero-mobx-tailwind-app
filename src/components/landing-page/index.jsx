import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex m-auto flex-col w-60">
      <Link
        to="/alphabet"
        className="my-10 font-bold text-xl border rounded p-5 w-60 h-40 flex justify-center items-center"
      >
        browse heroes by starting letter
      </Link>
      <Link
        to="/filter"
        className="my-10 font-bold text-xl border rounded p-5 w-60 h-40 flex justify-center items-center"
      >
        filter heroes by powerstats
      </Link>
    </div>
  );
};

export default Landing;
