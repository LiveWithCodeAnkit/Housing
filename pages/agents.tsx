import AgentsCard from "@/components/AgentsCard";
import React from "react";
import AgentListData from "@/components/constant/Agents";

const Agents = () => {
  return (
    <>
      <div className="flex  flex-col justify-center items-center mt-12 gap-2">
        <div className="flex flex-col items-center gap-2">
          <p className="font-roboto text-base lg:text-lg text-blue-400 uppercase font-normal">
            EXPERTISE IS HERE{" "}
          </p>
          <h1 className="font-inter text-xl lg:text-5xl font-semibold">
            Our Growing Agents
          </h1>
        </div>

        <div className="grid md:grid-cols-2  xl:flex xl:flex-row gap-6 ">

        {AgentListData.map((contents) => (
            <AgentsCard
              key={contents.id}
              image={contents.image}
              experience={contents.experience}
              name={contents.name}
              role={contents.role}
              phone={contents.phone}
            />
          ))}
     
        
        </div>


        <div className="flex flex-col bg-[#E2EFFF] items-center gap-3 p-9 mt-32 lg:flex-row lg:min-w-[940px] lg:justify-between">
           <img src="gropicon.png" />
           <div className="flex  flex-col text-center lg:text-start gap-2">
              <h1 className="font-inter text-2xl">Become an Agent</h1>
              <p className="font-roboto text-xl text-gray-400">Agent hen an unknown printer took a galley scramble </p>
           </div>
           <div className="lg:ml-96">
            <button className="bg-blue-400 font-roboto text-base border-none text-white p-3 lg:w-32">Join Now </button>
           </div>
        </div>
      </div>
    </>
  );
};

export default Agents;
