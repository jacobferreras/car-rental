"use client";
import { useState } from "react";
import { bookCar } from "@/services/bookCar";

const useBooking = () => {
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
    carName: string,
    startDate: string,
    endDate: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      await bookCar(
        carId,
        carName,
        formData.firstName,
        formData.lastName,
        new Date(formData.startDate),
        new Date(formData.endDate)
      );
    } catch (error) {
      setError(error as any);
    } finally {
      setLoading(false);
    }
  };

  return { formData, loading, error, handleBookCar, handleChange };
};

export default useBooking;
