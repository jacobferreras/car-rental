import React from "react";

const ServiceBenifits = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-4 lg:px-12 text-center gap-4 lg:gap-8 py-12">
      <div className="card bg-base-100 w-auto md:h-70 xl:h-90 lg:w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <i className="bi bi-clock text-red-500 text-xl md:text-3xl xl:text-5xl"></i>
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="font-family-mono text-md md:text-lg xl:text-xl font-bold">
            Availability
          </h1>
          <p className="font-family-sans text-xs md:text-md xl:text-lg text-justify ">
            InstaDrive offers a wide selection of vehicles ready to rent
            anytime, with real-time booking and flexible pick-up options.
            Whether it’s a last-minute trip or a planned vacation, we’re here
            24/7.
          </p>
        </div>
      </div>

      <div className="card bg-base-100 w-auto md:h-70 xl:h-90 lg:w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <i className="bi bi-car-front-fill text-xl text-red-500 md:text-3xl xl:text-5xl"></i>
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="font-family-mono text-md md:text-lg xl:text-xl font-bold">
            Comfort
          </h1>
          <p className="font-family-sans text-xs md:text-md xl:text-lg text-justify ">
            Our fleet is well-maintained, clean, and equipped with modern
            features to ensure your driving experience is relaxing and
            enjoyable—no matter the distance.
          </p>
        </div>
      </div>

      <div className="card bg-base-100 w-auto md:h-70 xl:h-90 lg:w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <i className="bi bi-currency-dollar text-xl text-red-500 md:text-3xl  xl:text-5xl"></i>
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="font-family-mono text-md md:text-lg xl:text-xl font-bold">
            Savings
          </h1>
          <p className="font-family-sans text-xs md:text-md xl:text-lg text-justify ">
            Enjoy transparent pricing, zero hidden fees, and exclusive deals. We
            make renting a car budget-friendly, so you get more mileage for your
            money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBenifits;
