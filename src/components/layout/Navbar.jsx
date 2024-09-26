import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link className="logo" to="/">
            <img
              src="\assets\images\LOGO  AA.png"
              className="h-18 w-24"
              alt="Logo"
            />
          </Link>
        </div>
        {/* Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          >
            <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
        {/* Menu */}
        <div className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto mt-4 lg:mt-0 transition-all duration-300 ease-in-out`}>
          <ul className="lg:flex lg:space-x-6">
            <li className="nav-item">
              <Link className="nav-link text-gray-700 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium transition duration-300" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-gray-700 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium transition duration-300" to="/about">
                About
              </Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link text-gray-700 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium transition duration-300" to="/portfolio">
                Our Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-gray-700 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium transition duration-300" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
