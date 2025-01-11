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
            <FaMapMarkerAlt className="text-purple-500" /> Iloilo, Philippines
          </p>
          
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-purple-500" /> danielnocencio11@gmail.com
          </p>
          
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-purple-500" /> 09613231648
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-lg font-bold mb-2">Social Media</h2>
          <p className="flex items-center gap-2">
            <FaInstagram className="text-purple-500" /> Instagram
          </p>
          <p className="flex items-center gap-2">
            <FaGithub className="text-purple-500" /> Github
          </p>
          <p className="flex items-center gap-2">
            <FaLinkedin className="text-purple-500" /> LinkedIn
          </p>
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

