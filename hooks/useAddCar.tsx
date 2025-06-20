"use client";
import { useState } from "react";
import { addNewCar } from "../services/addNewCar";

export const useAddCar = (onSuccess?: () => void) => {
  const [form, setForm] = useState({
    make: "",
    model: "",
    year: "",
    seats: "",
    transmission: "",
    imageUrl: "",
    status: "",
    pricePerDay: "",
    fuelType: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await addNewCar(form);
      if (onSuccess) onSuccess();
      setForm({
        make: "",
        model: "",
        year: "",
        seats: "",
        transmission: "",
        imageUrl: "",
        status: "",
        pricePerDay: "",
        fuelType: "",
      });
    } catch (err: any) {
      setError(err.message || "An error occurred while adding the car.");
    } finally {
      setLoading(false);
    }
  };

  return { form, handleChange, handleSubmit, loading, error };
};
