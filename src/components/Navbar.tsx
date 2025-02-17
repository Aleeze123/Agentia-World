"use client";
import React, { useState } from 'react';
import { BsRobot } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-5 bg-black text-white">
   
      <div className="flex justify-center items-center space-x-2">
        <span className="text-purple-600">
          <BsRobot size={25} />
        </span>
        <div className="text-2xl font-bold">
          Agentia World
        </div>
      </div>

    
      <button
        className="md:hidden text-white focus:outline-none absolute top-5 right-5"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <CgMenuRight size={28} />
      </button>
      <ul className="flex space-x-4 ml-12 hidden md:flex">
        <li className="group">
          <a href="#features" className="flex items-center space-x-2 text-white hover:text-purple-600 rounded-full px-6 py-2 transition-all transform hover:scale-105 shadow-lg">
            <span>Features</span>
          </a>
        </li>
        <li className="group">
          <a href="#technology" className="flex items-center space-x-2 text-white hover:text-purple-600 rounded-full px-6 py-2 transition-all transform hover:scale-105 shadow-lg">
            <span>Technology</span>
          </a>
        </li>
        <li className="group">
          <a href="#solutions" className="flex items-center space-x-2 text-white hover:text-purple-600 rounded-full px-6 py-2 transition-all transform hover:scale-105 shadow-lg">
            <span>Agents</span>
          </a>
        </li>
        <li className="group">
          <a href="#pricing" className="flex items-center space-x-2 text-white hover:text-purple-600 rounded-full px-6 py-2 transition-all transform hover:scale-105 shadow-lg">
            <span>Pricing</span>
          </a>
        </li>
        <li className="group">
          <a href="#contact" className="flex items-center space-x-2 text-white hover:text-purple-600 rounded-full px-6 py-2 transition-all transform hover:scale-105 shadow-lg">
            <span>Contact</span>
          </a>
        </li>
        <li className="group">
          <a
            href="#launch"
            className="flex items-center space-x-2 text-white bg-purple-500 hover:bg-purple-600 rounded-lg px-6 py-2 transition-all transform hover:scale-105 shadow-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-l hover:animate-pulse"
          >
            <span>Launch Console</span>
          </a>
        </li>
      </ul>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-64 bg-black text-white p-6 flex flex-col z-50 shadow-lg">

            <button
              className="self-end text-3xl text-purple-600 hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <IoMdClose />
            </button>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-6 mt-8 text-lg">
              <a href="#features" className="text-white hover:text-purple-600 transition-all" onClick={handleLinkClick}>Features</a>
              <a href="#technology" className="text-white hover:text-purple-600 transition-all" onClick={handleLinkClick}>Technology</a>
              <a href="#agents" className="text-white hover:text-purple-600 transition-all" onClick={handleLinkClick}>Agents</a>
              <a href="#pricing" className="text-white hover:text-purple-600 transition-all" onClick={handleLinkClick}>Pricing</a>
              <a href="#contact" className="text-white hover:text-purple-600 transition-all" onClick={handleLinkClick}>Contact</a>
              <a href="#launch" className="text-white bg-purple-500 hover:bg-purple-600 rounded-lg px-6 py-2 transition-all transform hover:scale-105 shadow-lg" onClick={handleLinkClick}>
                Launch Console
              </a>
            </nav>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
