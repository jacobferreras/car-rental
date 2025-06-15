import CarCard from "@/components/common/CarCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-base-300">
      <div className="hero min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center font-family-mono font-bold">
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

          <div className="flex flex-col md:flex-row justify-center items-center px-2 text-center gap-2">
            <div className="flex flex-col">
              <i className="bi bi-geo-alt-fill text-xl"></i>
              <h1 className="font-family-mono text-md font-bold">
                Availability
              </h1>
              <p className="font-family-sans text-xs text-justify">
                InstaDrive offers a wide selection of vehicles ready to rent
                anytime, with real-time booking and flexible pick-up options.
                Whether it’s a last-minute trip or a planned vacation, we’re
                here 24/7.
              </p>
            </div>

            <div className="flex flex-col">
              <i className="bi bi-car-front-fill text-xl"></i>
              <h1 className="font-family-mono text-md font-bold">Comfort</h1>
              <p className="font-family-sans text-xs text-justify">
                Our fleet is well-maintained, clean, and equipped with modern
                features to ensure your driving experience is relaxing and
                enjoyable—no matter the distance.
              </p>
            </div>

            <div className="flex flex-col">
              <i className="bi bi-wallet-fill text-xl"></i>
              <h1 className="font-family-mono text-md font-bold">Savings</h1>
              <p className="font-family-sans text-xs text-justify">
                Enjoy transparent pricing, zero hidden fees, and exclusive
                deals. We make renting a car budget-friendly, so you get more
                mileage for your money.
              </p>
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
