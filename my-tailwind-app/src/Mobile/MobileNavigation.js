import { Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaUser } from "react-icons/fa";
const MobileHome = ({ isMenuOpen, toggleMenu }) => {
     
  return (
    <>
      {isMenuOpen && (
        <div className="lg:hidden bg-transparent text-LightBackground flex flex-col gap-6 items-end p-4 space-y-2 font-semibold">
          
          <Link
                      className="hover:bg-LightBackground hover:text-DarkBackground rounded-md p-2"
                      to="/"
                    >
                      <span className="flex items-center gap-2">
                        <FaHome className="text-3xl" />
                        <span className="sr-only">Home</span>
                      </span>
                    </Link>
                    <Link
                      className="hover:bg-LightBackground hover:text-DarkBackground  rounded-md p-2"
                      to="/Portfolio"
                    >
                      <span className="flex items-center gap-2">
                        <FaBriefcase className="text-3xl" />
                        <span className="sr-only">Portfolio</span>
                      </span>
                    </Link>
                    <Link
                      className="hover:bg-LightBackground hover:text-DarkBackground rounded-md p-2"
                      to="/About"
                    >
                      <span className="flex items-center gap-2">
                        <FaUser className="text-3xl" />
                        <span className="sr-only">About</span>
                      </span>
                    </Link>
        </div>
      )}
    </>
  );
};

export default MobileHome;
