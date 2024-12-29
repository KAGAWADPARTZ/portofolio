import './App.css';
import React, { useState } from "react";

function App() {
  // State to track menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const name = "Partz";

  return (
    <div className="w-full h-screen flex flex-col bg-background text-white font-sans">
      <title>Portfolio</title>

      {/* Navigation bar */}
      <div className="w-full h-14 flex items-center p-4 bg-background text-white">
        <span className="text-xl font-bold">Logo</span>
        {/* Hamburger icon */}
        <button
          className="ml-auto text-2xl lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        {/* Navigation links for larger screens */}
        <div className="hidden lg:flex gap-8 p-4 ml-auto">
          <a className="hover:bg-white hover:text-background rounded" href="#about">
            About
          </a>
          <a className="hover:bg-white hover:text-background rounded" href="#portfolio">
            Portfolio
          </a>
        </div>
      </div>

      {/* Dropdown links for mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background text-white flex flex-col items-start p-4 space-y-2 font-semibold">
          <a className="hover:bg-white hover:text-background p-4 rounded w-full" href="#about">
            About
          </a>
          <a className="hover:bg-white hover:text-background p-4 rounded w-full" href="#portfolio">
            Portfolio
          </a>
        </div>
      )}

      {/* Page content */}
      <div className="p-4">
        <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
        <p>Hello, my name is {name}!</p>
      </div>
    </div>
  );
}

export default App;
