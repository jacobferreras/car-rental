"use client";
import Dropdown from "@/components/common/Dropdown";
import CarCards from "../../components/common/CarCard";
import useCards from "@/hooks/useCards";
import { useState } from "react";
import Pagination from "@/components/common/Pagination";

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [transmission, setTransmission] = useState("");
  const [seats, setSeats] = useState(0);
  const { cars, totalpages } = useCards({
    seats,
    transmission: transmission,
    limit: 8,
    page: currentPage,
  });

  //

  return (
    <div className="flex flex-col min-h-screen pt-12">
      <div className="flex flex-col sm:flex-row xl:flex-row justify-center items-center xl:justify-end xl:items-end xl:gap-0 mb-8 gap-4 pt-12 xl:ml-auto xl:pr-4 xl:mt-24">
        <Dropdown
          value={seats.toString()}
          onChange={(e) => {
            setSeats(Number(e.target.value));
            setCurrentPage(1);
          }}
        />

        <label className="input w-auto">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
      </div>

      <CarCards cars={cars} />

      <div className="flex justify-center items-center mt-8 mb-4">
        <Pagination />
      </div>
    </div>
  );
};

export default page;
