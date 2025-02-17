"use client";
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="bg-black text-white py-16">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-center items-center px-6 lg:px-12">
        <div className="w-full lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="mt-2 flex items-center justify-center lg:justify-start">
            <FaEnvelope className="mr-2 text-purple-500" />
            <a href="mailto:contact@agentiaworld.com" className="text-white">
              contact@agentiaworld.com
            </a>
          </p>

          {/* Website */}
          <p className="mt-2 flex items-center justify-center lg:justify-start">
            <FaGlobe className="mr-2 text-purple-500" />
            <a href="https://www.agentiaworld.com" target="_blank" rel="noopener noreferrer" className="text-white">
              www.agentiaworld.com
            </a>
          </p>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-6 justify-center lg:justify-start">
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500 transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-2/3 p-6 lg:p-8">
          <h2 className="text-5xl font-semibold mb-4 text-center text-purple-500">Get in Touch</h2>
          <p className="text-lg mb-6 text-center">Ready to transform your business with AI?</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-4 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                  placeholder="Enter your first name"
                  aria-label="First Name"
                  required
                />
              </div>
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-4 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                  placeholder="Enter your last name"
                  aria-label="Last Name"
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                placeholder="Enter your email"
                aria-label="Email Address"
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-4 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                placeholder="Enter your message"
                aria-label="Message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
