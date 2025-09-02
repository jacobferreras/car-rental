import React from "react";
import CoreValueCard from "./CoreValueCard";

const AboutCoreValues = () => {
  return (
    <div className="bg-[url('/Corevalues.webp')] bg-cover bg-no-repeat bg-center relative py-24">
      <div className="absolute inset-0 bg-[#0b0e13] opacity-60 z-0"></div>
      <div className="flex flex-col justify-center items-center relative  z-10">
        <h1 className="flex justify-center items-center text-2xl lg:text-5xl font-family-mono font-bold text-white pl-4  absolute z-20">
          Our Core Values
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center px-4  text-center gap-4 lg:gap-8 mt-4 relative z-10">
        <CoreValueCard
          title="Integrity"
          description="We believe in honesty and transparency in all our dealings. Our customers can trust that we will always provide clear information about our services, pricing, and policies."
          iconClass="bi bi-shield-check"
        />
        <CoreValueCard
          title="Innovation"
          description="We are committed to continuously improving our services and adopting the latest technologies to enhance the customer experience. Our goal is to make car rental as seamless and efficient as possible."
          iconClass="bi bi-lightbulb"
        />
        <CoreValueCard
          title="Excellence"
          description="We strive for excellence in everything we do, from the quality of our vehicles to the level of service we provide. Our team is dedicated to ensuring that every customer has a memorable and enjoyable experience."
          iconClass="bi bi-gem"
        />
      </div>
    </div>
  );
};

export default AboutCoreValues;
