import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { RiAccountCircleLine } from "react-icons/ri";



export const Header = () => {
  return (
    <div className='flex justify-center'>

      <nav class="bg-white  nullbg-gray-900 fixed w-[90vw] z-20 top-0 shadow-2xl rounded-4xl my-5 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/main.png" class="h-8" alt="Flowbite Logo" />
          
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">  
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 nulltext-gray-400 nullhover:bg-gray-700 nullfocus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
             
            </button>
           <div className='flex gap-4 '>
            <a href="#" className=' text-green-500 text-2xl '><RiAccountCircleLine /></a>
            <a href="#" className=' text-green-500 text-2xl '><FiShoppingCart /></a>
            </div>
            
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white nullbg-gray-800 md:nullbg-gray-900 nullborder-gray-700">
              <li>
                <a href="#" class="block py-2 px-3 text-white bg-[#3b5d50] rounded-sm md:bg-transparent md:text-[#3b5d50] md:p-0 md:nulltext-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#3b5d50] md:p-0 md:nullhover:text-blue-500 nulltext-white nullhover:bg-gray-700 nullhover:text-white md:nullhover:bg-transparent nullborder-gray-700">About</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#3b5d50] md:p-0 md:nullhover:text-blue-500 nulltext-white nullhover:bg-gray-700 nullhover:text-white md:nullhover:bg-transparent nullborder-gray-700">Services</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#3b5d50] md:p-0 md:nullhover:text-blue-500 nulltext-white nullhover:bg-gray-700 nullhover:text-white md:nullhover:bg-transparent nullborder-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header