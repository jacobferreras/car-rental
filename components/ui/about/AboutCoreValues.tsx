import React from "react";
import CoreValueCard from "./CoreValueCard";
import { coreValues } from "@/lib/constant";

const AboutCoreValues = () => {
  return (
    <div className="bg-[url('/Corevalues.webp')] bg-cover bg-no-repeat bg-center relative py-24">
      <div className="absolute inset-0 bg-[#0b0e13] opacity-60 z-0"></div>
      <div className="flex flex-col justify-center items-center relative  z-10">
        <h1 className="flex justify-center items-center text-2xl lg:text-5xl font-family-mono font-bold text-white pl-4  absolute z-20">
          Our Core Values
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center px-4  text-center gap-4 lg:gap-8 mt-12 relative z-10">
        {coreValues.map((value) => (
          <CoreValueCard
            key={value.id}
            title={value.title}
            description={value.description}
            iconClass={value.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutCoreValues;
