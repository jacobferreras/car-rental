import React from "react";
import ServiceBenifits from "./ServiceBenifits";

const WhyChooseUsSection = () => {
  return (
    <div>
      <div className="bg-[#1f2937] py-24">
        <div className="flex justify-center items-center text-2xl lg:text-5xl font-family-mono font-bold  text-white pl-4 pt-12">
          Why Choose InstaDrive?
        </div>
        <ServiceBenifits />
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
