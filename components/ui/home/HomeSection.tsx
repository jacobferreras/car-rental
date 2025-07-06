"use client";
import ServiceBenifits from "@/components/ui/home/ServiceBenifits";
import CustomerTestimony from "@/components/ui/home/CustomerTestimony";
import Steps from "@/components/ui/home/Steps";
import Image from "next/image";
import useCards from "@/hooks/useCards";
import Car from "@/components/ui/home/HomeCarCard";

const HomeSection = () => {
  const { cars } = useCards({
    seats: 0,
    transmission: "",
    limit: 6,
    page: 1,
  });

  return (
    <div>
      <div className="hero min-h-screen relative hero-overlay bg-overlay-opacity-60 mb-12">
        <Image
          src="/Car.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="flex flex-col justify-center items-center absolute">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-center text-white font-family-mono font-bold z-20">
            DRIVE YOUR JOURNEY
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-center text-white font-family-mono font-bold z-20">
            WITH INSTADRIVE
          </h2>
          <div className="flex justify-center items-center mt-4">
            <button className="btn bg-red-600 text-white z-20">Book Now</button>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex justify-center items-center text-2xl lg:text-5xl font-family-mono font-bold  text-white pl-4 pt-12">
          Why Choose InstaDrive?
        </div>
        <ServiceBenifits />
      </div>

      <div className="mb-12">
        <div className="flex flex-col justify-center items-center px-2 mb-4">
          <h1 className="text-2xl lg:text-5xl text-white font-family-mono font-bold mb-4">
            Our Vehicles
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <Car cars={cars} />
        </div>

        <div className="flex justify-center items-center my-8 mb-12">
          <button className="btn bg-base-100 rounded-xl">
            View All Vehicles <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center px-2 py-24 bg-[url('/Inside.png')] bg-cover bg-no-repeat bg-center mb-12">
        <div className="text-2xl lg:text-5xl font-family-mono font-bold mb-4 md:mb-8 text-white pl-4">
          Simple Steps to Book Your Car
        </div>
        <div>
          <Steps />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <CustomerTestimony />
      </div>

      <div>
        <div className="flex flex-col justify-center items-center px-2 py-12 bg-red-600">
          <div className="text-2xl lg:text-5xl font-family-mono font-bold mb-4 text-white pl-4">
            Ready to Experience Seamless Travel?
          </div>
          <div className="text-md lg:text-xl font-family-sans text-white text-center mb-8 px-4">
            Browse our extensive fleet and find the perfect car for your next
            adventure.
          </div>
          <div className="flex justify-center items-center">
            <button className="btn bg-base-100 rounded-xl">
              Book Your Ride Now <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
