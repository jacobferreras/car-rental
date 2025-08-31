"use client";
import { useState } from "react";
import { bookCar } from "@/services/bookCar";

const useBooking = (onBookingSuccess?: () => void) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBookCar = async (
    carId: number,
    carMake: string,
    carModel: string,
    startDate: string,
    endDate: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      await bookCar(
        carId,
        carMake,
        carModel,
        formData.firstName,
        formData.lastName,
        new Date(formData.startDate),
        new Date(formData.endDate)
      );
      if (onBookingSuccess) onBookingSuccess();
    } catch (error) {
      setError(error as any);
    } finally {
      setLoading(false);
    }
  };

  return { formData, loading, error, handleBookCar, handleChange };
};

export default useBooking;
