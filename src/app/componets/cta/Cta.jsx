import React from 'react'

const Cta = () => {
  return (
    <div id='cta'>
       
    <section className="text-gray-600 body-font pt-8 pb-8 lg:px-32 md:px-20 px-2">
    <h1 className='text-3xl text-center font-bold py-4  text-black lg:hidden md:hidden'>Book a Discovery Call</h1>
  <div className="container  bg mx-auto px-5 py-8">
    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 className="flex-grow sm:pr-16 md:text-5xl text-3xl lg:text-7xl font-bold title-font text-gray-100">
      Got a project? Let's talk
      </h1>
      <div>
        <div className='text-sm py-4 text-white'>Build Your Personal Brand In Just 90 Days</div>
        <a href='https://calendly.com/namraamir/sparkling_discovery_call'>

       
       <button
  class="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
 Book A 
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
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >Call Now</span>
  
        </button>
        </a>
       </div>
    </div>
  </div>
</section>
    <div className=' md:text-center  pb-2'>
        <p className='text-center'>Created by Noor Mustafa Ujjan © All Right Reserved</p>
    </div>
    </div>
  )
}

export default Cta