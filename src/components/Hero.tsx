"use client";
import React from "react";
import { BsRobot } from "react-icons/bs";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter"; 

const Hero = () => {
  const lines = [
    "Would you like to explore our AI integration solutions?",
    "Hello! I'm your AI agent. How can I enhance your business today?",
    "Experience cutting-edge technology at your fingertips.",
    "Ready to revolutionize your business with AI?"
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-12 pb-8 px-4 text-center bg-black text-white">
      {/* Top Badge */}
      <div className="px-4 py-1 rounded-full flex items-center space-x-2">
        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
        <span className="text-purple-500">POWERED BY PANAVERSITY</span>
      </div>
      <div className="mt-6 animate__animated animate__zoomIn animate__delay-3s">
        <Image
          src="/hero.webp" 
          alt="AI Agent"
          width={250}
          height={250}
          className="rounded-full object-cover shadow-xl"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 animate__animated animate__fadeIn animate__delay-1s">
        <span className="bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text">
          Enterprise AI Agents
        </span>
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 text-gray-300 animate__animated animate__fadeIn animate__delay-2s">
        for the Future
      </h2>
      <div className="mt-6 py-4 bg-gray-900 p-4 rounded-lg w-full max-w-md flex items-center gap-4 shadow-2xl animate__animated animate__fadeIn animate__delay-4s">
        <span className="text-purple-400">
          <BsRobot size={25} />
        </span>

        {/* Typewriter Effect */}
        <div className="text-gray-400">
          <Typewriter
            words={lines} 
            loop={true} 
            cursor
            cursorColor="#8B5CF6" 
            typeSpeed={100} 
            deleteSpeed={50} 
            delaySpeed={1500} 
          />
        </div>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-md">
        <Link
          href="#"
          className="flex items-center space-x-2 text-white bg-purple-500 hover:bg-purple-600 rounded-lg px-6 py-2 transition-all transform hover:scale-105 shadow-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-l hover:animate-pulse"
        >
          <p>Deploy Your AI Agent</p> <FaChevronRight />
        </Link>
        <Link
          href="#"
          className="border-2 border-white px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:border-purple-600 animate__animated animate__fadeIn animate__delay-6s"
        >
          Watch Demo
        </Link>
      </div>
    </div>
  );
};

export default Hero;
