import "../App.css";
import React, { useState } from "react";
import MobileMenu from "../Mobile/MobileHome.js"; // Import the MobileMenu component
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function DesktopAbout() {
  // State to track menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const name = "Partz";

  return (
    <div className="w-full h-screen flex flex-col bg-background text-white font-sans p-2">
      <title>About</title>

      {/* Navigation bar */}
      <div className="w-full h-16 flex items-center p-4 bg-background text-white">
        <span className="text-xl font-bold">
          <img src="https://cdna.artstation.com/p/assets/images/images/013/776/720/large/gabriel-brandao-alves-color-010-azir.jpg?1541046574" 
          alt="ImageNotFound!"
          className="max-w-20 max-h-16 rounded-full mt-4">

          </img>
        </span>
        {/* Hamburger icon */}
        <button
          className="ml-auto text-2xl lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        {/* Navigation links for larger screens */}
        <div className="hidden lg:flex gap-12 p-4 ml-auto text-xl font-medium">
        <Link
            className="hover:bg-white hover:text-background rounded-md p-2"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:bg-white hover:text-background rounded-md p-2"
            to="/Porfolio"
          >
            Porfolio
          </Link>
          <Link
            className="hover:bg-white hover:text-background rounded-md p-2"
            to="/About"
          >
            About
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Page content */}
      <div className="flex justify-center flex-col gap-6 p-4 text-center font-semibold mt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">I'm Daniel, a</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Web Developer!</h1>
      </div>
    </div>
  );
}

export default DesktopAbout;
