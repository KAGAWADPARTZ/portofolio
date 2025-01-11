import React from "react";
import SharedNavLinks from "../Desktop/SharedNav";

const MobileHome = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      {isMenuOpen && (
        <div className="lg:hidden bg-transparent text-LightBackground flex flex-col gap-4 items-start p-4">
          <SharedNavLinks
            onClick={toggleMenu}
            className="flex flex-col items-start justify-start gap-4"
          />
        </div>
      )}
    </>
  );
};

export default MobileHome;
