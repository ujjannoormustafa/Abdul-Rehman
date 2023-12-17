"use client"
import icon from '../../../../public/assests/image/icon.png'
import React, { useState } from 'react';
import Image from 'next/image'
const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
  
      <nav className="bg-white shadow-lg" id="mobile">
        <div className="lg:max-w-6xl w-full mx-auto px-4 py-3">
          <div className="flex justify-between" style={{ padding: '12px 8px' }}>
            <div className="flex space-x-7">
              <div>
                <a href="#home" className="font-bold text-sm md:text-xl py-3">
                  Namra Amir
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-[#CB6BE6]"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`mobile-menu ${showMenu ? '' : 'hidden'}`}>
          <ul className="flex flex-col items-center">
            <li className="p-4 border-b-2 menu border-opacity-0 hover:border-opacity-100 hover:text-purple-400 duration-200 cursor-pointer active">
              <a href="">Home</a>
            </li>
            <li className="p-4 border-b-2 menu border-opacity-0 hover:border-opacity-100 hover:text-purple-400 duration-200 cursor-pointer">
              <a href="">Let's Talk</a>
            </li>
            <li className="p-4 border-b-2 menu border-opacity-0 hover:border-opacity-100 hover:text-purple-400 duration-200 cursor-pointer">
              <a href="">E-book</a>
            </li>
            <li className="p-4 border-b-2 menu border-opacity-0 hover:border-opacity-100 hover:text-purple-400 duration-200 cursor-pointer">
              <a href="">Book 1:1 Call</a>
            </li>
            <div className=" flex lg:justify-end md:justify-center md:py-4  justify-center items-center">
    <a href="https://www.linkedin.com/in/namraamir-personalbranding-contentcreation-ghostwriting/">
      <Image src={icon} alt='icon' width={40} height={40} />
    </a>
  </div>
          </ul>
        </div>

       

      </nav>
 
  );
};

export default MobileNav;
