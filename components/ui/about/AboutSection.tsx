import React from "react";
import CallToActionSection from "@/components/common/CallToActionSection";
import AboutTeam from "./AboutTeam";
import AboutCoreValues from "./AboutCoreValues";
import AboutInstaDrive from "./AboutInstaDrive";
import Hero from "../../common/Hero";

const AboutSection = () => {
  return (
    <>
      <Hero
        title="ABOUT INSTADRIVE"
        description="AT INSTADRIVE, WE ARE COMMITTED TO PROVIDING AN UNPARALLELED CAR RENTAL EXPERIENCE."
        ImageSrc="/About.webp"
      />
      <AboutInstaDrive />
      <AboutTeam />
      <AboutCoreValues />
      <CallToActionSection />
    </>
  );
};

export default AboutSection;
