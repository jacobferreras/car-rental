import React from "react";
import OurteamCard from "./OurteamCard";

const AboutTeam = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 bg-[#1f2937]">
      <h1 className="mb-8 text-xl md:text-2xl lg:text-5xl font-bold font-family-mono">
        Meet Our Team
      </h1>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <OurteamCard
            imageUrl="/CEO.webp"
            name="John Doe"
            position="CEO & Founder"
            description="John is the visionary behind InstaDrive, dedicated to providing a premium car rental experience that combines luxury and convenience. His leadership ensures that every customer receives exceptional service and quality."
          />
          <OurteamCard
            imageUrl="/Head.webp"
            name="Jane Smith"
            position="Chief Operating Officer"
            description="Jane is dedicated to ensuring that every aspect of our operations runs smoothly, from fleet management to customer service, making sure that our clients have the best experience possible."
          />
          <OurteamCard
            imageUrl="/Customer.webp"
            name="Alice Johnson"
            position="Head of Marketing"
            description="Alice is passionate about creating innovative marketing strategies that connect with our customers and enhance their experience with InstaDrive."
          />
          <OurteamCard
            imageUrl="/Fleet.webp"
            name="Bob Brown"
            position="Customer Support Manager"
            description="Bob leads our customer support team, ensuring that every inquiry is handled with care and professionalism, making sure our customers feel valued and supported."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
