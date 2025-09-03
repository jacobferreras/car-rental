import React from "react";
import Image from "next/image";
import HomeBookingCard from "./HomeBookingCard";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen relative hero-overlay bg-overlay-opacity-60">
        <div className="absolute inset-0 z-0">
          <Image
            src="/HomeBg.webp"
            alt="Background"
            width={2732}
            height={1536}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-[#0b0e13] opacity-70"></div>
        </div>
        <div className="flex flex-col justify-center items-center absolute z-20 w-full h-full top-0 left-0">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl text-center text-white font-mono font-bold z-20">
            DRIVE YOUR JOURNEY WITH INSTADRIVE
          </h1>
          <p className="text-sm sm:text-xl lg:text-2xl text-center text-white font-family-sans mt-4 px-8 z-20">
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
