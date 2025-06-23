import React from "react";
import { useAddCar } from "@/hooks/useAddCar";

interface AddCarModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const AddCarModal = (props: AddCarModalProps) => {
  const { form, handleChange, handleSubmit, loading, error } = useAddCar(() => {
    props.onClose();
    if (props.onSuccess) props.onSuccess();
  });

  if (!props.open) return null;

  return (
    <div className={`modal ${props.open ? "modal-open" : ""}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Please put the car details</h3>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input
            name="make"
            value={form.make}
            onChange={handleChange}
            type="text"
            placeholder="Company"
            required
            className="input rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
          />
          <input
            name="model"
            value={form.model}
            onChange={handleChange}
            type="text"
            placeholder="Model"
            required
            className="input rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
          />
          <input
            name="year"
            value={form.year}
            onChange={handleChange}
            type="number"
            placeholder="Year"
            required
            className="input rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
          />
          <select
            name="seats"
            value={form.seats}
            onChange={handleChange}
            required
            className="select rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
          >
            <option value="" className="text-white">
              All Seats
            </option>
            <option value="2">2 Seater</option>
            <option value="4">4 Seater</option>
            <option value="5">5 Seater</option>
            <option value="7">7 Seater</option>
          </select>
          <select
            name="transmission"
            value={form.transmission}
            onChange={handleChange}
            required
            className="select rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
          >
            <option value="" className="text-white">
              Select Transmission
            </option>
            <option value="manual">Manual</option>
            <option value="automatic">Automatic</option>
          </select>
          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            type="text"
            placeholder="ImageUrl"
            required
            className="input rounded-m font-normal mr-5 w-80 bg-neutral-700 text-white"
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
            value={form.pricePerDay}
            onChange={handleChange}
            type="number"
            placeholder="Price"
            required
            className="input rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
          />
          <input
            name="fuelType"
            value={form.fuelType}
            onChange={handleChange}
            type="text"
            placeholder="Fuel Type"
            required
            className="input rounded-md font-normal mr-5 w-80 bg-neutral-700 text-white"
          />
          {error && <div className="text-red-500">{error}</div>}
          <div className="modal-action">
            <button
              type="button"
              className="btn"
              onClick={props.onClose}
              disabled={loading}
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Car"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCarModal;
