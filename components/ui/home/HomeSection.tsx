"use client";
import ServiceBenifits from "@/components/ui/home/ServiceBenifits";
import CustomerTestimony from "@/components/ui/home/CustomerTestimony";
import Image from "next/image";
import useCards from "@/hooks/useCards";
import Car from "@/components/ui/home/HomeCarCard";
import Link from "next/link";
import Home from "@/app/page";
import HomeBookingCard from "./HomeBookingCard";

const HomeSection = () => {
  const { cars } = useCards({
    type: "",
    transmission: "",
    limit: 8,
    page: 1,
  });

  return (
    <div>
      <div className="hero min-h-screen relative hero-overlay bg-overlay-opacity-60 ">
        <Image
          src="/HomeBg.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-[#0b0e13] opacity-70 z-0"></div>
        <div className="flex flex-col justify-center items-center absolute z-20">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl text-center text-white font-family-mono font-bold z-20">
            DRIVE YOUR JOURNEY
          </h1>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center text-white font-family-mono font-bold z-20">
            WITH INSTADRIVE
          </h2>
          <div className="flex justify-center items-center mt-4 px-4">
            <HomeBookingCard />
          </div>
        </div>
      </div>

      <div className="py-24 bg-[#111827]">
        <div className="flex flex-col justify-center items-center px-2 mb-4">
          <h1 className="text-2xl lg:text-5xl text-white font-family-mono font-bold mb-4">
            Our Vehicles
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <Car cars={cars} />
        </div>

        <div className="flex justify-center items-centers py-12">
          <Link href="/vehicles">
            <button className="btn bg-[#1d4ed8] rounded-xl">
              View All Vehicles <i className="bi bi-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-[#1f2937] py-24">
        <div className="flex justify-center items-center text-2xl lg:text-5xl font-family-mono font-bold  text-white pl-4 pt-12">
          Why Choose InstaDrive?
        </div>
        <ServiceBenifits />
      </div>

      {/* <div className="flex flex-col justify-center items-center px-2 py-24 bg-[url('/Inside.png')] bg-cover bg-no-repeat bg-center rounded-2xl">
        <div className="text-2xl lg:text-5xl font-family-mono font-bold mb-4 md:mb-8 text-white pl-4">
          Simple Steps to Book Your Car
        </div>
        <div>
          <Steps />
        </div>
      </div> */}

      <div className="justify-center items-center py-24 bg-[#111827]">
        <CustomerTestimony />
      </div>

      <div>
        <div className="flex flex-col justify-center items-center px-2 py-24 bg-[#1d2735]">
          <div className="text-2xl lg:text-5xl font-family-mono font-bold mb-4 text-white pl-4">
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

export default HomeSection;
