import React from 'react';
import { FaCheck } from 'react-icons/fa'; // Importing checkmark icon

const Pricing = () => {
  return (
    <section id="pricing" className="bg-black py-16 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl text-purple-500 font-semibold mb-6">
          Choose Your Plan
        </h2>
        <p className="text-xl sm:text-2xl text-white mb-12">
          Scale your AI capabilities with our flexible pricing
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-center">
          <div className="max-w-sm w-full border-2 border-white px-8 py-10 rounded-lg text-white font-semibold transition-all duration-300 hover:border-purple-600 transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeIn animate__delay-1s">
            <h3 className="text-2xl text-white mb-4">Starter</h3>
            <p className="text-3xl font-bold text-white mb-4">$499/month</p>
            <ul className="space-y-4 text-left text-white">
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> 2 AI Agent Instances
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> Basic Neural Processing
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> 24/7 Support
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> Weekly Analytics
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> Basic Integration Support
              </li>
            </ul>
            <button className="mt-6 py-2 px-6 bg-black border-[2px] border-purple-600 text-white rounded-md transition-all duration-300 hover:bg-purple-700 transform hover:scale-110">
              Get Started
            </button>
          </div>
          <div className="max-w-sm w-full border-2 border-white px-8 py-10 rounded-lg text-white font-semibold transition-all duration-300 hover:border-purple-600 transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeIn animate__delay-2s">
            <h3 className="text-2xl text-white mb-4">Professional</h3>
            <p className="text-3xl font-bold text-white mb-4">$999/month</p>
            <ul className="space-y-4 text-left text-white">
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> 10 AI Agent Instances
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> Advanced Neural Networks
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> Priority Support
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> Real-time Analytics
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> Custom Integration
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> API Access
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> Advanced Security
              </li>
            </ul>
            <button className="mt-6 py-2 px-6 bg-black border-[2px] border-purple-600 text-white rounded-md transition-all duration-300 hover:bg-purple-700 transform hover:scale-110">
              Get Started
            </button>
          </div>
          <div className="max-w-sm w-full border-2 border-white px-8 py-10 rounded-lg text-white font-semibold transition-all duration-300 hover:border-purple-600 transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeIn animate__delay-3s">
            <h3 className="text-2xl text-white mb-4">Enterprise</h3>
            <p className="text-3xl font-bold text-white mb-4">$Custom</p>
            <ul className="space-y-4 text-left text-white">
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> Unlimited Agents
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> Full Neural Suite
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> Dedicated Support Team
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> Advanced Analytics Dashboard
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> Custom Development
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> Full API Access
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> Enterprise Security
              </li>
              <li className="flex items-center">
                <FaCheck className="text-purple-500 border-2 border-purple-500 bg-black mr-2 p-1 rounded-full" /> Custom Training
              </li>
            </ul>
            <button className="mt-6 py-2 px-6 bg-black border-[2px] border-purple-600 text-white rounded-md transition-all duration-300 hover:bg-purple-700 transform hover:scale-110">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
