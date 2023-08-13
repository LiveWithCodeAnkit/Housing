import React from "react";
import { ImLocation } from "react-icons/im";
import { MdWindow } from "react-icons/md";
import { FaBed, FaBath } from "react-icons/fa";
import { AiFillCar, AiOutlineClockCircle } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
const FeaturedCards = (props: any) => {
  return (
    <>
      <div className=" relative flex flex-col  justify-center items-center p-3 gap-4">
        <img src={props.image} />
        <span className="font-inter text-white bg-black p-2 text-sm font-medium absolute top-10 left-7">
          {props.status}
        </span>
        <h1 className="font-inter text-xl font-medium">{props.address}</h1>

        <label className=" ml-0 flex items-center gap-1">
          <ImLocation className="text-blue-400 " />
          <span className="font-inter text-xs text-gray-400">
            {props.location}
          </span>
        </label>
        <div className="border  w-full border-[#DCDCDC]"></div>

        <div className="grid grid-cols-2 gap-8">
          <label className="  flex items-center gap-1">
            <MdWindow className="text-blue-400 " />
            <span className="font-inter text-xs text-gray-400">
              {props.size}
            </span>
          </label>

          <label className=" ml-0 flex items-center gap-1">
            <AiFillCar className="text-blue-400 " />
            <span className="font-inter text-xs text-gray-400">
              {props.parking}
            </span>
          </label>

          <label className=" ml-0 flex items-center gap-1">
            <FaBed className="text-blue-400 " />
            <span className="font-inter text-xs text-gray-400">
              {props.bedrooms}
            </span>
          </label>

          <label className=" ml-0 flex items-center gap-1">
            <FaBath className="text-blue-400 " />
            <span className="font-inter text-xs text-gray-400">
              {props.bathrooms}
            </span>
          </label>
        </div>
        <div className="border  w-full border-[#DCDCDC]"></div>
       
        <div className="grid grid-cols-2 w-80 gap-8">
          <label className=" ml-6 flex items-center gap-1">
            <BsFillPersonFill className="text-blue-400 " />
            <span className="font-inter text-xs text-gray-400">
                 {props.ownerName}
            </span>
          </label>

          <label className="  flex items-center gap-1">
            <AiOutlineClockCircle className="text-blue-400 " />
            <span className="font-inter text-xs text-gray-400">
              {props.lastActivity}
            </span>
          </label>
        </div>

        <div className="bg-blue-400 flex justify-center w-full">
          <button className="text-white h-[55.33px]">{props.amount}</button>
        </div>
      </div>
     
    </>
  );
};

export default FeaturedCards;
