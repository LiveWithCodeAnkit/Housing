import Button from "@/components/Button";
import DropDown from "@/components/DropDown";
import { RiSearchLine } from "react-icons/ri";

import { heroSection } from "@/components/constant/HeroSection";
const HeroSection = () => {
  const heroSectionInfo = heroSection[0];

  return (
    <>
      <div className="hero-section">
        <div className="here-section-description">
          <label>{heroSectionInfo.mainTitle}</label>
          <p>{heroSectionInfo.aboutDescription}</p>
          <Button title="Make An Enquiry" />
        </div>

        <div className="here-section-image">
          <div className="hero-section-image-section">
            <img src="./houseing.jpg" />
          </div>

          <div className="rating-box">
            <h1>
              Customer Rating
              <label>
               
                {heroSectionInfo.ratingValue} <img src="./Star1.png" />
              </label>
            </h1>
          </div>
          <div className="hero-section-buy-description">
            <h1>Buy Your Dream Home </h1>
            <h2>80+</h2>
            <label>Home Available</label>
            <Button title="View Details" />
          </div>
        </div>

         <div className="search-location">
          <DropDown className="locations" id="Choice Location" />
          <DropDown className="bedrooms" id="Bedrooms" />
          <DropDown className="rent" id="For Rent" />
          <Button
            // icon={<RiSearchLine />}
            className="hero-section-btn"
            title="Search"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
