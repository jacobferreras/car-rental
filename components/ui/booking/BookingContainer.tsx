"use client";
import useFetchBooking from "@/hooks/useFetchBooking";
import BookingCard from "./BookingCard";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";
import BookingCardSkeleton from "./BookingCardSkeleton";

const BookingContainer = () => {
  const { bookings, loading } = useFetchBooking();

  return (
    <>
      <div className="min-h-screen bg-[#111827] px-12 flex justify-center items-center">
        <div className="px-2 py-24">
          <div className="card w-auto bg-[#1a202c] card-xl shadow-sm px-4 md:px-12 py-4 md:py-12">
            <Link href="/" className="flex flex-row gap-2 cursor-pointer pt-4">
              <FaArrowAltCircleLeft className="text-3xl text-white mb-4 hover:text-blue-500 cursor-pointer text-start" />
              <h2>Go back</h2>
            </Link>
            <h1 className="text-center text-5xl font-bold text-white mb-8">
              MY BOOKINGS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {loading ? (
                Array.from({ length: 8 }).map((_, idx) => (
                  <BookingCardSkeleton key={idx} />
                ))
              ) : bookings && bookings.length > 0 ? (
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
    </>
  );
};

export default BookingContainer;
