import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaUser } from "react-icons/fa";

const SharedNavLinks = ({ className, onClick }) => {
  return (
    <div className={`flex gap-10 items-center ${className}`}>
      <Link
        className="hover:bg-LightBackground hover:text-DarkBackground hover:scale-125 rounded-md p-2"
        to="/"
        onClick={onClick}
      >
        <span className="flex items-center gap-2">
          <FaHome className="text-3xl" />
        </span>
      </Link>
      <Link
        className="hover:bg-LightBackground hover:text-DarkBackground hover:scale-125 rounded-md p-2"
        to="/Portfolio"
        onClick={onClick}
      >
        <span className="flex items-center gap-2">
          <FaBriefcase className="text-3xl" />
        </span>
      </Link>
      <Link
        className="hover:bg-LightBackground hover:text-DarkBackground hover:scale-125 rounded-md p-2"
        to="/About"
        onClick={onClick}
      >
        <span className="flex items-center gap-2">
          <FaUser className="text-3xl" />
        </span>
      </Link>
    </div>
  );
};

export default SharedNavLinks;
