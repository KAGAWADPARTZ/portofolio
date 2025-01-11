import "../App.css";
import React, { useState } from "react";
import MobileMenu from "../Mobile/MobileNavigation.js"; // Import the MobileMenu component
import MatrixBackground from "./Matrix.js";
import NavigationBar from "./NavigationBar.js";
import Footer from "./Footer.js";

function DesktopPortfolio() {
  // State to track menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-between 
       text-green-500 font-sans p-2 overflow-auto"
    >
      <MatrixBackground />

      {/* Navigation bar */}
      <NavigationBar toggleMenu={toggleMenu} />

      <MobileMenu
        className="lg:hidden"
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
    
      {/* Main Content */}
      <div className="flex flex-grow flex-col gap-16 px-4 text-center lg:flex-row lg:justify-center lg:items-center lg:px-16">
        {/* Laundry System */}
        <div className=" text-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Laundry System</h2>
          <p className="mb-4">
            A mobile app designed for <span className="font-bold text-purple-500">LAUNDRY SHOPS</span> in your area, enabling efficient <span className="font-bold text-purple-500">TRACKING</span> and <span className="font-bold text-purple-500">MANAGEMENT</span> of laundry orders.
          </p>
          <p className="text-sm mb-4 text-LightBackground">
            Tech Stack: <span className="font-bold text-purple-500">Android Studio</span>, <span className="font-bold text-purple-500">Firebase Database</span>
          </p>
          <a
            href="https://drive.google.com/file/d/1XPsndQM7wHvbKKqTLdzVD5j-3AwL2gI-/view?usp=sharing"
            className="text-purple-500 font-bold hover:underline hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>
            {/*text-purple-500*/}
        {/* Online Ordering System */}
        <div className=" text-LightBackground p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Online Ordering System</h2>
          <p className="mb-4">
            A <span className="font-bold text-purple-500">WEB-BASED SYSTEM</span> for ordering groceries online, designed to make<span className="font-bold text-purple-500">SHOPPING CONVENIENT</span> and <span className="font-bold text-purple-500">EFFICIENT</span>.
          </p>
          <p className="text-sm mb-4 text-LightBackground">
            Tech Stack: <span className="font-bold text-purple-500">React</span>, <span className="font-bold text-purple-500">Tailwind</span>, <span className="font-bold text-purple-500">Firebase Database</span>
          </p>
          <a
            href="https://isatu-coop.vercel.app/login"
            className="text-purple-500 font-bold hover:underline hover:scale-110"
             target="_blank"
             rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>

        {/* Blog Website */}
        <div className=" text-LightBackground p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">My Blog Website</h2>
          <p className="mb-4">
            a <span className="font-bold text-purple-500">BLOG</span> where I share insights about <span className="font-bold text-purple-500">CODING CHALLENGES</span> and <span className="font-bold text-purple-500">SOLUTIONS</span>, <span className="font-bold text-purple-500">AIMED AT HELPING FELLOW DEVELOPERS</span>.
          </p>
          <p className="text-sm mb-4 text-LightBackground">
            Tech Stack: <span className="font-bold text-purple-500">HTML</span>, <span className="font-bold text-purple-500">CSS</span>, <span className="font-bold text-purple-500">JavaScript</span>, <span className="font-bold text-purple-500">MySQL</span>, <span className="font-bold text-purple-500">XAMPP Apache</span>
          </p>
          <a
            href="http://danielinocenciobscs4a.infinityfreeapp.com/index?i=2"
            className="text-purple-500 font-bold hover:underline hover:scale-110"
             target="_blank"
             rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default DesktopPortfolio;
