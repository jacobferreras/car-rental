import Image from "next/image";
import EditCarDetailsButton from "../ui/vehicles/EditCarDetailsButton";
import { Decimal } from "@prisma/client/runtime/library";
import Link from "next/link";
import Skeleton from "./Skeleton";
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
  onEdit?: (car: Car) => void;
  car: Car;
}

const CarCard = ({ car, onEdit }: CarCardProps) => {
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
          <EditCarDetailsButton onClick={() => onEdit && onEdit(car)} />
          <Link href={`/vehicles/${encodeURIComponent(car.model)}`}>
            {car.status === "AVAILABLE" ? (
              <button className="btn bg-[#1d4ed8]">Rent Now</button>
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
