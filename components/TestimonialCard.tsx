import React from "react";

const TestimonialCard = (props: any) => {
  return (
    <>
     
      <div className="flex flex-col justify-center items-start max-w-sm gap-6">
        <div className="bg-white max-h-44 px-9 py-9 rounded-[15px] relative">
          <p className="font-inter text-base font-normal text-gray-400 ">
            {props.description}
          </p>
        </div>
        <div className="w-8 h-8 absolute  border-transparent border-3 border-solid border-t-0 border-white bg-white mt-[75px] ml-5 transform rotate-45"></div>

        <div className="flex gap-4 p-2">
          <img src={props.image} />
          <div className="flex flex-col gap-0">
            <h1 className="font-inter text-lg font-medium">{props.name}</h1>
            <span className="font-inter text-sm font-normal">{props.role}</span>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default TestimonialCard;
