"use client";
import ServiceBenifits from "@/components/ui/home/ServiceBenifits";
import CustomerTestimony from "@/components/ui/home/CustomerTestimony";
import Image from "next/image";
import useCards from "@/hooks/useCards";
import Car from "@/components/ui/home/Car";

export default function Home() {
  const { cars } = useCards({
    seats: 0,
    transmission: "",
    limit: 8,
    page: 1,
  });
  return (
    <div>
      <div className="hero min-h-screen py-24 xl:py-32">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center font-family-mono font-bold">
            DRIVE YOUR JOURNEY
            <br />
            WITH INSTADRIVE
          </h1>
          <div className="flex justify-center items-center mb-8">
            <button className="btn bg-red-600 text-white">Book Now</button>
          </div>

          <div className="mb-8">
            <Image
              src="/InstaDriveMobile.png"
              alt="InstaDrive Mobile"
              width={1000}
              height={500}
            />
          </div>

          <ServiceBenifits />
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-center items-center px-2 mb-4">
          <h1 className="text-2xl lg:text-5xl font-family-mono font-bold mb-4">
            Our Vehicles
          </h1>
        </div>

        <div>
          <Car cars={cars} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center px-2 mb-4 py-24">
        <div className="text-2xl lg:text-5xl font-family-mono font-bold mb-4 md:mb-8">
          What our customers say
        </div>
        <div>
          <CustomerTestimony />
        </div>
      </div>
    </div>
  );
}
