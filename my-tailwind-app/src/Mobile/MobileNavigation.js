import React from "react";
import { Link } from "react-router-dom";

const MobileHome = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      {isMenuOpen && (
        <div className="lg:hidden bg-background text-white flex flex-col gap-2 items-end p-4 space-y-2 font-semibold">
          <Link
            className="hover:bg-white hover:text-background p-4 rounded w-1/3 text-right"
            to = "/"
          >
            Home
          </Link>
          <Link
            className="hover:bg-white hover:text-background p-4 rounded w-1/3 text-right"
            to = "/Porfolio"
          >
            Porfolio
          </Link>
          <Link
            className="hover:bg-white hover:text-background p-4 rounded w-1/3 text-right"
            to = "/About"
          >
            About
          </Link>
        </div>
      )}
    </>
  );
};

export default MobileHome;
