"use client";
import Dropdown from "@/components/ui/vehicles/DropdownSeats";
import DropdownTransmission from "@/components/ui/vehicles/DropdownTransmission";
import CarCards from "../../common/CarCard";
import useCards from "@/hooks/useCards";
import Pagination from "@/components/ui/vehicles/Pagination";
import { Car } from "../../../app/generated/prisma";
import Hero from "../../common/Hero";
import Skeleton from "../../common/Skeleton";

const VehicleScreen = () => {
  const {
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
  } = useCards();

  return (
    <>
      <Hero
        title="OUR FLEET"
        description="EXPLORE OUR DIVERSE RANGE OF VEHICLES, METICULOUSLY CURATED TO MEET YOUR EVERY NEED."
        ImageSrc="/Another.webp"
      />
      <div className="flex flex-col bg-[#111827]">
        <div className="flex flex-col sm:flex-row xl:flex-row justify-center items-center xl:justify-end xl:items-end xl:gap-0 mb-8 gap-4 pt-12 xl:ml-auto xl:pr-6 xl:mt-24 md:px-4">
          <Dropdown
            value={type}
            onChange={(e) => {
              setType(e.target.value);
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

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-4 mb-4">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} />
              ))
            : cars.map((car: Car) => <CarCards key={car.id} car={car} />)}
        </div>

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

export default VehicleScreen;
