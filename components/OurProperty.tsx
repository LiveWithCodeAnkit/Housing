import React from "react";
import { GiPersonInBed } from "react-icons/gi";
import { FaBath } from "react-icons/fa";
const OurProperties = (props: any) => {
  return (
    <>
      <div className=" relative flex flex-col  p-3 gap-4">
        <img src={props.image} />

        <span className="font-inter text-white bg-[#0061E0] p-2 text-sm font-medium absolute top-10 right-3">
          {props.tag}
        </span>
        <div className="flex  flex-col justify-start items-start gap-3">
          <h1 className="font-inter text-xl font-medium text-blue-400">
            {props.price}
          </h1>
          <span className="font-inter text-xs text-gray-400">
            {props.address}
          </span>
          <h1 className="font-inter text-xl font-medium text-blue-400">
            {props.country}
          </h1>
        </div>

        <div className="flex gap-3">
          <label className="  flex items-center gap-1">
            <GiPersonInBed />
            <span className="font-inter text-xs text-gray-400">
              {props.bedrooms}
            </span>
          </label>

          <label className=" ml-0 flex items-center gap-1">
            <FaBath />
            <span className="font-inter text-xs text-gray-400">
              {props.bathroom}
            </span>
          </label>
         
        </div>
        <div className="flex gap-4 p-2">
            <img src={props.agentImg} />
            <div className="flex flex-col gap-0">
              <h1 className="font-inter text-base font-medium">
                {props.agentName}
              </h1>
              <span className="font-inter text-xs text-gray-400 font-normal">
                {props.role}
              </span>
            </div>
          </div>
      </div>
    </>
  );
};

export default OurProperties;
