import React from 'react';
import { FaChalkboardTeacher, FaBrain, FaLock } from 'react-icons/fa';

const Solutions = () => {
  return (
    <section id="solutions" className="bg-black py-12 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-purple-500 font-semibold mb-6">
          AI Solutions
        </h2>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-8">
          Transforming industries with intelligent agents
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-center">
          <div className="border-2 border-white px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:border-purple-600 animate__animated animate__fadeIn animate__delay-6s">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-600 p-4 rounded-full transition-all duration-300 animate-spin-slow">
                <FaChalkboardTeacher size={30} className="text-white" /> 
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl text-white">Enterprise AI</h3>
            <p className="text-white text-sm sm:text-base">
              Custom AI agents designed for enterprise-scale operations and decision-making
            </p>
          </div>
          <div className="border-2 border-white px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:border-purple-600 animate__animated animate__fadeIn animate__delay-6s">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-600 p-4 rounded-full transition-all duration-300 animate-spin-slow">
                <FaBrain size={30} className="text-white" /> 
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl text-white">Neural Operations</h3>
            <p className="text-white text-sm sm:text-base">
              Automated workflow optimization through distributed neural networks
            </p>
          </div>
          <div className="border-2 border-white px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:border-purple-600 animate__animated animate__fadeIn animate__delay-6s">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-600 p-4 rounded-full transition-all duration-300 animate-spin-slow">
                <FaLock size={30} className="text-white" /> 
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl text-white">Secure Intelligence</h3>
            <p className="text-white text-sm sm:text-base">
              Privacy-first AI solutions with military-grade security protocols
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Solutions;
