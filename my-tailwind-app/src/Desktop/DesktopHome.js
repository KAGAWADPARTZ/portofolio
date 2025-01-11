import "../App.scss";
import React, { useState, useEffect } from "react";
import MobileMenu from "../Mobile/MobileNavigation.js";
import danielitoImage from "../images/danielito.jpg";
import MatrixBackground from "./Matrix.js";
import Footer from "./Footer.js";
import NavigationBar from "./NavigationBar.js";
function DesktopView() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [currentText, setCurrentText] = useState("Web Dev!");
  const rotatingTexts = ["Mobile Dev!", "Desktop Dev!", "Web Dev!"];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % rotatingTexts.length;
      setCurrentText(rotatingTexts[index]);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, );

  

  return (
    <div
      className="w-full h-screen flex flex-col 
       text-green-500 font-sans p-2 hidden-scrollbar" 
    >
      <MatrixBackground />

      <title>Home</title>

      {/* Navigation bar */}
       <button
              className="ml-auto p-2 text-2xl lg:hidden text-LightBackground"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
      
     <NavigationBar/>

      <MobileMenu className="lg:hidden" isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}  />

      {/* Main Content */}
      <div className="flex flex-col md:gap-4 justify-center items-center lg:flex-row lg:justify-start lg:items-center md:mt-10 flex-grow object-contain overflow-hidden">
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center font-bold">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">
            {Array.from("I'm Daniel, a").map((char, index) => (
              <span key={index} className="wavelight text-purple-500">
                {char === " " ? "\u00A0" : char}
                 
              </span>
            ))}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl">
            {Array.from(currentText).map((char, index) => (
              <span key={index} className="wavelight text-purple-500">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-start p-4">
          <img
            src={danielitoImage}
            alt="Daniel"
            className="w-24 h-24 lg:w-56 lg:h-56 rounded-full"
          />
        </div>
      </div >
          <div>
            <Footer/>
          </div>
    </div>
  );
}
export default DesktopView;
//