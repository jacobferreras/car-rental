"use client";
import Dropdown from "@/components/common/DropdownSeats";
import DropdownTransmission from "@/components/common/DropdownTransmission";
import CarCards from "../../components/common/CarCard";
import useCards from "@/hooks/useCards";
import { useState } from "react";
import Pagination from "@/components/common/Pagination";
import useDebounce from "@/hooks/useDebounce";
import { AddCarButton } from "@/components/common/AddCarButton";
// import AddCarModal from "@/components/common/AddCarModal";
import CarDetailsModal from "@/components/ui/CarDetailsModal";
import { Car } from "../generated/prisma";

const page = () => {
  const [refresh, setRefresh] = useState(0);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [openCarDetailsModal, setOpenCarDetailsModal] = useState(false);
  const [transmission, setTransmission] = useState("");
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 400);
  const [seats, setSeats] = useState(0);
  const { cars, totalpages } = useCards({
    seats,
    transmission,
    limit: 8,
    page: currentPage,
    search: debounceSearch,
    refresh,
  });

  return (
    <div className="flex flex-col min-h-screen pt-12">
      <div className="flex flex-col sm:flex-row xl:flex-row justify-center items-center xl:justify-end xl:items-end xl:gap-0 mb-8 gap-4 pt-12 xl:ml-auto xl:pr-4 xl:mt-24">
        <div className="mr-4">
          <AddCarButton />
        </div>
        <Dropdown
          value={seats.toString()}
          onChange={(e) => {
            setSeats(Number(e.target.value));
            setCurrentPage(1);
          }}
        />

        <DropdownTransmission
          value={transmission}
          onChange={(e) => {
            setTransmission(e.target.value);
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
          <input
            type="search"
            className="grow"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
      </div>

      <CarCards
        cars={cars}
        onEdit={(car) => {
          setSelectedCar(car);
          setOpenCarDetailsModal(true);
        }}
      />

      {/* <AddCarModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSuccess={() => {
          setRefresh((r) => r + 1);
          setCurrentPage(1);
        }}
      /> */}

      <CarDetailsModal
        open={openCarDetailsModal}
        onClose={() => {
          setSelectedCar(null);
          setOpenCarDetailsModal(false);
        }}
        car={selectedCar}
        onSuccess={() => {
          setRefresh((r) => r + 1);
          setOpenCarDetailsModal(false);
        }}
      />

      <div className="flex justify-center items-center mt-8 mb-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalpages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default page;
