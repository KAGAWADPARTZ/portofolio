import "../App.css";
import React, { useState } from "react";
import MobileMenu from "../Mobile/MobileHome.js"; // Import the MobileMenu component
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import danielitoImage from "../images/danielito.jpg";

function DesktopView() {
  // State to track menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const name = "Partz";

  return (
    <div className="w-full h-screen flex flex-col bg-background text-white font-sans p-2">
      <title>Home</title>

      {/* Navigation bar */}
      <div className="w-full h-16 flex items-center p-4 bg-background text-white opacity-90">
        <span className="text-xl font-bold">
          {/* <img src="https://cdna.artstation.com/p/assets/images/images/013/776/720/large/gabriel-brandao-alves-color-010-azir.jpg?1541046574" 
          alt="ImageNotFound!"
          className="max-w-20 max-h-16 rounded-full mt-4">
          </img> */}
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
       <div className="flex p-4 md:gap-4 flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-center md:mt-10 h-full">
        {/* Left div */}
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">I'm Daniel, a</h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl">Web Developer!</h1>
        </div>
        {/* Right div */}
        <div className="w-full lg:w-1/2 flex justify-center items-start p-4 ">
          <img
            src={danielitoImage}
            alt="Placeholder"
            className="w-1/2  object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default DesktopView;
