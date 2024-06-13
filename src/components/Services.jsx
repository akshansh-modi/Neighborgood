import React from "react";
import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";
import { MdExplore } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { IoPeopleCircleSharp } from 'react-icons/io5';
import { FaUserPlus } from 'react-icons/fa';
const Services = () => {
  const statements = {
    Local_Support: "Easily find nearby support! Discover carpooling, baby nursing, and food stalls to save time and expenses.",
    Event_Discovery: "Discover local events! Find concerts, festivals, and parties near you with our event discovery service.",
    Interest_Matching: "Meet your neighbors! Find matches based on shared interests and hobbies with our interest matching service",
    Profile_Creation: "Build your network, stand out! Create a captivating online profile with our Profile Creation service."
  };
  



  const icon1 = (
    <FaUserPlus size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdExplore size={35} className=" text-backgroundColor" />
  );
  const icon4= (
    <IoPeopleCircleSharp size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
         
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className="  flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard className="" icon={icon4} title=" Interest Matching" about={statements. Interest_Matching}/>
        <ServicesCard className="" icon={icon2} title=" Event Discovery" about={statements. Event_Discovery} />
        <ServicesCard className="" icon={icon3} title=" Local Support" about={statements.Local_Support} />
        <ServicesCard className="" icon={icon1} title=" Profile Creation" about={statements.Profile_Creation} />
      </div>
    </div>
  );
};

export default Services;
