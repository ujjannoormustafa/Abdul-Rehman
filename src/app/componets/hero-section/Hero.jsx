import React from 'react'
import Image from 'next/image'
import heorImg from '../../../../public/assests/image/1.png'


const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-r from-fuchsia-600 to-purple-600 lg:px-32 md:px-20 px-2 " id='home' >
    <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <span className='text-white font-semibold py-1'>Hello, World!</span>
        <h1 className="title-font text-4xl md:text-5xl lg:text-5xl mb-4 font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">I'm Abdul Rehman
            <br className="hidden lg:inline-block"/>
        </h1>
        <p className="mb-8  text-xl text-gray-100">Front-end Developer<br/>Shaping Visually Stunning Websites.</p>
        <div className="flex justify-center">
         <a href='#cta'>

        
        <button
  class="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
Visit My
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-4 z-10"
    >Portfolio</span>
  
        </button>
        </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image className="object-cover object-center rounded" alt="hero"  width={400} src={heorImg} />
      </div>
    </div>
  </section>
  )
}

export default Hero