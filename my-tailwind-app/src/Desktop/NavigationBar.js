import React from "react";
import SharedNavLinks from "./SharedNav";

function NavigationBar({ toggleMenu }) {
  return (
    <div className="w-full h-16 flex items-center justify-between p-4 bg-transparent text-white">
      <button
        className="lg:hidden text-2xl"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        ☰
      </button>
      <div className="hidden lg:flex ml-auto">
        <SharedNavLinks />
      </div>
    </div>
  );
}

export default NavigationBar;
