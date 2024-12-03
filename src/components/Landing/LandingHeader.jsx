import React from 'react';
import { Link } from 'react-router-dom';

const LandingHeader = ({ scrollToSection }) => {
  return (
    <header className="bg-white text-black py-6 px-8 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Coal Mining Insights</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="hover:text-green-400 cursor-pointer"
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('features')} 
                className="hover:text-green-400 cursor-pointer"
              >
                Features
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="hover:text-green-400 cursor-pointer"
              >
                Contact
              </button>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LandingHeader;
