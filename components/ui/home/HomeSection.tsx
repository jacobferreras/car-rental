"use client";
import ServiceBenifits from "@/components/ui/home/ServiceBenifits";
import CustomerTestimony from "@/components/ui/home/CustomerTestimony";
import Steps from "@/components/ui/home/Steps";
import Image from "next/image";
import useCards from "@/hooks/useCards";
import Car from "@/components/ui/home/Car";

const HomeSection = () => {
  const { cars } = useCards({
    seats: 0,
    transmission: "",
    limit: 8,
    page: 1,
  });
  return (
    <div>
      <div className="hero min-h-150 sm:min-h-screen bg-gray-950 pt-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-center text-white font-family-mono font-bold">
            DRIVE YOUR JOURNEY
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-center text-white font-family-mono font-bold">
            WITH INSTADRIVE
          </h2>
          <div className="flex justify-center items-center mt-4">
            <button className="btn bg-red-600 text-white">Book Now</button>
          </div>

          <div>
            <Image
              src="/InstaDrive.png"
              alt="InstaDrive Mobile"
              width={1000}
              height={500}
              className="w-auto h-full lg:w-400"
            />
          </div>
        </div>
      </div>

      <div className="mb-12">
        <ServiceBenifits />
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

      <div className="flex flex-col justify-center items-center px-2 py-24 bg-[url('/home_bg.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-50">
        <div className="text-2xl lg:text-5xl font-family-mono font-bold mb-4 md:mb-8 text-red-600">
          Simple Steps to Book Your Car
        </div>
        <div>
          <Steps />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
