import React from "react";
import Image from "next/image";
import img1 from "../../../../public/assests/image/1.jpg";
import img2 from "../../../../public/assests/image/2.jpg";
import img3 from "../../../../public/assests/image/3.jpg";
const Feature = () => {
  return (
    <>
      <section id="sec" className="lg:px-32 md:px-20 px-2 py-5" >
      <div className=" py-8  items-center justify-center md:flex lg:hidden ">
            <div className="text-4xl font-bold text-center">Let's Talk</div>
          </div>
        <div className="topline flex justify-evenly w-full py-4 " >
          <div className="w-2/5 hidden items-center justify-start md:hidden lg:flex ">
            <div className="text-7xl font-bold">My Projects</div>
          </div>
          <div className="lg:w-3/5 md:w-full w-full">
            <a
              href="https://calendly.com/namraamir/sparkling_discovery_call"
              class="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <Image
                src={img1}
               
                alt="Photo by Magicle"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
               
              </span>
            </a>
          </div>
        </div>

        <div className="secondline flex justify-start py-4 ">
        <div className="lg:w-3/5 w-full">
            <a
              href="https://www.buymeacoffee.com/namraamir/e/155884"
              class="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <Image
                src={img2}
                loading="lazy"
                alt="Photo by Magicle"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                
              </span>
            </a>
          </div>
        </div>

        <div className="secondline flex justify-end py-4 ">
        <div className="lg:w-3/5 w-full">
            <a
              href="https://pk.linkedin.com/in/namraamir"
              class="group relative  flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <Image
                src={img3}
                loading="lazy"
                alt="Photo by Magicle"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                
              </span>
            </a>
          </div>
        </div>

      </section>
    </>
  );
};

export default Feature;
