import React from 'react'
import icon from '../../../../public/assests/image/icon.png'
import Image from 'next/image'
import Link from 'next/link'
const TopHeader = () => {
  return (
   
<header
  id="desktop"
  className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-32"
  style={{ padding: "0px 120px" }}
>
  {/* logo */}
  <h1 className="w-3/12">
    <a href="#home" className="font-bold text-xl ">
      Namra Amir
    </a>
  </h1>
  {/* navigation */}
  <nav className=" bg-white font-semibold text-lg">
    <ul className="flex items-center">
      <li className="p-4 border-b-2 menu border-opacity-0 hover:border-opacity-100 menu hover:text-purple-400 duration-200 cursor-pointer active">
      <a href="#home">Home</a>
      </li>
      <li className="p-4 border-b-2 menu border-opacity-0 hover:border-opacity-100 hover:text-purple-400 duration-200 cursor-pointer">
        <a href="#sec">Let's Talk</a>
      </li>
      <li className="p-4 border-b-2 menu border-opacity-0 hover:border-opacity-100 hover:text-purple-400 duration-200 cursor-pointer">
        <a href="#book">E-book</a>
      </li>
      <li className="p-4 border-b-2 menu border-opacity-0 hover:border-opacity-100 hover:text-purple-400 duration-200 cursor-pointer">
        <a href="#cta">Book 1:1 Call</a>
      </li>
    </ul>
  </nav>
  {/* buttons -*/}
  <div className=" flex justify-end">
    <a href="https://www.linkedin.com/in/namraamir-personalbranding-contentcreation-ghostwriting/">
      <Image src={icon} alt='icon' width={40} height={40} />
    </a>
  </div>
</header>

    
  )
}

export default TopHeader