import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const AboutUs = () => {
  return (

    
    <div className="flex flex-col lg:flex-row justify-center gap-6 mt-52 lg:p-8">
      <div className="relative flex flex-col">
        <img
          src="./about1.jpg"
          className=" w-full h-[422px] object-cover   lg:w-[323px]  lg:h-[470px]   "
          alt="about us"
        />
        <div
          className="absolute shadow-xl grid bg-white p-[10px] top-[167px] lg:gap-1 right-[79px] 
          lg:right-[11rem] h-[44%] lg:top-[64%]  lg:p-[28px]
           lg:h-auto w-[52%] lg:w-[13rem] 
          md:w-[9rem] md:h-[11rem] md:p-5 md:top-[257px] md:right-[18rem] 
        
        "
        >
          <img src="trophy.png" alt="trophy" className="w-1/2  h-auto lg:w-[70px] lg:h-[82px] md:w-[38px] md:h-[47px]" />
          <span className="text-xs lg:text-xl md:text-xs font-semibold font-roboto  mt-2 lg:mt-0">
            National Real Estate Awards
          </span>
          <label className="font-normal font-roboto text-gray-400 text-sm lg:text-xl md:text-sm">
            Analysis
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:w-1/2">
        <div className="grid gap-4">
          <span className="text-xs leading-7 text-blue-400 uppercase font-roboto lg:text-lg ">
            About Us
          </span>
          <h1 className="text-xs font-medium font-inter lg:text-4xl md:text-xs">
            We're on a Mission to Change View of RealEstate Field.
          </h1>
          <p className="text-xs leading-6 text-gray-400 font-roboto lg:text-base md:text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed
            eiusmod tempor incididunt ut labore et dolore. Enim admix minim
            veniam quis nostrud.
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-8">
          <div className="flex flex-col items-center lg:items-start gap-3">
            <img
              src="housevila.png"
              alt="modern villa"
              className="w-20 h-20  lg:w-[60px] lg:h-[60px]"
            />
            <h1 className=" text-base font-medium leading-8 capitalize font-inter lg:text-xl">
              Modern Villa
            </h1>
            <p className="text-sm leading-6 text-gray-400 font-roboto lg:text-[16px]">
              When unknown printer took galley of type and scrambled.
            </p>

        
          </div>
          <div className="flex flex-col items-center lg:items-start gap-3">
            <img
              src="money.png"
              alt="secure payment"
              className="w-20 h-20 lg:w-[60px] lg:h-[60px]"
            />
            <h1 className="text-base font-medium leading-8  font-inter lg:text-xl">
              Secure Payment
            </h1>
            <p className="text-xs leading-6 text-gray-400 font-roboto lg:text-[16px]">
              When unknown printer took galley of type and scrambled.
            </p>
          </div>
         
        </div>
        <a
              href="#"
              className="flex items-center mt-2 font-medium text-blue-400 lg:mt-4"
            >
              <HiOutlineArrowNarrowRight className="ml-2" />
              <span className="ml-1 lg:text-[16px]">Learn More</span>
            </a>
      </div>
    </div>
  );
};
export default AboutUs;
 