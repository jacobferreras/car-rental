import Image from "next/image";
import EditCarDetailsButton from "../ui/vehicles/EditCarDetailsButton";
import { Decimal } from "@prisma/client/runtime/library";
import {
  CarStatus,
  CarType,
  FuelType,
  Transmission,
} from "../../app/generated/prisma";
import { useRouter } from "next/navigation";

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
  color: string;
  mileage: number;
  engine: string;
  horsepower: number;
  frontImage: string;
  backImage: string;
  interiorImage: string;
  rearImage: string;
}

interface CarCardProps {
  cars: Car[];
  onEdit?: (car: Car) => void;
}

const CarCard = ({ cars, onEdit }: CarCardProps) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-4 mb-4">
      {cars.length === 0 ? (
        <div className="col-span-4 text-center min-h-150 flex items-center justify-center">
          <p className="text-gray-500">No cars available</p>
        </div>
      ) : (
        cars.map((car: Car) => (
          <div
            key={car.id}
            className="card bg-[#1c2634] shadow-md shadow-blue-500/50 hover:shadow-xl"
          >
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
                <button
                  className="btn bg-[#1d4ed8]"
                  onClick={() =>
                    router.push(`/vehicles/${encodeURIComponent(car.model)}`)
                  }
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CarCard;
