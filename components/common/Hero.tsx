import React from "react";
import Image from "next/image";

interface HeroProps {
  title: string;
  description: string;
  ImageSrc: string;
}

const Hero = ({ title, description, ImageSrc }: HeroProps) => {
  return (
    <div>
      <div className="hero min-h-70 md:min-h-150 relative">
        <Image
          src={ImageSrc}
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-[#0b0e13] opacity-70 z-0"></div>
        <div className="flex flex-col justify-center items-center absolute z-20">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-center text-white font-bold font-family-mono">
            {title}
          </h1>
          <p className="text-sm sm:text-xl lg:text-2xl text-center text-white font-family-sans mt-4 px-8 z-20">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
