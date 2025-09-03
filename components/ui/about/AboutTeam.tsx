import React from "react";
import OurteamCard from "./OurteamCard";
import { TeamMembers } from "@/lib/constant";

const AboutTeam = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 lg:px-0 bg-[#1f2937]">
      <h1 className="mb-8 text-xl md:text-2xl lg:text-5xl font-bold font-family-mono">
        Meet Our Team
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-8">
          {TeamMembers.map((member) => (
            <OurteamCard
              key={member.id}
              imageUrl={member.imageUrl}
              name={member.name}
              position={member.position}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
