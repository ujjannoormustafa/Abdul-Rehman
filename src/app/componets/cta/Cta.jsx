import React from 'react'

const Cta = () => {
  return (
    <div id='cta'>
       
    <section className="text-gray-600 body-font bg-black  pb-8 lg:px-32 md:px-20 px-2">
    <h1 className='text-3xl text-center font-bold py-4  text-black lg:hidden md:hidden'>Book a Discovery Call</h1>
  <div className="container  bg-black mx-auto px-5 py-8">
    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 className="flex-grow sm:pr-16 md:text-5xl text-3xl lg:text-7xl font-bold title-font text-gray-100">
      Got a project? Let's talk
      </h1>
      <div>
        {/*<div className='text-sm py-4 text-white'>Build Your </div>*/}
        <a href='https://www.linkedin.com/in/abdul-rehman2/'>
            <button
                className="align-middle select-none font-sans w-full font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
            >
                Contact Me
            </button>
        </a>
       </div>
    </div>
  </div>
</section>
    <div className=' md:text-center  '>
        <p className='text-center text-sm'>Created by Noor Mustafa Ujjan © All Right Reserved</p>
    </div>
    </div>
  )
}

export default Cta