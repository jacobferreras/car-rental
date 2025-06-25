"use client";
import { Decimal } from "@prisma/client/runtime/library";
import { useState, useEffect, use } from "react";
import { updateCar } from "@/services/updateCar";
import { Car } from "@/app/generated/prisma";

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
    imageUrl: string | null;
    fuelType: string;
    seats: number;
    pricePerDay: number | Decimal;
    status: string;
  } | null;
}

const CarDetailsModal = ({
  open,
  onClose,
  car,
  onSuccess,
}: CarDetailsModalProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    carId: car?.id || "",
    make: car?.make || "",
    model: car?.model || "",
    year: car?.year || 2023,
    seats: car?.seats || 4,
    transmission: car?.transmission || "Automatic",
    status: car?.status || "AVAILABLE",
    pricePerDay: car?.pricePerDay || 0,
    fuelType: car?.fuelType || "Petrol",
  });

  useEffect(() => {
    if (car) {
      setForm({
        carId: car.id,
        make: car.make,
        model: car.model,
        year: car.year,
        seats: car.seats,
        transmission: car.transmission,
        status: car.status,
        pricePerDay: car.pricePerDay,
        fuelType: car.fuelType,
      });
    }
  }, [car]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setError(null);
    setLoading(true);

    try {
      await updateCar(form.carId, {
        make: form.make,
        model: form.model,
        year: Number(form.year),
        seats: Number(form.seats),
        transmission: form.transmission,
        status: form.status,
        pricePerDay: Number(form.pricePerDay),
        fuelType: form.fuelType,
        imageUrl: car?.imageUrl || "",
      });

      setLoading(false);
      if (onSuccess) onSuccess();
      onClose();
    } catch (error) {
      setLoading(false);
      setError("Failed to update car details. Please try again.");
    }
  };
  console.log(form.make);

  return (
    <div className={`modal ${open ? "modal-open" : ""}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Edit Car Details</h3>
        {car ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
            <input
              name="make"
              value={form.make}
              onChange={handleChange}
              type="text"
              className="input rounded-md font-normal w-80 bg-neutral-700 text-white"
            />
            <input
              name="model"
              value={form.model}
              onChange={handleChange}
              type="text"
              className="input rounded-md font-normal w-80 bg-neutral-700 text-white"
            />
            <input
              name="year"
              value={form.year}
              onChange={handleChange}
              type="number"
              min={1900}
              className="input rounded-md font-normal w-80 bg-neutral-700 text-white"
            />
            <input
              name="seats"
              value={form.seats}
              onChange={handleChange}
              type="number"
              min={1}
              className="input rounded-md font-normal w-80 bg-neutral-700 text-white"
            />
            <input
              name="transmission"
              value={form.transmission}
              onChange={handleChange}
              type="text"
              placeholder="Transmission"
              className="input rounded-md font-normal w-80 bg-neutral-700 text-white"
            />
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              required
              className="select rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
            >
              <option value="" className="text-white">
                Select Status
              </option>
              <option value="AVAILABLE">Available</option>
              <option value="RENTED">Rented</option>
              <option value="UNAVAILABLE">Unavailable</option>
              <option value="MAINTENANCE">Maintenance</option>
            </select>
            <input
              name="pricePerDay"
              value={form.pricePerDay.toString()}
              onChange={handleChange}
              type="number"
              min={0}
              className="input rounded-md font-normal w-80 bg-neutral-700 text-white"
            />
            <input
              name="fuelType"
              value={form.fuelType}
              onChange={handleChange}
              type="text"
              className="input rounded-md font-normal w-80 bg-neutral-700 text-white"
            />
            <div className="flex flex-row gap-2 mt-2">
              <button
                type="button"
                className="btn"
                onClick={onClose}
                disabled={loading}
              >
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
