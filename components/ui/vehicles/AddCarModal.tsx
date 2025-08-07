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
      <div className="modal-box bg-[#1c2634]">
        <h3 className="font-bold text-lg">Please put the car details</h3>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input
            name="make"
            value={form.make}
            onChange={handleChange}
            type="text"
            placeholder="Company"
            required
            className="input rounded-md font-normal mr-5 w-auto bg-neutral-700 text-white"
          />

          <input
            name="model"
            value={form.model}
            onChange={handleChange}
            type="text"
            placeholder="Model"
            required
            className="input rounded-md font-normal mr-5 w-auto bg-neutral-700 text-white"
          />

          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            type="text"
            placeholder="Description"
            required
            className="input rounded-md font-normal mr-5 w-auto bg-neutral-700 text-white"
          />

          <input
            name="year"
            value={form.year}
            onChange={handleChange}
            type="number"
            placeholder="Year"
            required
            className="input rounded-md font-normal mr-5 w-auto bg-neutral-700 text-white"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            required
            className="select rounded-md font-normal mr-5 w-auto bg-neutral-700 text-white"
          >
            <option value="" className="text-white">
              Type
            </option>
            <option value="SEDAN">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="HATCHBACK">Hatchback</option>
            <option value="COUPE">Coupe</option>
            <option value="CONVERTIBLE">Convertible</option>
            <option value="PICKUP">Pickup</option>
            <option value="VAN">Van</option>
          </select>

          <select
            name="transmission"
            value={form.transmission}
            onChange={handleChange}
            required
            className="select rounded-md font-normal mr-5 w-auto bg-neutral-700 text-white"
          >
            <option value="" className="text-white">
              Select Transmission
            </option>
            <option value="MANUAL">Manual</option>
            <option value="AUTOMATIC">Automatic</option>
          </select>

          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            type="text"
            placeholder="ImageUrl"
            required
            className="input rounded-m font-normal mr-5 w-auto bg-neutral-700 text-white"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            required
            className="select rounded-md font-normal mr-5 w-auto bg-neutral-700 text-white"
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
            className="input rounded-md font-normal mr-5 w-auto bg-neutral-700 text-white"
          />

          <select
            name="fuelType"
            value={form.fuelType}
            onChange={handleChange}
            required
            className="select rounded-md font-normal mr-5 w-auto bg-neutral-700 text-white"
          >
            <option value="" className="text-white">
              Select Fuel Type
            </option>
            <option value="PETROL">Petrol</option>
            <option value="DIESEL">Diesel</option>
            <option value="ELECTRIC">Electric</option>
            <option value="HYBRID">Hybrid</option>
          </select>

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
              className="btn bg-[#1d4ed8]"
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
