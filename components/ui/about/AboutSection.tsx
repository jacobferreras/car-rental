import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <>
      <div className="hero min-h-100 relative">
        <Image
          src="/About.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="flex flex-col justify-center items-center absolute z-20">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-center text-white font-family-mono font-bold">
            ABOUT INSTADRIVE
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-center text-white font-family-mono font-bold">
            WITH INSTADRIVE
          </h2>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
