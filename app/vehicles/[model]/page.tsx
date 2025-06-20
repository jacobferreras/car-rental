"use client";
import useCarModel from "@/hooks/useCarModel";
import Image from "next/image";

const page = () => {
  const { car } = useCarModel();

  console.log("Car data:", car);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <Image
            src={car.imageUrl.trim()}
            alt={car.make}
            className="h-60 w-full"
            width="1000"
            height="1000"
          />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title text-6xl">
            <span>{car.make}</span>
            {car.model}
          </h2>
          <div>
            <p>STARTING AT</p>
            <p className="text-2xl">₱{car.pricePerDay}/Day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
