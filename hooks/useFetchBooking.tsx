"use client";
import { fetchBooking } from "../services/fetchBooking";
import { useQuery } from "@tanstack/react-query";

interface Booking {
  id: number;
  email: string;
  carMake: string;
  carModel: string;
  startDate: Date;
  endDate: Date;
  firstName: string;
  lastName: string;
  status: string;
}

const useFetchBooking = () => {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: fetchBooking,
    staleTime: 1000 * 60,
    placeholderData: (previousData) => previousData,
  });
};

export default useFetchBooking;
