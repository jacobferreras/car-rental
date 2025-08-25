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
        description="At InstaDrive, we are committed to providing an unparalleled car rental experience."
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
