"use client";
import { useState, useEffect } from "react";
import { fetchCars } from "@/services/fetchCars";

interface Car {
  type?: string;
  transmission?: string;
  limit?: number;
  page?: number;
  search?: string;
  refresh?: number;
}

const useCards = (props: Car) => {
  const [cars, setCars] = useState([]);
  const [totalpages, setTotalPages] = useState(0);

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchCars(props);
        setCars(data.cars || []);
        setTotalPages(data.totalpages || 1);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
      }
    };

    getCars();
  }, [
    props.transmission,
    props.type,
    props.limit,
    props.page,
    props.search,
    props.refresh,
  ]);

  return { cars, totalpages };
};

export default useCards;
