import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <>
      <div className="hero min-h-100 relative hero-overlay bg-overlay-opacity-60">
        <Image
          src="/About.png"
          alt="Background"
          fill
          className="object-cover z-0 "
          priority
        />
        <div className="flex flex-col justify-center items-center absolute">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-center text-white font-family-mono font-bold z-20">
            DRIVE YOUR JOURNEY
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-center text-white font-family-mono font-bold z-20">
            WITH INSTADRIVE
          </h2>
          <div className="flex justify-center items-center mt-4">
            <button className="btn bg-red-600 text-white z-20">Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
