import Image from "next/image";
import EditCarDetailsButton from "../ui/EditCarDetailsButton";
import { Decimal } from "@prisma/client/runtime/library";
import { CarStatus } from "../../app/generated/prisma";
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
  transmission: string;
  fuelType: string;
  seats: number;
  createdAt: Date;
  updatedAt: Date;
}

interface CarCardProps {
  cars: Car[];
  onEdit?: (car: Car) => void;
}

const CarCard = ({ cars, onEdit }: CarCardProps) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-4 px-4 mb-4">
      {cars.length === 0 ? (
        <div className="col-span-4 text-center min-h-150 flex items-center justify-center">
          <p className="text-gray-500">No cars available</p>
        </div>
      ) : (
        cars.map((car: Car) => (
          <div
            key={car.id}
            className="card bg-base-100  shadow-md shadow-red-500/50 hover:shadow-xl"
          >
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
              <h2 className="card-title">
                {car.make} ({car.model})
                <div className="badge bg-red-600">
                  ₱{Number(car.pricePerDay)}/day
                </div>
              </h2>

              <div className="card-actions justify-start">
                <div className="badge badge-outline">{car.year}</div>
                <div className="badge badge-outline">{car.transmission}</div>
                <div className="badge badge-outline">{car.fuelType}</div>
                <div className="badge badge-outline">{car.seats} Seater</div>
              </div>

              <div className="card-actions justify-end">
                <EditCarDetailsButton onClick={() => onEdit && onEdit(car)} />
                <button
                  className="btn bg-base-300"
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
