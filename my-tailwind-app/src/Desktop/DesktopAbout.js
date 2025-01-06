import "../App.css";
import React, { useState,useEffect } from "react";
import MobileMenu from "../Mobile/MobileNavigation.js"; // Import the MobileMenu component
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaMoon, FaRegSun } from "react-icons/fa"; 

function DesktopAbout() {
  // State to track menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track Dark/light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  // Persist theme across sessions (optional)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className="w-full h-screen flex flex-col bg-LightBackground dark:bg-gray-900 text-black dark:text-white font-sans p-2">
      <title>Home</title>

      {/* Navigation bar */}
      <div className="w-full h-16 flex items-center justify-between p-4 bg-LightBackground dark:bg-gray-800 text-black dark:text-white">
        {/* Light/Dark Mode Button */}
        <button
          className="text-lg font-medium p-2 rounded-md border border-gray-300 dark:border-gray-700 transition-transform duration-300 hover:scale-110 flex items-center gap-2"
          onClick={toggleTheme}
        >
          {isDarkMode ? <FaRegSun /> : <FaMoon />}
          <span className="sr-only">
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </span>
        </button>

        {/* Hamburger icon for smaller screens */}
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
            className="hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white rounded-md p-2"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white rounded-md p-2"
            to="/Portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white rounded-md p-2"
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
