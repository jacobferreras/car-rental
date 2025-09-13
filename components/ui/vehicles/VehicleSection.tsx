"use client";
import Dropdown from "@/components/ui/vehicles/DropdownSeats";
import DropdownTransmission from "@/components/ui/vehicles/DropdownTransmission";
import Skeleton from "../../common/Skeleton";
import SearchInput from "./SearchInput";
import Pagination from "@/components/ui/vehicles/Pagination";
import { Car } from "../../../app/generated/prisma";
import CarCards from "../../common/CarCard";
import useCars from "@/hooks/useCars";
import { useState } from "react";

const VehicleSection = () => {
  const [type, setType] = useState("");
  const [transmission, setTransmission] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isLoading, error } = useCars({
    transmission,
    page: currentPage,
    limit: 8,
    search,
    type,
  });

  return (
    <div className="flex flex-col bg-[#111827]">
      <div className="flex flex-col  md:flex-row md:justify-center md:items-center xl:justify-end xl:items-end xl:gap-0 mb-8 gap-4 pt-12 xl:ml-auto xl:pr-6 xl:mt-24 md:px-4">
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
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : data?.cars?.map((car: Car) => <CarCards key={car.id} car={car} />)}

        {data.cars?.length === 0 ? (
          <p className="text-center justify-center items-center flex col-span-4">
            No cars found
          </p>
        ) : null}
      </div>

      <div className="flex justify-center items-center mt-8 mb-4">
        <Pagination
          currentPage={currentPage}
          totalPages={data?.totalpages || 0}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default VehicleSection;
