// NavigationBar.js
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaUser } from "react-icons/fa";

function NavigationBar({ toggleMenu }) {
  return (
    <div className="w-full h-16 flex items-center justify-between p-4 bg-transparent text-white">
     
      <div className="hidden lg:flex gap-12 p-4 ml-auto text-xl font-medium">
        <Link
          className="hover:bg-LightBackground hover:text-DarkBackground rounded-md p-2"
          to="/"
        >
          <span className="flex items-center gap-2">
            <FaHome className="text-2xl" />
            <span className="sr-only">Home</span>
          </span>
        </Link>
        <Link
          className="hover:bg-LightBackground hover:text-DarkBackground rounded-md p-2"
          to="/Portfolio"
        >
          <span className="flex items-center gap-2">
            <FaBriefcase className="text-2xl" />
            <span className="sr-only">Portfolio</span>
          </span>
        </Link>
        <Link
          className="hover:bg-LightBackground hover:text-DarkBackground rounded-md p-2"
          to="/About"
        >
          <span className="flex items-center gap-2">
            <FaUser className="text-2xl" />
            <span className="sr-only">About</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
