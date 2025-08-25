import React from "react";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center px-2 py-24 bg-[#1d2735]">
          <div className="text-2xl lg:text-5xl font-family-mono font-bold mb-4 text-white pl-4 text-center">
            Ready to Experience Seamless Travel?
          </div>
          <div className="text-md lg:text-xl font-family-sans text-white text-center mb-8 px-4">
            Browse our extensive fleet and find the perfect car for your next
            adventure.
          </div>
          <div className="flex justify-center items-center">
            <Link href="/vehicles">
              <button className="btn bg-[#1d4ed8] rounded-xl">
                Book Your Ride Now <i className="bi bi-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
