import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

const OurServices = (props: any) => {
  return (
    <>
      <div className="flex flex-col items-center shadow-md gap-3 rounded-md p-3 lg:p-2  hover:text-blue-400 hover:border-b-4 border-blue-400">
        <img src={props.image} />
        <h1 className="font-roboto text-xl lg:text-2xl font-medium">
          {props.heading}
        </h1>
        <p className="font-roboto text-base lg:text-sm text-gray-400 font-normal leading-6  text-center">
          {props.description}
        </p>
        <a
          href="#"
          className="flex items-center font-roboto text-sm  font-medium pb-6"
        >
          {props.path}
          <CgArrowLongRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </>
  );
};

const OurServiceMenu = (props: any) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5">
        <img src={props.image} />
        <h1 className="font-inter text-xl lg:text-4xl font-bold">{props.totalNumber}</h1>
        <p className="font-inter text-gray-400 font-normal text-base">
         {props.heading}
        </p>
      </div>
    </>
  );
};

export { OurServiceMenu, OurServices };
