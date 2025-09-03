import React from "react";
import Image from "next/image";

const AboutInstaDrive = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-24 px-4 md:gap-x-12 gap-x-24 bg-[#111827] lg:px-12">
      <div>
        <h1 className="mb-4 text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-family-mono">
          Our Journey
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl md:w-100 font-family-sans">
          Founded in 2025, InstaDrive was born from a passion for premium
          automobiles and a commitment to unparalleled customer service. We
          noticed a gap in the market for a car rental experience that truly
          combined luxury, convenience, and transparency. From humble beginnings
          with a small fleet, we've grown into a trusted name, serving countless
          customers who demand nothing but the best.
        </p>
      </div>
      <div>
        <figure className="md:pt-4 lg:pt-6">
          <Image
            src="/Journey.webp"
            alt="About Us"
            width={800}
            height={600}
            className="rounded-xl mt-8 md:h-70 lg:h-96"
            loading="lazy"
          />
        </figure>
      </div>
    </div>
  );
};

export default AboutInstaDrive;
