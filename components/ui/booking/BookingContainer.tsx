"use client";
import useFetchBooking from "@/hooks/useFetchBooking";
import BookingCard from "./BookingCard";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";

const BookingContainer = () => {
  const { bookings, loading, error } = useFetchBooking();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching bookings</div>;

  console.log("Bookings:", bookings);

  return (
    <>
      <div className="min-h-screen bg-[#111827] px-12 flex justify-center items-center">
        <div className="px-2 py-24">
          <div className="card w-auto bg-[#1a202c] card-xl shadow-sm">
            <div className="card-body gap-4">
              <Link href="/" className="flex flex-row gap-2 cursor-pointer">
                <FaArrowAltCircleLeft className="text-3xl text-white mb-4 hover:text-blue-500 cursor-pointer text-start" />
                <h2>Go back</h2>
              </Link>
              <h1 className="text-center text-4xl font-bold text-white mb-8">
                My Bookings
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {bookings && bookings.length > 0 ? (
                  bookings.map((booking) => (
                    <BookingCard
                      key={booking.id}
                      carMake={booking.carMake}
                      carModel={booking.carModel}
                      startDate={booking.startDate}
                      endDate={booking.endDate}
                      firstName={booking.firstName}
                      lastName={booking.lastName}
                      status={booking.status}
                      email={booking.email}
                    />
                  ))
                ) : (
                  <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-center items-center text-white h-32">
                    No bookings found
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingContainer;
