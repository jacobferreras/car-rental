import React from "react";
import CallToActionSection from "@/components/common/CallToActionSection";
import AboutHero from "./AboutHero";
import AboutTeam from "./AboutTeam";
import AboutCoreValues from "./AboutCoreValues";

const AboutSection = () => {
  return (
    <>
      <AboutHero />
      <AboutTeam />
      <AboutCoreValues />
      <CallToActionSection />
    </>
  );
};

export default AboutSection;
