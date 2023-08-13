import React from 'react'
import { PropertiesData } from '@/components/constant/Properties'
import OurProperties from '@/components/OurProperty'
const OurProperty = () => {
  return (
    <>
      <div className="flex  flex-col justify-center items-center mt-32 p-4 gap-3">
        <h1 className="font-roboto text-blue-400 text-lg">Properties</h1>
        <p className="font-inter text-4xl font-medium max-w-md text-center">
        Our Popular properties
        </p>
        <div className="grid lg:grid-cols-3 mt-9 gap-x-2 gap-y-5">
         {PropertiesData.map((contents) => (
            <OurProperties
              key={contents.id}
              image={contents.image}
              tag={contents.tag}
              price={contents.price}
              address={contents.address}
              country={contents.country}
              bedrooms={contents.bedroom}
              bathroom={contents.bathroom}
              agentImg={contents.agentImg}
              agentName={contents.agentName}
              role={contents.role}
            />
          ))} 
        </div>
        
      </div>
      <div className="bg-[#F5F5F5] flex flex-col justify-evenly items-center  w-auto lg:flex-row lg:h-96 mt-28 px-10 py-32 gap-11">
            <img src="1.png"/>
            <img src="2.png"/>
            <img src="3.png"/>
            <img src="4.png"/>
            <img src="5.png"/>
      </div>
    </>
  )
}

export default OurProperty
