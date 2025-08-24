import React from "react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="hero min-h-100 md:min-h-150 relative">
      <Image
        src="/About.webp"
        alt="Background"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-[#0b0e13] opacity-70 z-0"></div>
      <div className="flex flex-col justify-center items-center absolute z-20">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-center text-white font-bold font-family-mono">
          ABOUT INSTADRIVE
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-center text-white font-bold font-family-mono">
          WITH INSTADRIVE
        </h2>
      </div>
    </div>
  );
};

export default AboutHero;
