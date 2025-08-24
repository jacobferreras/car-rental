import React from "react";
import Image from "next/image";

const VehicleHero = () => {
  return (
    <div className="hero min-h-100 md:min-h-150 relative">
      <Image
        src="/Fleet.png"
        alt="Background"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-[#0b0e13] opacity-70 z-0"></div>
      <div className="flex flex-col justify-center items-center absolute z-20">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-center text-white font-bold font-family-mono">
          OUR EXCEPTIONAL FLEET
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-3xl text-center text-white font-bold font-family-mono">
          Explore our curated collection of the world's most prestigious and
          exhilarating luxury vehicles.
        </h2>
      </div>
    </div>
  );
};

export default VehicleHero;
