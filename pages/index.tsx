import Layout from "@/components/LayOut";
import AboutUs from "./aboutUs";
import Agents from "./agents";
import LandingPage from "./landingPage";

import OurServices from "./ourServices";
import FeaturedCard from "./featuredCard";
import Testimonials from "./testimonials";
import OurProperty from "./ourProperties";

export default function Home() {
  return (
    <>
      {/* <Header/> */}
      {/* <HeroSection/>
      <AboutUs/>
      <OurServices/> */}
      <LandingPage />
      <Layout>
         <AboutUs />
        <OurServices/>
         <Agents/>  
         <FeaturedCard/>
         <Testimonials/>
         <OurProperty/>
      </Layout>
    </>
  );
}
