import React from 'react';
import { FaBrain, FaLayerGroup, FaCogs, FaGlobeAmericas } from 'react-icons/fa'; 

const Technology = () => {
  return (
    <section id="technology" className="bg-black py-12 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-purple-500 font-semibold mb-6">
          Powered by Advanced AI
        </h2>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-8">
          Built on cutting-edge neural architectures
        </p>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Neural Networks */}
          <div className="border-2 border-white px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:border-purple-600 animate__animated animate__fadeIn animate__delay-6s">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-600 p-4 rounded-full transition-all duration-300 animate-spin-slow">
                <FaBrain size={30} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl text-white">Neural Networks</h3>
            <p className="text-white text-sm sm:text-base">Advanced neural architectures for complex decision making</p>
          </div>

          {/* Deep Learning */}
          <div className="border-2 border-white px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:border-purple-600 animate__animated animate__fadeIn animate__delay-6s">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-600 p-4 rounded-full transition-all duration-300 animate-spin-slow">
                <FaLayerGroup size={30} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl text-white">Deep Learning</h3>
            <p className="text-white text-sm sm:text-base">Sophisticated deep learning models for pattern recognition</p>
          </div>

          {/* Advanced ML */}
          <div className="border-2 border-white px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:border-purple-600 animate__animated animate__fadeIn animate__delay-6s">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-600 p-4 rounded-full transition-all duration-300 animate-spin-slow">
                <FaCogs size={30} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl text-white">Advanced ML</h3>
            <p className="text-white text-sm sm:text-base">Cutting-edge machine learning algorithms</p>
          </div>

          {/* Global Scale */}
          <div className="border-2 border-white px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:border-purple-600 animate__animated animate__fadeIn animate__delay-6s">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-purple-600 p-4 rounded-full transition-all duration-300 animate-spin-slow">
                <FaGlobeAmericas size={30} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl text-white">Global Scale</h3>
            <p className="text-white text-sm sm:text-base">Distributed AI processing across global networks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
