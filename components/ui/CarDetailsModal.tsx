import React from "react";
import { Decimal } from "@prisma/client/runtime/library";

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
  } | null;
}

const CarDetailsModal = ({ open, onClose, car }: CarDetailsModalProps) => {
  if (!open) return null;
  return (
    <div className={`modal ${open ? "modal-open" : ""}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Car Details</h3>
        {car ? (
          <div>
            <p>Make: {car.make}</p>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <p>Transmission: {car.transmission}</p>
            <p>Fuel Type: {car.fuelType}</p>
            <p>Seats: {car.seats}</p>
            <p>Price/Day: ₱{Number(car.pricePerDay)}</p>
          </div>
        ) : (
          <p>No car selected.</p>
        )}
        <button type="button" className="btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CarDetailsModal;
