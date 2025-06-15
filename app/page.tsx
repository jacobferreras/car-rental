import CarCard from "@/components/common/CarCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-base-300">
      <div className="hero min-h-150 lg:min-h-screen">
        <div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl text-center font-family-mono font-bold">
              DRIVE YOUR JOURNEY
              <br />
              WITH INSTADRIVE
            </h1>
            <p className="font-family-sans text-md">FAST. FLEXIBLE. RELIABLE</p>
            <div className="flex justify-center items-center">
              <button className="btn bg-red-600 text-white">Book Now</button>
            </div>

            <div>
              <Image
                src="/InstaDriveMobile.png"
                alt="InstaDrive Mobile"
                width={1000}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center px-2 mb-4 gap-4">
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </div>
  );
}
