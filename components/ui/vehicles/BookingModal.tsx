import React from "react";
import useBooking from "@/hooks/useBooking";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  carData: {
    model: string;
    make: string;
    id: number;
  };
}

const BookingModal = ({ open, onClose, carData }: BookingModalProps) => {
  const { formData, loading, error, handleBookCar, handleChange } =
    useBooking();

  return (
    <div className={`modal ${open ? "modal-open" : ""}`}>
      <div className="modal-box bg-[#1c2634]">
        <h3 className="font-bold text-3xl mb-4">Book A Ride</h3>
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleBookCar(
              carData.id,
              carData.make,
              carData.model,
              formData.startDate,
              formData.endDate
            );
          }}
        >
          <input
            name="make"
            value={`${carData.make} ${carData.model}`}
            type="text"
            placeholder="Car Model"
            required
            className="input rounded-md font-normal mr-5 w-auto bg-neutral-700 text-white"
            readOnly
          />

          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            required
            className="input rounded-md font-normal mr-5 w-auto bg-neutral-700 text-white"
          />

          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
            required
            className="input rounded-md font-normal mr-5 w-auto bg-neutral-700 text-white"
          />

          <div className="flex flex-row">
            <div>
              <label className="font-normal text-white mr-5 mt-2">Dates:</label>
              <input
                name="startDate"
                type="date"
                className="input rounded-md font-normal mr-5 w-50 bg-neutral-700 text-white"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="font-normal text-white mr-5 mt-2">To:</label>
              <input
                name="endDate"
                type="date"
                className="input rounded-md font-normal mr-5 w-50 bg-neutral-700 text-white"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {error && <div className="text-red-500">{error}</div>}
          <div className="modal-action justify-start">
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
              className="btn bg-[#1d4ed8]"
              disabled={loading}
            >
              {loading ? "Booking..." : "Book Car"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
