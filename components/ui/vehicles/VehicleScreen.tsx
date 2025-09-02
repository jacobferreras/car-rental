"use client";
import Dropdown from "@/components/ui/vehicles/DropdownSeats";
import DropdownTransmission from "@/components/ui/vehicles/DropdownTransmission";
import CarCards from "../../common/CarCard";
import useCards from "@/hooks/useCards";
import Pagination from "@/components/ui/vehicles/Pagination";
import { Car } from "../../../app/generated/prisma";
import Hero from "../../common/Hero";
import Skeleton from "../../common/Skeleton";
import SearchInput from "./SearchInput";

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
        <div className="flex flex-col  md:flex-row items-center xl:justify-end xl:items-end xl:gap-0 mb-8 gap-4 pt-12 xl:ml-auto xl:pr-6 xl:mt-24 md:px-4">
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

          <SearchInput
            search={search}
            setSearch={setSearch}
            setCurrentPage={setCurrentPage}
          />
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
