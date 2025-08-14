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
        <div className="rounded-xl card justify-center items-center mx-4 bg-[#1f2937] ">
          <figure className="px-10 pt-10">
            <img src={car.imageUrl} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>

          <div className="text-6xl py-4">Car Details</div>
          <p>{car.color}</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
