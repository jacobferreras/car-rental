import Image from "next/image";
import Link from "next/link";
import { Car } from "@/Types/car";

interface CarCardProps {
  cars: Car[];
}

const HomeCarCard = ({ cars }: CarCardProps) => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mb-4">
        {cars.length === 0 ? (
          <div className="col-span-4 text-center min-h-150 flex items-center justify-center">
            <p className="text-gray-500">No cars available</p>
          </div>
        ) : (
          cars.map((car: Car) => (
            <div
              key={car.id}
              className="card bg-[#1c2634] w-auto lg:w-80 xl:w-106 shadow-sm"
            >
              <figure>
                <Image
                  src={car.imageUrl.trim()}
                  alt={car.make}
                  className="h-60 w-full"
                  width={1000}
                  height={1000}
                  loading="lazy"
                />
              </figure>

              <div className="card-body justify-center">
                <h2 className="card-title sm:text-sm md:text-md lg:text-lg xl:text-xl font-bold">
                  {car.make} ({car.model})
                </h2>

                <h2 className="text-[#60a5fa] font-bold text-2xl justify-center">
                  ₱{Number(car.pricePerDay)}/day
                </h2>

                <p className="text-white">{car.description}</p>

                <div className="card-actions">
                  <Link href={`/vehicles/${encodeURIComponent(car.model)}`}>
                    <button className="btn bg-[#1d4ed8] w-60 rounded-lg">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomeCarCard;
