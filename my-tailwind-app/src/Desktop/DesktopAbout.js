import "../App.css";
import React, { useState } from "react";
import MobileMenu from "../Mobile/MobileNavigation.js"; // Import the MobileMenu component
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaGraduationCap, FaTools } from "react-icons/fa"; // Import icons for Education and Skills
import ReactLogo from "../images/React-icon.png"; // Import React logo
import JsLogo from "../images/JavaScript-logo.png"; // Import JavaScript logo
import imgFirebase from "../images/firebase.png";
import imgAnroid from "../images/Android_Studio.png";
import imgCSharp from "../images/csharp.svg";
import imgJava from "../images/javaa.png";
import imgMysql from "../images/mysql.webp";
import imgTailwind from "../images/tailwinds.png";
import MatrixBackground from "./Matrix.js";
import { FaCircleInfo } from "react-icons/fa6";
import Footer from "./Footer.js";
// import { SiHyperskill } from "react-icons/si";

function DesktopAbout() {
  // State to track menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="w-full h-screen flex flex-col 
       text-green-500 font-sans p-2 hidden-scrollbar" 
    >
      <title>Home</title>
      <MatrixBackground/>
      {/* Navigation bar */}
      <div className="w-full h-16 flex items-center justify-between p-4  text-white">
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
            className="hover:bg-gray-700 hover:text-white rounded-md p-2"
            to="/About"
          >
            About
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Page content */}
      <div className="flex flex-col mt-6 gap-4 p-4 justify-start items-center lg:flex-row lg:justify-between lg:items-start md:mt-10 h-full text-LightBackground">
        {/* Left div: About Info */}
        <div className="md:w-1/2 lg:w-1/2 flex flex-col justify-center items-center text-center p-4 rounded-lg font-semibold">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex items-center gap-2">
            <FaCircleInfo />
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl">
            Hi! I'm Daniel, a passionate Web, Desktop, Mobile Developer. I love
            creating modern, responsive, and efficient web applications.
          </p>
        </div>

        {/* Center div: Education */}
        <div className="md:w-1/2 lg:w-1/2 flex flex-col justify-center items-center text-center p-4 rounded-lg font-semibold ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex items-center gap-2">
            <FaGraduationCap />
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl">
            Manuel Luiz Quezon <br /> Elementary School
            <br />
            Graduated: 2015
          </p>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl">
            Iloilo National
            <br />
            High School
            <br />
            Graduated: 2021
          </p>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl">
            Iloilo Science And
            <br /> Technology University
            <br />
            Bachelor Of Science In
            <br /> Computer Science <br />
            Present
          </p>
        </div>

        {/* Right div: Skills Section */}
        <div className="sm:w-full lg:w-1/2 flex flex-col justify-center items-center text-center p-4 rounded-lg font-semibold">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex items-center gap-2">
            <FaTools />
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            <img src={ReactLogo} alt="React Logo" className="w-20 h-20" />
            <img src={JsLogo} alt="JavaScript Logo" className="w-20 h-20" />
            <img src={imgFirebase} alt="Firebase Logo" className="w-20 h-20" />
            <img src={imgAnroid} alt="Android Studio Logo" className="w-20 h-20" />
            <img src={imgCSharp} alt="C# Logo" className="w-20 h-20" />
            <img src={imgJava} alt="Java Logo" className="w-20 h-20" />
            <img src={imgMysql} alt="MySQL Logo" className="w-20 h-20" />
            <img src={imgTailwind} alt="Tailwind CSS Logo" className="w-20 h-20" />
          </div>
        </div>
      </div>
      <div>
        
      </div>
      <Footer/>
    </div>
  );
}

export default DesktopAbout;
