"use client";
import { fetchBooking } from "../services/fetchBooking";
import { useEffect, useState } from "react";

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
  const [bookings, setBookings] = useState<Booking[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBooking();
        setBookings(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { bookings, loading, error };
};

export default useFetchBooking;
