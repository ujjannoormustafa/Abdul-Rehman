import React from 'react'
import Image from 'next/image'
import heorImg from '../../../../public/assests/image/book.png'
const Ebook = () => {
  return (
    <div id='book' className={"bg-white pt-12"}>
{/*        <div className=' w-full lg:px-32 md:px-20 px-2 py-5 '>*/}
{/*        <section className="text-gray-600 body-font bg">*/}
{/*  <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">*/}
{/*    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">*/}
{/*      <Image*/}
{/*        className="object-cover object-center rounded"*/}
{/*        alt="ebook"*/}
{/*        src={heorImg}*/}
{/*        width={400}*/}
{/*        height={400}*/}
{/*      />*/}
{/*    </div>*/}
{/*    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">*/}
{/*      */}
{/*      <p className="mb-8 leading-relaxed font-semibold lg:font-bold text-2xl md:text-3xl lg:text-3xl text-white">*/}
{/*      “In this book, I have documented the whole process of building a personal brand on LinkedIn. After reading this you will be able to crack the code on ''how to build a personal brand on LinkedIn”*/}
{/*      </p>*/}
{/*      <div className="flex justify-between w-full items-center">*/}

{/*        <div>*/}
{/*            <h2 className='font-semibold text-sm text-white'>By:</h2>*/}
{/*            <h1 className='font-bold text-3xl text-gray-200'>Namra Amir</h1>*/}
{/*            <span className=' text-sm text-gray-200 '>Personal Branding Strategist</span>*/}
{/*        </div>*/}
{/*       <div>*/}
{/*       <a href="https://www.buymeacoffee.com/namraamir/e/155884">*/}
{/*       <button*/}
{/*  class="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"*/}
{/*>*/}
{/* Grab Your*/}
{/*  <span*/}
{/*    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"*/}
{/*  ></span>*/}
{/*  <span*/}
{/*    class="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"*/}
{/*  ></span>*/}
{/*  <span*/}
{/*    class="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"*/}
{/*  ></span>*/}
{/*  <span*/}
{/*    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-1.5 z-10"*/}
{/*    >E-book Now</span>*/}
{/*  */}
{/*        </button>*/}
{/*        </a>*/}
{/*       </div>*/}
{/*      */}
{/*      </div>*/}
{/*    </div>*/}
{/*  </div>*/}
{/*        </section>*/}

{/*        </div>*/}

        <div className="max-w-xl mx-auto bg-white p-4 mt-16">
            {/* To achieve the desired progress, you can update the 'stroke-dasharray' property. */}
            <h4 className="text-3xl md:text-5xl dark:text-white font-bold mb-6">
                Skills
            </h4>
            <div className="mb-7">
                <div className="flex justify-between py-1">
      <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
       HTML
      </span>
                    <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
        98%
      </span>
                </div>
                <svg
                    className="rc-progress-line"
                    viewBox="0 0 100 1"
                    preserveAspectRatio="none"
                >
                    <path
                        className="rc-progress-line-trail"
                        d="M 0.5,0.5
   L 99.5,0.5"
                        strokeLinecap="round"
                        stroke="#D9D9D9"
                        strokeWidth={1}
                        fillOpacity={0}
                    />
                    <path
                        className="rc-progress-line-path"
                        d="M 0.5,0.5
   L 99.5,0.5"
                        strokeLinecap="round"
                        stroke="#FF6464"
                        strokeWidth={1}
                        fillOpacity={0}
                        style={{
                            strokeDasharray: "91.2px, 100px",
                            strokeDashoffset: 0,
                            transition:
                                "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
                        }}
                    ></path>
                </svg>
            </div>
            <div className="mb-7">
                <div className="flex justify-between py-1">
      <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
       CSS{" "}
      </span>
                    <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
        95%
      </span>
                </div>
                <svg
                    className="rc-progress-line"
                    viewBox="0 0 100 1"
                    preserveAspectRatio="none"
                >
                    <path
                        className="rc-progress-line-trail"
                        d="M 0.5,0.5
   L 99.5,0.5"
                        strokeLinecap="round"
                        stroke="#D9D9D9"
                        strokeWidth={1}
                        fillOpacity={0}
                    />
                    <path
                        className="rc-progress-line-path"
                        d="M 0.5,0.5
   L 99.5,0.5"
                        strokeLinecap="round"
                        stroke="#9272D4"
                        strokeWidth={1}
                        fillOpacity={0}
                        style={{
                            strokeDasharray: "84.05px, 100px",
                            strokeDashoffset: 0,
                            transition:
                                "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
                        }}
                    ></path>
                </svg>
            </div>
            <div className="mb-7">
                <div className="flex justify-between py-1">
      <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
        JavaScript
      </span>
                    <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
        65%
      </span>
                </div>
                <svg
                    className="rc-progress-line"
                    viewBox="0 0 100 1"
                    preserveAspectRatio="none"
                >
                    <path
                        className="rc-progress-line-trail"
                        d="M 0.5,0.5
   L 99.5,0.5"
                        strokeLinecap="round"
                        stroke="#D9D9D9"
                        strokeWidth={1}
                        fillOpacity={0}
                    />
                    <path
                        className="rc-progress-line-path"
                        d="M 0.5,0.5
   L 99.5,0.5"
                        strokeLinecap="round"
                        stroke="#5185D4"
                        strokeWidth={1}
                        fillOpacity={0}
                        style={{
                            strokeDasharray: "64.35px, 100px",
                            strokeDashoffset: 0,
                            transition:
                                "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
                        }}
                    ></path>
                </svg>
            </div>
            <div className="mb-7">
                <div className="flex justify-between py-1">
      <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
        Figma
      </span>
                    <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
        75%
      </span>
                </div>
                <svg
                    className="rc-progress-line"
                    viewBox="0 0 100 1"
                    preserveAspectRatio="none"
                >
                    <path
                        className="rc-progress-line-trail"
                        d="M 0.5,0.5
   L 99.5,0.5"
                        strokeLinecap="round"
                        stroke="#D9D9D9"
                        strokeWidth={1}
                        fillOpacity={0}
                    />
                    <path
                        className="rc-progress-line-path"
                        d="M 0.5,0.5
   L 99.5,0.5"
                        strokeLinecap="round"
                        stroke="#CA56F2"
                        strokeWidth={1}
                        fillOpacity={0}
                        style={{
                            strokeDasharray: "74.25px, 100px",
                            strokeDashoffset: 0,
                            transition:
                                "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
                        }}
                    ></path>
                </svg>
            </div>
        </div>

    </div>
  )
}

export default Ebook