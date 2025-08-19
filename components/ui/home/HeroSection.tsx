import React from "react";
import Image from "next/image";
import HomeBookingCard from "./HomeBookingCard";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen relative hero-overlay bg-overlay-opacity-60 ">
        <Image
          src="/HomeBg.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-[#0b0e13] opacity-70 z-0"></div>
        <div className="flex flex-col justify-center items-center absolute z-20">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl text-center text-white font-family-mono font-bold z-20">
            DRIVE YOUR JOURNEY WITH INSTADRIVE
          </h1>
          <p className="text-md sm:text-lg lg:text-xl text-center text-white font-family-sans mt-4 px-4 z-20">
            Experience unparalleled luxury and performance with our exclusive
            fleet of premium vehicles, curated for the discerning driver.
          </p>
          <div className="flex justify-center items-center mt-4">
            <HomeBookingCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
