import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <nav className="bg-white fixed w-full z-20 top-0 shadow-2xl rounded-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/main.png" className="h-8" alt="Company Logo" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6 text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

    
          {/* Navbar Links */}
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              menuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col items-center md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white">
              <li>
                <Link to="/" className="block py-2 px-3 md:text-[#3b5d50] md:p-0">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="block py-2 px-3 text-gray-900 md:hover:text-green-500 md:p-0"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-gray-900 md:hover:text-green-500 md:p-0"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-gray-900 md:hover:text-green-500 md:p-0"
                >
                  Contact
                </Link>
              </li>
              <li>
              <Link to="/cart/1" className="text-green-500 text-2xl">
              <FiShoppingCart />
              </Link>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
