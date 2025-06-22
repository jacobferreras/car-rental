"use client";
import { Decimal } from "@prisma/client/runtime/library";
import { useState } from "react";
import { updateCar } from "@/services/updateCar";

interface CarDetailsModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  car?: {
    id: string | number;
    make: string;
    model: string;
    year: number;
    transmission: string;
    imageUrl?: string;
    fuelType: string;
    seats: number;
    pricePerDay: Decimal;
    status: string;
  };
}

const CarDetailsModal = ({
  open,
  onClose,
  car,
  onSuccess,
}: CarDetailsModalProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [initialValues, setInitalValues] = useState({
    make: car?.make || "",
    model: car?.model || "",
    year: car?.year.toString() || "",
    transmission: car?.transmission || "",
    imageUrl: car?.imageUrl || "",
    fuelType: car?.fuelType || "",
    seats: car?.seats.toString() || "",
    pricePerDay: car?.pricePerDay.toString() || "",
    status: car?.status || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setInitalValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (!car?.id) {
        throw new Error("Car ID is required for updating.");
      }
      await updateCar(car?.id, initialValues);
      if (onSuccess) onSuccess();
      setInitalValues({
        make: "",
        model: "",
        year: "",
        seats: "",
        transmission: "",
        imageUrl: "",
        status: "",
        pricePerDay: "",
        fuelType: "",
      });
    } catch (err: any) {
      setError(err.message || "An error occurred while adding the car.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;
  return (
    <div className={`modal ${open ? "modal-open" : ""}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Car Details</h3>

        {car ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
            <input
              name="make"
              value={initialValues.make}
              onChange={handleChange}
              type="text"
              placeholder={car.make}
              required
              className="input rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
            />
            <input
              name="model"
              value={initialValues.model}
              onChange={handleChange}
              type="text"
              placeholder={car.model}
              required
              className="input rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
            />
            <input
              name="year"
              value={initialValues.year}
              onChange={handleChange}
              type="text"
              placeholder={car.year.toString()}
              required
              className="input rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
            />
            <input
              name="seats"
              value={initialValues.seats}
              onChange={handleChange}
              type="text"
              placeholder={car.seats.toString()}
              required
              className="input rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
            />
            <input
              name="transmission"
              value={initialValues.transmission}
              onChange={handleChange}
              type="text"
              placeholder={car.transmission}
              required
              className="input rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
            />
            <input
              name="status"
              value={initialValues.status}
              onChange={handleChange}
              type="text"
              placeholder={car.status}
              required
              className="input rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
            />
            <input
              name="pricePerDay"
              value={initialValues.pricePerDay}
              onChange={handleChange}
              type="text"
              placeholder={car.pricePerDay.toString()}
              required
              className="input rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
            />
            <input
              name="fuelType"
              value={initialValues.fuelType}
              onChange={handleChange}
              type="text"
              placeholder={car.fuelType}
              required
              className="input rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
            />

            <div className="flex flex-row gap-2 mt-2">
              <button type="button" className="btn" onClick={onClose}>
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update"}
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        ) : (
          <p>No car selected.</p>
        )}
      </div>
    </div>
  );
};

export default CarDetailsModal;
