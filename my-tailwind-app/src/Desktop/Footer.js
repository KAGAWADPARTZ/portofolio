import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "../App.css"

function Footer() {
  return (
    <div className="w-full h-1/2 lg:h-1/2 bg-transparent text-white py-8 px-4 text-center font-sans ">
       
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8">
        {/* Location and Contact Info */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-lg font-bold mb-2">Location</h2>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-Mustard" /> Iloilo, Philippines
          </p>
          
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-Mustard" /> danielnocencio11@gmail.com
          </p>
          
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-Mustard" /> 09613231648
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-lg font-bold mb-2">Social Media</h2>
          <a className="flex items-center gap-2" href=" https://www.instagram.com/partztzy/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-Mustard" /> Instagram
          </a>
          <a className="flex items-center gap-2" href=" https://github.com/KAGAWADPARTZ" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-Mustard" /> Github
          </a>
          <a className="flex items-center gap-2" href=" https://www.linkedin.com/in/daniel-inocencio-07724a311" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-Mustard" /> LinkedIn
          </a>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6">
        <p className="text-sm">
          © 2024 All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;

