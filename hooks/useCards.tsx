"use client";
import { useState, useEffect, use } from "react";
import { fetchCars } from "@/services/fetchCars";

const useCards = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    getCars();
  }, []);

  return { cars };
};

export default useCards;
