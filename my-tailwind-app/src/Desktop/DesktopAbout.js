import "../App.css";
import React, { useState } from "react";
import MobileMenu from "../Mobile/MobileNavigation.js"; // Import the MobileMenu component
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function DesktopAbout() {
  // State to track menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-background text-white font-sans p-2 overflow-auto">
      <title>About</title>

      {/* Navigation bar */}
      <div className="w-full h-16 flex items-center p-4 bg-background text-white">
        <span className="text-xl font-bold">
        
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
    <div className="flex flex-col mt-6 gap-6 p-4 justify-start items-center lg:flex-row lg:justify-between lg:items-start md:mt-10 h-full ">
      {/* Left div: About Info */}
      <div className="md:w-1/2 lg:w-1/2 flex flex-col justify-center items-center text-center p-4 rounded-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">About Me</h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          Hi! I'm Daniel, a passionate Web, Desktop, Mobile Developer. I love creating modern, responsive, and efficient web applications. 
        </p>
      </div>

      {/* Right div: Education */}
      <div className="md:w-1/2 lg:w-1/2 flex flex-col justify-center items-center text-center p-4 rounded-lg gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Education</h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          Manuel Luiz Quezon <br /> Elementary School
          <br />
          Graduated: 2015
        </p>
      
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          Iloilo National<br />
          High School<br />
          Graduated: 2021
        </p>
       
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          Bachelor of Computer Science<br />
          XYZ University<br />
          Present
        </p>
      </div>

      <div className="md:w-1/2 lg:w-1/2 flex flex-col justify-center items-center text-center  p-4 rounded-lg" >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Education</h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          Bachelor of Computer Science<br />
          XYZ University<br />
          Graduated: 2023
        </p>
      </div>
    </div>

    </div>
  );
}

export default DesktopAbout;
