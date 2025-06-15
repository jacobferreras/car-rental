"use client";
import useCards from "@/hooks/useCards";
import { use } from "react";

interface Car {
  id: number;
  make: string;
  transmission: string;
  imageUrl: string;
  pricePerDay: number;
  model: string;
  fuelType: string;
  seats: number;
  year: number;
}

const CarCard = () => {
  const { cars } = useCards();

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center px-2 mb-4 gap-4">
      {cars.map((car: Car) => (
        <div
          key={car.id}
          className="card bg-base-100 w-auto  lg:w-96 shadow-sm"
        >
          <figure>
            <img src={car.imageUrl} alt={car.make} className="h-50 w-full" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              {car.make} ({car.model})
              <div className="badge badge-secondary">
                ₱{car.pricePerDay}/day
              </div>
            </h2>

            <div className="card-actions justify-start">
              <div className="badge badge-outline">{car.year}</div>
              <div className="badge badge-outline">{car.transmission}</div>
              <div className="badge badge-outline">{car.fuelType}</div>
              <div className="badge badge-outline">{car.seats} Seater</div>
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Rent Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCard;
