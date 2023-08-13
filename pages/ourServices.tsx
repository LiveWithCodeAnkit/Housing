import {
  OurServices as OurService,
  OurServiceMenu,
} from "@/components/OurServies";
import {
  OurServicesData,
  OurServicesMenu,
} from "@/components/constant/Ourservices";
const OurServices = () => {
  return (
    <>
      <div className="mt-28 items-center flex  justify-center">
        <div className="flex flex-col justify-center items-center gap-6 w-1/2">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="font-roboto text-base lg:text-lg text-blue-400 uppercase font-normal">
              our services
            </h2>
            <h1 className="font-inter text-xl lg:text-5xl font-semibold">
              Our Main Focus
            </h1>
          </div>

          <div className="grid lg:grid-flow-col gap-10">
            {OurServicesData.map((contents) => (
              <OurService
                key={contents.id}
                image={contents.image}
                heading={contents.heading}
                description={contents.description}
                path={contents.path}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#E2EFFF] flex flex-col justify-evenly items-center  w-auto lg:flex-row lg:h-96 mt-28 p-16 gap-3">
        {OurServicesMenu.map((contents) => (
          <OurServiceMenu
            key={contents.id}
            image={contents.image}
            totalNumber={contents.totalNumber}
            heading={contents.heading}
          />
        ))}
      </div>
    </>
  );
};

export default OurServices;
