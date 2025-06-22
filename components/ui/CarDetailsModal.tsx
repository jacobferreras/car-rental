"use client";
import { Decimal } from "@prisma/client/runtime/library";
import { useState } from "react";

interface CarDetailsModalProps {
  open: boolean;
  onClose: () => void;
  car?: {
    make: string;
    model: string;
    year: number;
    transmission: string;
    fuelType: string;
    seats: number;
    pricePerDay: Decimal;
    status: string;
  } | null;
}

const CarDetailsModal = ({ open, onClose, car }: CarDetailsModalProps) => {
  const [initialValues, setInitalValues] = useState({
    make: car?.make || "",
    model: car?.model || "",
    year: car?.year.toString() || "",
    transmission: car?.transmission || "",
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

  if (!open) return null;
  return (
    <div className={`modal ${open ? "modal-open" : ""}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Car Details</h3>
        {car ? (
          <div className="mb-4">
            <input
              name="make"
              value={initialValues.make}
              onChange={handleChange}
              type="text"
              placeholder={initialValues.make}
              required
              className="input rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
            />
            <input
              name="make"
              type="text"
              placeholder={car.model}
              required
              className="input rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
            />
            <input
              name="make"
              type="text"
              placeholder={car.year.toString()}
              required
              className="input rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
            />
          </div>
        ) : (
          <p>No car selected.</p>
        )}
        <button type="button" className="btn btn-primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CarDetailsModal;
