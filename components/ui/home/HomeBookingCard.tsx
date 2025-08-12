import DateInput from "@/components/common/DateInput";
import React from "react";

const HomeBookingCard = () => {
  return (
    <div className="card card-border bg-[#090b0f] bg-opacity-50 w-70 sm:w-150 lg:w-200 ">
      <div className="card-body">
        <h1 className="card-title justify-center text-[#5897e4] sm:text-2xl md:text-3xl">
          Find Your Perfect Car
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <h2 className="text-[#5897e4] lg:text-xl">Pick-up Date</h2>
            <DateInput />
          </div>
          <div>
            <h2 className="text-[#5897e4] lg:text-xl">Drop-off Date</h2>
            <DateInput />
          </div>

          <div className="sm:pt-7">
            <button className="btn bg-[#1d4ed8]">Medium</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBookingCard;
