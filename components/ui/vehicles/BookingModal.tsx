import React from "react";
import useBooking from "@/hooks/useBooking";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { BookingData } from "@/Types/bookingData";

const user = useKindeAuth();

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  carData: {
    model: string;
    make: string;
    id: number;
  };
  onBookingSuccess?: () => void;
  setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
}

const BookingModal = ({
  open,
  onClose,
  carData,
  onBookingSuccess,
  setBookingData,
}: BookingModalProps) => {
  const { formData, loading, error, handleBookCar, handleChange } =
    useBooking(onBookingSuccess);

  return (
    <div className={`modal ${open ? "modal-open" : ""}`}>
      <div className="modal-box bg-[#1c2634] max-w-md w-auto md:w-full p-8 rounded-lg shadow-lg mx-4">
        <h3 className="font-bold text-3xl mb-6 text-center text-white">
          Book A Ride
        </h3>
        <form
          className="grid grid-cols-1 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleBookCar(
              carData.id,
              carData.make,
              carData.model,
              formData.startDate,
              formData.endDate
            ),
              setBookingData({
                email: user.user?.email ?? "",
                firstName: formData.firstName,
                lastName: formData.lastName,
                carModel: carData.model,
                carMake: carData.make,
                startDate: formData.startDate,
                endDate: formData.endDate,
              });
          }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Car Model
            </label>
            <input
              name="make"
              value={`${carData.make} ${carData.model}`}
              type="text"
              placeholder="Car Model"
              required
              className="input w-full rounded-md bg-neutral-700 text-white border border-gray-600"
              readOnly
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                First Name
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                placeholder="First Name"
                required
                className="input w-full rounded-md bg-neutral-700 text-white border border-gray-600"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Last Name
              </label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                required
                className="input w-full rounded-md bg-neutral-700 text-white border border-gray-600"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Start Date
              </label>
              <input
                name="startDate"
                type="date"
                className="input w-full rounded-md bg-neutral-700 text-white border border-gray-600"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                End Date
              </label>
              <input
                name="endDate"
                type="date"
                className="input w-full rounded-md bg-neutral-700 text-white border border-gray-600"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="btn bg-gray-600 text-white rounded-md px-6"
              onClick={onClose}
              disabled={loading}
            >
              Close
            </button>
            <button
              type="submit"
              className="btn bg-[#1d4ed8] text-white rounded-md px-6"
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
