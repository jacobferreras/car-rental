"use client";
import useCarModel from "@/hooks/useCarModel";
import Link from "next/link";

const VehicleDetails = () => {
  const { car } = useCarModel();

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#030712]">
      <div className="pt-24 pb-12">
        <div className="rounded-xl mx-4 sm:mx-8 md:mx-12 bg-[#1f2937]">
          <h1 className="pl-4 sm:pl-6 pt-4 text-xl sm:text-2xl font-bold">
            {" "}
            <span>
              <Link href="/vehicles">
                <i className="bi bi-arrow-left-circle-fill mr-2"></i>
              </Link>
            </span>
            Vehicle Details
          </h1>
          <div className="h-px w-full bg-gray-600 my-4" />
          <div className="flex flex-col md:flex-row pb-8 gap-4 md:gap-8">
            <figure className="px-4 pt-6 md:pt-10 w-full md:w-1/2 lg:w-2/5">
              <img
                src={car.imageUrl}
                alt="Car"
                className="rounded-xl w-full h-auto object-cover"
              />
            </figure>
            <div className="card-body items-start px-4 md:px-0 w-full md:w-1/2 lg:w-3/5">
              <div className="pt-2 mb-2 w-full">
                <h1 className="card-title text-2xl sm:text-3xl md:text-4xl mb-2 break-words">
                  {car.make} {car.model}
                </h1>
                <h2 className="text-xl sm:text-2xl text-[#60a5fa] mb-2">
                  ₱{car.pricePerDay}/day
                </h2>
                <h2 className="text-xl sm:text-2xl mb-2">Description</h2>
                <p className="text-start w-full text-base sm:text-lg text-[#d1d5db] break-words">
                  {car.description}
                </p>
              </div>

              <div className="mb-4 w-full">
                <h2 className="text-xl sm:text-2xl mb-2">Key Specification</h2>
                <p className="text-start w-full text-base sm:text-lg text-[#d1d5db]">
                  Engine: {car.engine}
                </p>
                <p className="text-start w-full text-base sm:text-lg text-[#d1d5db]">
                  Horse Power: {car.horsepower}hp
                </p>
                <p className="text-start w-full text-base sm:text-lg text-[#d1d5db]">
                  Mileage: {car.mileage}miles
                </p>
                <p className="text-start w-full text-base sm:text-lg text-[#d1d5db]">
                  Color: {car.color}
                </p>
              </div>

              <button className="btn bg-[#1d4ed8] rounded-xl">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
