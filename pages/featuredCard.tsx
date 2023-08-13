import FeaturedCards from "@/components/FeaturedCards";
import React from "react";
import FeaturedListingData from "@/components/constant/Card";

const FeaturedCard = () => {
  return (
    <>
      <div className="flex  flex-col justify-center items-center mt-32 p-4 gap-3">
        <h1 className="font-roboto text-blue-400 text-lg">Featured Listing </h1>
        <p className="font-inter text-4xl font-medium max-w-md text-center">
          We Bring Dream Homes To Reality{" "}
        </p>
        <div className="grid lg:grid-cols-3 mt-9 gap-x-2 gap-y-5">
          {FeaturedListingData.map((contents) => (
            <FeaturedCards
              key={contents.id}
              image={contents.image}
              status={contents.status}
              address={contents.address}
              location={contents.location}
              size={contents.size}
              parking={contents.parking}
              bedrooms={contents.bedrooms}
              bathrooms={contents.bathrooms}
              ownerName={contents.ownerName}
              lastActivity={contents.lastActivity}
              amount={contents.amount}
            />
          ))}
        </div>
        
      </div>
    </>
  );
};

export default FeaturedCard;
