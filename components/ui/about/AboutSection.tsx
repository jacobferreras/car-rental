import React from "react";
import Image from "next/image";
import MissionAndVisionCard from "./MissionAndVisionCard";

const AboutSection = () => {
  return (
    <>
      <div className="hero min-h-100 relative mb-12">
        <Image
          src="/About.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />
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

      <div className="flex flex-col items-center justify-center py-10 px-4 mb-12">
        <div className="flex flex-row justify-between items-start max-w-6xl w-full gap-24">
          <div>
            <h1 className="mb-4 text-xl md:text-2xl lg:text-4xl">
              Our Journey
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl w-100">
              Founded in 2025, InstaDrive was born from a passion for premium
              automobiles and a commitment to unparalleled customer service. We
              noticed a gap in the market for a car rental experience that truly
              combined luxury, convenience, and transparency. From humble
              beginnings with a small fleet, we've grown into a trusted name,
              serving countless customers who demand nothing but the best.
            </p>
          </div>
          <div>
            <figure className="pt-6">
              <Image
                src="/Journey.png"
                alt="About Us"
                width={800}
                height={600}
                className="rounded-xl mt-8 "
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center py-10 px-4 gap-4">
        <MissionAndVisionCard
          title="Our Mission"
          description="To redefine the car rental experience by providing a seamless, transparent, and customer-centric service that exceeds expectations at every turn. We aim to empower our customers with the freedom to drive their dreams, backed by a commitment to quality and innovation."
          iconClass="bi bi-bullseye"
        />
        <MissionAndVisionCard
          title="Our Vision"
          description="To be the leading car rental service known for our exceptional quality, innovative solutions, and unwavering commitment to customer satisfaction. We envision a future where every journey is effortless, enjoyable, and tailored to the unique needs of our customers, setting new standards in the industry."
          iconClass="bi bi-eye-fill"
        />
      </div>
    </>
  );
};

export default AboutSection;
