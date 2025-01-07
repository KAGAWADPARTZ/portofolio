import "../App.css";
import React, { useState, useEffect } from "react";
import { FaMoon, FaRegSun } from "react-icons/fa"; 
import MobileMenu from "../Mobile/MobileNavigation.js";
import { Link } from "react-router-dom";
import danielitoImage from "../images/danielito.jpg";

function DesktopView() {
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
    <div className="w-full h-screen flex flex-col bg-LightBackground dark:bg-DarkBackground text-DarkBackground dark:text-LightBackground font-sans p-2">
      <title>Home</title>

      {/* Navigation bar */}
      <div className="w-full h-16 flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800 text-DarkBackground dark:text-LightBackground">
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
      <div className="flex p-4 md:gap-4 flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-center md:mt-10 h-full object-contain">
        {/* Left div */}
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center font-bold">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">I'm Daniel, a</h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl">Web Developer!</h1>
        </div>
        {/* Right div */}
        <div className="w-full lg:w-1/2 flex justify-center items-start p-4">
          <img
            src={danielitoImage}
            alt="Daniel"
            className="w-1/2 object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default DesktopView;
