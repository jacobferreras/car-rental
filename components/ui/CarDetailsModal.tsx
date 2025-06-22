"use client";
import { Decimal } from "@prisma/client/runtime/library";
import { useState, useEffect } from "react";
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

type FormState = {
  make: string;
  model: string;
  year: string;
  transmission: string;
  imageUrl: string;
  fuelType: string;
  seats: string;
  pricePerDay: string;
  status: string;
};

const getInitialFormState = (car?: CarDetailsModalProps["car"]): FormState => ({
  make: car?.make || "",
  model: car?.model || "",
  year: car?.year?.toString() || "",
  transmission: car?.transmission || "",
  imageUrl: car?.imageUrl || "",
  fuelType: car?.fuelType || "",
  seats: car?.seats?.toString() || "",
  pricePerDay: car?.pricePerDay?.toString() || "",
  status: car?.status || "",
});

const CarDetailsModal = ({
  open,
  onClose,
  car,
  onSuccess,
}: CarDetailsModalProps) => {
  const [form, setForm] = useState<FormState>(getInitialFormState(car));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  // Sync form state with car prop when modal opens or car changes
  useEffect(() => {
    if (open) {
      setForm(getInitialFormState(car));
      setError(null);
      setTouched(false);
    }
  }, [open, car]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setTouched(true);
  };

  const validate = () => {
    if (
      !form.make ||
      !form.model ||
      !form.year ||
      !form.transmission ||
      !form.fuelType ||
      !form.seats ||
      !form.pricePerDay ||
      !form.status
    ) {
      return "All fields are required.";
    }
    if (isNaN(Number(form.year)) || Number(form.year) < 1900) {
      return "Year must be a valid number.";
    }
    if (isNaN(Number(form.seats)) || Number(form.seats) < 1) {
      return "Seats must be a valid number.";
    }
    if (isNaN(Number(form.pricePerDay)) || Number(form.pricePerDay) < 0) {
      return "Price per day must be a valid number.";
    }
    return null;
  };

  const isFormChanged = () => {
    const initial = getInitialFormState(car);
    return Object.keys(form).some(
      (key) => (form as any)[key] !== (initial as any)[key]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    if (!car?.id) {
      setError("Car ID is required for updating.");
      return;
    }

    if (!isFormChanged()) {
      setError("No changes detected.");
      return;
    }

    setLoading(true);
    try {
      await updateCar(car.id, form);
      setLoading(false);
      if (onSuccess) onSuccess();
      onClose();
    } catch (err: any) {
      setError(err.message || "An error occurred while updating the car.");
      setLoading(false);
    }
  };

  if (!open) return null;
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
              placeholder="Make"
              className="input rounded-md font-normal w-80 bg-neutral-700 text-white"
            />
            <input
              name="model"
              value={form.model}
              onChange={handleChange}
              type="text"
              placeholder="Model"
              className="input rounded-md font-normal w-80 bg-neutral-700 text-white"
            />
            <input
              name="year"
              value={form.year}
              onChange={handleChange}
              type="number"
              min={1900}
              placeholder="Year"
              className="input rounded-md font-normal w-80 bg-neutral-700 text-white"
            />
            <input
              name="seats"
              value={form.seats}
              onChange={handleChange}
              type="number"
              min={1}
              placeholder="Seats"
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
            <input
              name="status"
              value={form.status}
              onChange={handleChange}
              type="text"
              placeholder="Status"
              className="input rounded-md font-normal w-80 bg-neutral-700 text-white"
            />
            <input
              name="pricePerDay"
              value={form.pricePerDay}
              onChange={handleChange}
              type="number"
              min={0}
              placeholder="Price Per Day"
              className="input rounded-md font-normal w-80 bg-neutral-700 text-white"
            />
            <input
              name="fuelType"
              value={form.fuelType}
              onChange={handleChange}
              type="text"
              placeholder="Fuel Type"
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
                disabled={loading || !isFormChanged()}
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
