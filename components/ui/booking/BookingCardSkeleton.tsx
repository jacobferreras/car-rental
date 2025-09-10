import React from "react";

const BookingCardSkeleton = () => {
  return (
    <div className="card w-96 bg-[#1f2937] card-md shadow-sm animate-pulse">
      <div className="card-body text-white">
        <div className="h-6 bg-gray-700 rounded w-2/3 mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-1/3"></div>
      </div>
    </div>
  );
};

export default BookingCardSkeleton;
