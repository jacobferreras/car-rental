import React, { use } from "react";
import { fetchCarModel } from "@/services/fetchCarModel";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  seats: number;
  transmission: string;
  imageUrl: string;
  status: string;
  pricePerDay: number;
  fuelType: string;
  createdAt: string;
  updatedAt: string;
  description?: string;
}

const useCarModel = () => {
  const { model } = useParams();
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    const getCarModel = async () => {
      try {
        const data = await fetchCarModel(model as string);
        setCar(data);
      } catch (error) {
        console.error("Failed to fetch car model:", error);
      }
    };

    if (model) {
      getCarModel();
    }
  }, [model]);
  return { car, setCar };
};

export default useCarModel;
