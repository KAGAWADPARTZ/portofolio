import "../App.scss";
import React, { useState, useEffect } from "react";
import MobileMenu from "../Mobile/MobileNavigation.js";
import { Link } from "react-router-dom";
import danielitoImage from "../images/danielito.jpg";
import MatrixBackground from "./Matrix.js";
import Footer from "./Footer.js";
function DesktopView() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


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
    <div
      className="w-full min-h-screen flex flex-col 
       text-green-500 font-sans p-2 hidden-scrollbar" 
    >
      <MatrixBackground />

      <title>Home</title>

      {/* Navigation bar */}
      <div className="w-full h-16 flex items-center justify-between p-4 bg-transparent text-white">
        <button
          className="ml-auto text-2xl lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <div className="hidden lg:flex gap-12 p-4 ml-auto text-xl font-medium">
          <Link
            className="hover:bg-gray-700 hover:text-white rounded-md p-2"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:bg-gray-700 hover:text-white rounded-md p-2"
            to="/Portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="hover:bg-LightBackground hover:text-DarkBackground rounded-md p-2"
            to="/About"
          >
            About
          </Link>
        </div>
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Main Content */}
      <div className="flex flex-col md:gap-4 justify-center items-center lg:flex-row lg:justify-start lg:items-center md:mt-10 flex-grow object-contain overflow-hidden">
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center font-bold">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">
            {Array.from("I'm Daniel, a").map((char, index) => (
              <span key={index} className="wavelight">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl">
            {Array.from("Web Developer").map((char, index) => (
              <span key={index} className="wavelight">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-start p-4">
          <img
            src={danielitoImage}
            alt="Daniel"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full"
          />
        </div>
      </div>
            <Footer/>
    </div>
  );
}
export default DesktopView;
