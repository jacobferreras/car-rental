import DateInput from "@/components/common/DateInput";
import React from "react";

const HomeBookingCard = () => {
  return (
    <div className="card card-border bg-[#090b0f] bg-opacity-50 w-96">
      <div className="card-body">
        <h1 className="card-title justify-center text-[#5897e4]">
          Find Your Perfect Car
        </h1>
        <div className="flex flex-row gap-4">
          <div>
            <h2 className="text-[#5897e4]">Pick-up Date</h2>
            <DateInput />
          </div>
          <div>
            <h2 className="text-[#5897e4]">Drop-off Date</h2>
            <DateInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBookingCard;
