import React from "react";
import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";

const VehicleDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#030712]">
      <div className="pt-24 pb-12">
        <div className="rounded-xl mx-4 sm:mx-8 md:mx-12 bg-[#1f2937]">
          <h1 className="pl-4 sm:pl-6 pt-4 text-xl sm:text-2xl font-bold">
            <span>
              <Link href="/vehicles">
                <FaArrowCircleLeft className="mr-2" />
              </Link>
            </span>
            Vehicle Details
          </h1>
          <div className="h-px w-full bg-gray-600 my-4" />
          <div className="flex flex-col md:flex-row pb-8 gap-4 md:gap-8 animate-pulse">
            {/* Car Image Skeleton */}
            <figure className="px-4 pt-6 md:pt-10 w-full md:w-1/2 lg:w-2/5">
              <div className="skeleton rounded-xl w-full h-64 sm:h-80 md:h-96"></div>
            </figure>

            {/* Car Details Skeleton */}
            <div className="card-body items-start px-4 md:px-0 w-full md:w-1/2 lg:w-3/5">
              <div className="pt-2 mb-2 w-full">
                {/* Car Title Skeleton */}
                <div className="skeleton h-8 sm:h-10 w-3/4 mb-2 rounded"></div>

                {/* Price Skeleton */}
                <div className="skeleton h-6 sm:h-8 w-40 mb-2 rounded"></div>

                {/* Description Title Skeleton */}
                <div className="skeleton h-6 sm:h-8 w-40 mb-2 rounded"></div>

                {/* Description Paragraphs Skeleton */}
                <div className="skeleton h-4 sm:h-5 w-full mb-2 rounded"></div>
                <div className="skeleton h-4 sm:h-5 w-full mb-2 rounded"></div>
                <div className="skeleton h-4 sm:h-5 w-5/6 mb-2 rounded"></div>
              </div>

              <div className="mb-4 w-full">
                {/* Specifications Title Skeleton */}
                <div className="skeleton h-6 sm:h-8 w-48 mb-2 rounded"></div>

                {/* Specifications List Skeleton */}
                <div className="skeleton h-4 sm:h-5 w-40 mb-2 rounded"></div>
                <div className="skeleton h-4 sm:h-5 w-56 mb-2 rounded"></div>
                <div className="skeleton h-4 sm:h-5 w-48 mb-2 rounded"></div>
                <div className="skeleton h-4 sm:h-5 w-32 mb-2 rounded"></div>
              </div>

              {/* Button Skeleton */}
              <div className="skeleton h-10 w-32 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsSkeleton;
