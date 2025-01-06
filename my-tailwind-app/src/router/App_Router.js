import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import your components
import DesktopHome from "../Desktop/DesktopHome"; // Desktop component
import DesktopPortfolio from "../Desktop/DesktopPortfolio";
import DesktopAbout from "../Desktop/DesktopAbout";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* routes */}
        <Route path="/" element={<DesktopHome/>} />
        <Route path="/Portfolio" element={<DesktopPortfolio />} />
        <Route path="/About" element={<DesktopAbout />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
