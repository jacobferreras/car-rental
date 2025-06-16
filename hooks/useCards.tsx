"use client";
import { useState, useEffect, use } from "react";
import { fetchCars } from "@/services/fetchCars";

interface Car {
  seats?: number;
  transmission?: string;
  limit?: number;
  page?: number;
}

const useCards = (props: Car) => {
  const [cars, setCars] = useState([]);
  const [totalpages, setTotalPages] = useState(0);

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchCars(props);
        setCars(data);
        setTotalPages(data.page);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
      }
    };

    getCars();
  }, [props.transmission, props.seats, props.limit, props.page]);

  return { cars, totalpages };
};

export default useCards;
