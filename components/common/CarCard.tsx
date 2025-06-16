import Image from "next/image";

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

interface CarCardProps {
  cars: Car[];
}

const CarCard = ({ cars }: CarCardProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-4 px-4 mb-4">
      {cars.length === 0 ? (
        <div className="col-span-4 text-center min-h-150 flex items-center justify-center">
          <p className="text-gray-500">No cars available</p>
        </div>
      ) : (
        cars.map((car: Car) => (
          <div key={car.id} className="card bg-base-100 w-auto shadow-sm">
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
        ))
      )}
    </div>
  );
};

export default CarCard;
