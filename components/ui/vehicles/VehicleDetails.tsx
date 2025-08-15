"use client";
import useCarModel from "@/hooks/useCarModel";
import Image from "next/image";

const VehicleDetails = () => {
  const { car } = useCarModel();

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#030712]">
      <div className="pt-24 pb-12">
        <div className="rounded-xl mx-4 bg-[#1f2937] ">
          <h1 className="pl-6 pt-4 text-2xl font-bold">Vehicle Details</h1>
          <div className="h-px w-full bg-gray-600 my-4" />
          <div className="flex flex-col md:flex-row pb-8">
            <figure className="pl-4 pt-10 w-auto  md:w-200">
              <img
                src={car.imageUrl}
                alt="Car"
                className="rounded-xl w-auto md:w-200 pl-2"
              />
            </figure>
            <div className="card-body items-start">
              <h1 className="card-title">
                {car.make} {car.model}
              </h1>
              <h2>₱{car.pricePerDay}/day</h2>
              <h2>Description</h2>
              <p className="text-start w-150">{car.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
