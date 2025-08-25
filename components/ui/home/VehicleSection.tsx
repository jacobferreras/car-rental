import React from "react";
import Link from "next/link";
import HomeCarCard from "@/components/ui/home/HomeCarCard";
import prisma from "@/prisma/client";

const VehicleSection = async () => {
  const cars = await prisma.car.findMany({
    take: 8,
  });

  return (
    <div>
      <div className="py-12 lg:py-24 bg-[#111827]">
        <div className="flex flex-col justify-center items-center px-2 mb-4">
          <h1 className="text-2xl lg:text-5xl text-white font-family-mono font-bold mb-4">
            OUR VEHICLES
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <HomeCarCard cars={cars} />
        </div>

        <div className="flex justify-center items-centers py-12">
          <Link href="/vehicles">
            <button className="btn bg-[#1d4ed8] rounded-xl">
              View All Vehicles <i className="bi bi-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleSection;
