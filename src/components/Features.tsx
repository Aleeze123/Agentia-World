import React from 'react';
import { FaRobot, FaUserCog, FaTasks, FaShieldAlt } from 'react-icons/fa'; 

const Features = () => {
  return (
    <section id="features" className="bg-black py-12 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-purple-500 font-semibold mb-6">
          Neural Capabilities
        </h2>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-8">
          Powered by next-generation artificial intelligence
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="border-2 border-white px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:border-purple-600 animate__animated animate__fadeIn animate__delay-6s">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-600 p-4 rounded-full transition-all duration-300 animate-spin-slow">
                <FaRobot size={30} className="text-white" /> 
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl text-white">Autonomous Learning</h3>
            <p className="text-white text-sm sm:text-base">
              Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning
            </p>
          </div>
          <div className="border-2 border-white px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:border-purple-600 animate__animated animate__fadeIn animate__delay-6s">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-600 p-4 rounded-full transition-all duration-300 animate-spin-slow">
                <FaTasks size={30} className="text-white" /> 
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl text-white">Multi-Modal Intelligence</h3>
            <p className="text-white text-sm sm:text-base">
              Advanced agents capable of processing text, voice, and visual data for comprehensive understanding
            </p>
          </div>

          {/* Cognitive Integration */}
          <div className="border-2 border-white px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:border-purple-600 animate__animated animate__fadeIn animate__delay-6s">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-600 p-4 rounded-full transition-all duration-300 animate-spin-slow">
                <FaUserCog size={30} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl text-white">Cognitive Integration</h3>
            <p className="text-white text-sm sm:text-base">
              Seamless integration with existing systems through advanced cognitive APIs and neural bridges
            </p>
          </div>
          <div className="border-2 border-white px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:border-purple-600 animate__animated animate__fadeIn animate__delay-6s">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-600 p-4 rounded-full transition-all duration-300 animate-spin-slow">
                <FaShieldAlt size={30} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl text-white">Ethical AI Framework</h3>
            <p className="text-white text-sm sm:text-base">
              Built-in ethical guidelines and safety protocols ensuring responsible AI deployment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
