"use client";
import useCarModel from "@/hooks/useCarModel";
import Image from "next/image";

const VehicleDetails = () => {
  const { car } = useCarModel();

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-24 px-4">
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
            <div>
              <p className="text-xl">{car.description}</p>
            </div>
            <div>
              <button className="btn btn-primary">Rent Now</button>
            </div>
          </div>
        </div>

        <div className="text-6xl py-6">Car Details</div>
      </div>
    </>
  );
};

export default VehicleDetails;
