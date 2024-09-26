import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Top */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h5 className="text-xl font-bold mb-4">About Us</h5>
            <p className="text-gray-600">
            I'm Aamir, a passionate and certified makeup artist with a flair for creating stunning transformations
            </p>
            <div className="flex space-x-4 mt-4">
              <Link to="https://www.instagram.com/facestoriesbyamir?igsh=Nm94ZWtlZGJ1Mmlr">
                <i className="fa-brands fa-instagram text-gray-600 hover:text-pink-500" />
              </Link>
              <Link to="https://www.facebook.com/FacestoriesbyAmir">
                <i className="fa-brands fa-facebook text-gray-600 hover:text-pink-500" />
              </Link>
              <Link to="https://www.youtube.com/@facestoriesbyamir">
                <i className="fa-brands fa-youtube text-gray-600 hover:text-pink-500" />
              </Link>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-4">Quick Links</h5>
            <ul>
              <li className="mb-2">
                <Link className="text-gray-600 hover:text-pink-500" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-pink-500" to="/portfolio">
                  Our Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-4">Subscribe</h5>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 rounded-md border border-gray-300 flex-grow"
                required
              />
              <button
                type="submit"
                className=" bg-pink-500 text-white rounded-full w-40 h-10"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto text-center">
          <p>© 2023 Face Stories by Amir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
