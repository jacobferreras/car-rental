"use client";
import Dropdown from "@/components/ui/vehicles/DropdownSeats";
import DropdownTransmission from "@/components/ui/vehicles/DropdownTransmission";
import CarCards from "../../../components/common/CarCard";
import useCards from "@/hooks/useCards";
import { useState } from "react";
import Pagination from "@/components/ui/vehicles/Pagination";
import useDebounce from "@/hooks/useDebounce";
import { AddCarButton } from "@/components/ui/vehicles/AddCarButton";
import AddCarModal from "@/components/ui/vehicles/AddCarModal";
import CarDetailsModal from "@/components/ui/CarDetailsModal";
import { Car } from "../../../app/generated/prisma";
import Image from "next/image";

const VehicleSection = () => {
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
    <>
      <div className="hero min-h-100 md:min-h-150 relative">
        <Image
          src="/Fleet.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-[#0b0e13] opacity-70 z-0"></div>
        <div className="flex flex-col justify-center items-center absolute z-20">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-center text-white font-bold font-family-mono">
            ABOUT INSTADRIVE
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-center text-white font-bold font-family-mono">
            WITH INSTADRIVE
          </h2>
        </div>
      </div>

      <div className="flex flex-col bg-[#111827]">
        <div className="flex flex-col sm:flex-row xl:flex-row justify-center items-center xl:justify-end xl:items-end xl:gap-0 mb-8 gap-4 pt-12 xl:ml-auto xl:pr-6 xl:mt-24 md:px-4">
          <div className="mr-4">
            <AddCarButton onClick={() => setOpenModal(true)} />
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

        <div className="flex flex-col justify-center items-center mb-4">
          <CarCards
            cars={cars}
            onEdit={(car) => {
              setSelectedCar(car);
              setOpenCarDetailsModal(true);
            }}
          />
        </div>

        <AddCarModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onSuccess={() => {
            setRefresh((r) => r + 1);
            setCurrentPage(1);
          }}
        />

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
    </>
  );
};

export default VehicleSection;
