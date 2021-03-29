import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Router>
      <header className="flex flex-row items-baseline justify-evenly px-60 bg-black border-b p-6 pb-0 md:pb-4 fixed w-full z-10 top-0">
        <div className="flex items-center justify-between mb-4 mx-10">
          <h1 className="leading-none text-2xl text-white">
            <Link
              className="no-underline text-white hover:text-blue-500"
              href="/"
              replace
            >
              home
            </Link>
          </h1>
        </div>
        <div className="flex items-center justify-between mb-4 mx-10">
          <h1 className="leading-none text-2xl text-white">
            <Link
              className="no-underline text-white hover:text-blue-500"
              href="temp"
            >
              favs
            </Link>
          </h1>
        </div>
      </header>
    </Router>
  );
};

export default Navbar;
