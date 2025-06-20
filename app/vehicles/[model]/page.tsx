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
    <div className="min-h-screen flex justify-center items-center px-4">
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
        <div className="card-body">
          <h2 className="card-title">{car.make}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
