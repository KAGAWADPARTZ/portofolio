import {useState , useEffect} from "react";
import { Link } from "react-router-dom";

const MobileHome = ({ isMenuOpen, toggleMenu }) => {
   
  
  return (
    <>
      {isMenuOpen && (
        <div className="lg:hidden bg-LightBackground text-DarkBackground dark:bg-DarkBackground dark:text-LightBackground  flex flex-col gap-2 items-end p-4 space-y-2 font-semibold">
          <Link
             className=" hover:bg-DarkBackground hover:text-LightBackground dark:hover:bg-LightBackground dark:hover:text-DarkBackground  p-4 rounded w-1/3 text-right"
            to = "/"
          >
            Home
          </Link>
          <Link
             className=" hover:bg-DarkBackground hover:text-LightBackground dark:hover:bg-LightBackground dark:hover:text-DarkBackground  p-4 rounded w-1/3 text-right"
            to = "/Porfolio"
          >
            Porfolio
          </Link>
          <Link
            className=" hover:bg-DarkBackground hover:text-LightBackground dark:hover:bg-LightBackground dark:hover:text-DarkBackground  p-4 rounded w-1/3 text-right"
            to = "/About"
          >
            About
          </Link>
        </div>
      )}
    </>
  );
};

export default MobileHome;
