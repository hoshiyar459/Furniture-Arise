import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { RiAccountCircleLine } from "react-icons/ri";

export const Header = () => {
  return (
    <div className='flex justify-center'>
      <nav className="bg-white fixed w-[90vw] z-20 top-0 shadow-2xl rounded-4xl my-5">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/main.png" className="h-8" alt="Company Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">  
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <svg className="w-4 h-4 text-green-400 border-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className='flex gap-4'>
              <a href="#" className='text-green-500 text-2xl hidden md:block'><RiAccountCircleLine /></a>
              <a href="/cart/1" className='text-green-500 text-2xl pr-4 mt-2 md:mt-0 md:pr-0'><FiShoppingCart /></a>
            </div>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a href="/" className="block py-2 px-3   rounded-sm md:bg-transparent md:text-[#3b5d50] md:p-0 " aria-current="page">Home</a>
              </li>
              <li>
                <a href="/shop" className="block py-2 px-3 text-gray-900 rounded-sm  md:hover:bg-transparent  md:p-0 md:hover:text-green-500   border-gray-700">Shop</a>
              </li>
              <li>
                <a href="/about" className="block py-2 px-3 text-gray-900 rounded-sm  md:hover:bg-transparent md:p-0 md:hover:text-green-500     border-gray-700">About</a>
              </li>
              <li>
                <a href="/contact" className="block py-2 px-3 text-gray-900 rounded-sm  md:hover:bg-transparent md:p-0 md:hover:text-green-500    border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header