import Image from "next/image";
import { Decimal } from "@prisma/client/runtime/library";
import Link from "next/link";
import {
  CarStatus,
  CarType,
  FuelType,
  Transmission,
} from "../../app/generated/prisma";

interface Car {
  id: number;
  make: string;
  model: string;
  description: string;
  year: number;
  pricePerDay: Decimal;
  imageUrl: string;
  status: CarStatus;
  transmission: Transmission;
  fuelType: FuelType;
  type: CarType;
  createdAt: Date;
  updatedAt: Date;
  color: string | null;
  mileage: number | null;
  engine: string | null;
  horsepower: number | null;
  frontImage: string | null;
  backImage: string | null;
  interiorImage: string | null;
  rearImage: string | null;
}

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="card bg-[#1c2634] shadow-md shadow-blue-500/50 hover:shadow-xl animate-fade-in">
      {car.status === "AVAILABLE" ? (
        <figure>
          <Image
            src={car.imageUrl.trim()}
            alt={car.make}
            className="h-60"
            width="500"
            height="500"
            loading="lazy"
          />
        </figure>
      ) : (
        <figure className="relative">
          <Image
            src={car.imageUrl.trim()}
            alt={car.make}
            className="h-60 opacity-20"
            width="500"
            height="500"
          />
          <figcaption className="absolute justify-center items-center text-white font-bold text-2xl px-2 py-1">
            This car is currently unavailable
          </figcaption>
        </figure>
      )}

      <div className="card-body justify-items-start">
        <div>
          <h2 className="card-title sm:text-sm md:text-md lg:text-lg xl:text-3xl font-bold">
            {car.make} ({car.model})
          </h2>
        </div>

        <div>
          <h2 className="text-[#60a5fa] font-bold text-2xl justify-center">
            ₱{Number(car.pricePerDay)}/day
          </h2>
        </div>

        <div className="mb-4">
          <p className="text-gray-500">{car.description}</p>
        </div>

        <div className="justify-start flex gap-2">
          <Link href={`/vehicles/${encodeURIComponent(car.model)}`}>
            {car.status === "AVAILABLE" ? (
              <button className="btn bg-[#1d4ed8]">View Car</button>
            ) : (
              <button className="btn bg-gray-500" disabled>
                Unavailable
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
