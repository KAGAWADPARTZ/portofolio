import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import your components
import DesktopHome from "../Desktop/DesktopHome"; // Desktop component
import DesktopPortfolio from "../Desktop/DesktopPortfolio";
import DesktopAbout from "../Desktop/DesktopAbout";
import Testings from "../Desktop/try2"


function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* routes */}
        <Route path="/" element={<DesktopHome/>} />
        <Route path="/Portfolio" element={<DesktopPortfolio />} />
        <Route path="/About" element={<DesktopAbout />} />
        <Route path="/try2" element={<Testings />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
