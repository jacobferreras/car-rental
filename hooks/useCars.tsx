"use client";
import { fetchCars } from "@/services/fetchCars";
import { useQuery } from "@tanstack/react-query";

interface Car {
  type: string;
  transmission: string;
  limit: number;
  page: number;
  search: string;
}

const useCars = ({ type, transmission, limit, page, search }: Car) => {
  return useQuery({
    queryKey: ["cars", type, transmission, limit, page, search],
    queryFn: () => fetchCars({ transmission, page, limit, search, type }),
    staleTime: 1000 * 60,
    placeholderData: (previousData) => previousData,
  });
};

export default useCars;
