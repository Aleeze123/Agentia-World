import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div>
            <h3 className="text-3xl font-semibold text-purple-600">Agentia World</h3>
            <p className="text-lg text-gray-400 mt-2 sm:mt-0">
              Next-generation AI agents powering the future of enterprise intelligence.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
 
          <div>
            <h4 className="text-xl font-semibold text-purple-600">Product</h4>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li><a href="#features" className="hover:text-purple-400">Features</a></li>
              <li><a href="#pricing" className="hover:text-purple-400">Pricing</a></li>
              <li><a href="#documentation" className="hover:text-purple-400">Documentation</a></li>
              <li><a href="#api" className="hover:text-purple-400">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-purple-600">Company</h4>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-purple-400">About</a></li>
              <li><a href="#blog" className="hover:text-purple-400">Blog</a></li>
              <li><a href="#careers" className="hover:text-purple-400">Careers</a></li>
              <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-purple-600">Legal</h4>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li><a href="#legal" className="hover:text-purple-400">Legal</a></li>
              <li><a href="#privacy" className="hover:text-purple-400">Privacy</a></li>
              <li><a href="#terms" className="hover:text-purple-400">Terms</a></li>
              <li><a href="#security" className="hover:text-purple-400">Security</a></li>
              <li><a href="#compliance" className="hover:text-purple-400">Compliance</a></li>
            </ul>
          </div>
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-xl font-semibold text-purple-600">Follow Us</h4>
            <div className="flex space-x-6 mt-4 justify-center sm:justify-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                <FaTwitter className="text-3xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                <FaGithub className="text-3xl" />
              </a>
              <a href="mailto:contact@agentia.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                <FaEnvelope className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6">
        <div className="flex justify-center">
          <p className="text-gray-400 text-lg">
            &copy; 2025 Agentia World. Powered by Panaversity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
