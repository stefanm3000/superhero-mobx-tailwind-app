import React from "react";

const Navbar = () => {
  return (
    <header className=" px-40 bg-black border-b md:flex md:items-center md:justify-between p-4 pb-0 md:pb-4  fixed w-full z-10 top-0">
      <div className="flex items-center justify-between mb-4">
        <h1 className="leading-none text-2xl text-white">
          <a className="no-underline text-white hover:text-white" href="temp">
            home
          </a>
        </h1>

        <a className="text-white hover:text-orange md:hidden" href="temp">
          <i className="fa fa-2x fa-bars"></i>
        </a>
      </div>
      <nav>
        <h1 className="leading-none text-2xl text-white">
          <a className="no-underline text-white hover:text-white" href="temp">
            favs
          </a>
        </h1>
      </nav>
    </header>
  );
};

export default Navbar;
