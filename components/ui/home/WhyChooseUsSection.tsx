import React from "react";
import ServiceBenifits from "./ServiceBenifits";

const WhyChooseUsSection = () => {
  return (
    <div>
      <div className="bg-[#1f2937] py-12 lg:p-24">
        <div className="flex justify-center items-center text-2xl lg:text-5xl font-family-mono font-bold  text-white pl-4 ">
          WHY CHOOSE INSTADRIVE?
        </div>
        <ServiceBenifits />
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
