"use client";
import { useState, useEffect } from "react";
import { fetchCars } from "@/services/fetchCars";
import useDebounce from "./useDebounce";

const useCards = () => {
  const limit = 8;
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 400);
  const [cars, setCars] = useState([]);
  const [type, setType] = useState("");
  const [totalpages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [transmission, setTransmission] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchCars({
          transmission,
          page: currentPage,
          limit: limit,
          search: debounceSearch,
          type,
        });
        setCars(data.cars || []);
        setTotalPages(data.totalpages || 1);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    getCars();
  }, [transmission, currentPage, type, currentPage, debounceSearch]);

  return {
    cars,
    totalpages,
    loading,
    transmission,
    setTransmission,
    currentPage,
    setCurrentPage,
    type,
    setType,
    search,
    setSearch,
  };
};

export default useCards;
