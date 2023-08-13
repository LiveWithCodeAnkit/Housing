import React from "react";
// import Slider from "react-slick";
import { TestimonialData } from "@/components/constant/Testimonial";
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
     
      
    };
  return (
    // <>
    //   <div className="bg-[#E9F3FF] flex-col  mt-32  py-32 ">
    //     {/* <div className="absolute top-8 left-32 xl:left-80">
    //       <img src="quote.png" />
    //     </div> */}
    //     <div className="relative">
    //       <img src="quote.png" className="absolute left-40" />
    //     </div>
    //     <div className="mb-12">
    //       <h1 className="font-roboto text-blue-400 text-lg font-normal text-center">
    //         Our Testimonials
    //       </h1>
    //       <p className="font-inter text-[42px] font-semibold text-center">
    //         What Our Customers Says{" "}
    //       </p>
    //     </div>

    //     {/* <div className="flex flex-col xl:flex-row gap-8 justify-center items-center"> */}
    //        <Slider {...settings}> 
    //       {TestimonialData.map((contents) => (
    //         <TestimonialCard
    //           key={contents.id}
    //           description={contents.description}
    //           image={contents.image}
    //           name={contents.name}
    //           role={contents.role}
    //         />
    //       ))}
    //         </Slider> 
    //     {/* </div> */}
       

    //     <div className="relative">
    //       <img src="quotedown.png" className="absolute  right-28" />
    //     </div>
    //   </div>
    // </>
    <>
    </>
  )
};

export default Testimonials;
