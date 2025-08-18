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
        <div className="rounded-xl mx-12 bg-[#1f2937] ">
          <h1 className="pl-6 pt-4 text-2xl font-bold">
            {" "}
            <span>
              <Link href="/vehicles">
                <i className="bi bi-arrow-left-circle-fill mr-2"></i>
              </Link>
            </span>
            Vehicle Details
          </h1>
          <div className="h-px w-full bg-gray-600 my-4" />
          <div className="flex flex-col md:flex-row pb-8 gap-8">
            <figure className="pl-4 pt-10 w-auto  md:w-200">
              <img
                src={car.imageUrl}
                alt="Car"
                className="rounded-xl w-auto md:w-200 pl-2"
              />
            </figure>
            <div className="card-body items-start">
              <div className="pt-2 mb-2">
                <h1 className="card-title text-4xl mb-2">
                  {car.make} {car.model}
                </h1>
                <h2 className="text-2xl text-[#60a5fa] mb-2">
                  ₱{car.pricePerDay}/day
                </h2>
                <h2 className="text-2xl mb-2">Description</h2>
                <p className="text-start w-200 text-lg text-[#d1d5db]">
                  {car.description}
                </p>
              </div>

              <div className="mb-4">
                <h2 className="text-2xl mb-2z">Key Specification</h2>
                <p className="text-start w-200 text-lg text-[#d1d5db]">
                  Engine: {car.engine}
                </p>
                <p className="text-start w-200 text-lg text-[#d1d5db]">
                  Horse Power: {car.horsepower}hp
                </p>
                <p className="text-start w-200 text-lg text-[#d1d5db]">
                  Mileage: {car.mileage}miles
                </p>
                <p className="text-start w-200 text-lg text-[#d1d5db]">
                  Color: {car.color}
                </p>
              </div>

              <button className="btn bg-[#1d4ed8] rounded-xl">
                Book Your Ride Now <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
