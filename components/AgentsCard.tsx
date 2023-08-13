import React from 'react'
import { IoCallOutline } from "react-icons/io5";
const AgentsCard = (props:any) => {
  return (
   <>
    <div className="shadow-md p-5 flex flex-col gap-2 relative">
            <img src={props.image} />
            <span className="font-inter text-xs text-blue-400 bg-white opacity-80 absolute top-60 p-[3px]">{props.experience}</span>
            <h1 className="font-inter text-xl">{props.name}</h1>
            <p className="font-inter text-sm">{props.role} </p>
            <label className=" ml-0 flex items-center gap-1">
            <IoCallOutline className="text-blue-400 "/>
            <span className="font-inter text-sm text-gray-400">{props.phone}</span>
            </label>
          </div>
   </>
  )
}

export default AgentsCard
