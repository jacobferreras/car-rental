import React from "react";

const CustomerTestimony = () => {
  return (
    <div className="carousel w-full delay-100 autoplay">
      <div
        id="slide1"
        className="carousel-item relative w-full flex justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center pt-12">
          <p className="text-center text-md sm:text-xl sm:max-w-xl max-w-xs md:text-2xl md:max-w-2xl lg:text-4xl lg:max-w-4xl  mb-8">
            "I had an amazing experience with InstaDrive! The booking process
            was seamless, and the car was in excellent condition. Highly
            recommend!"
          </p>

          <p className="text-center text-md sm:text-xl sm:max-w-xl max-w-xs amd:text-xl md:max-w-xl lg:text-3xl lg:max-w-3xl">
            - John Cena
          </p>
        </div>

        <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between xl:left-24 xl:right-24">
          <div>
            <a
              href="#slide3"
              className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              ❮
            </a>
          </div>

          <div className="pl-">
            <a
              href="#slide2"
              className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              ❯
            </a>
          </div>
        </div>
      </div>

      <div
        id="slide2"
        className="carousel-item relative w-full flex justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center pt-12">
          <p className="text-center text-md sm:text-xl sm:max-w-xl max-w-xs md:text-2xl md:max-w-2xl lg:text-4xl lg:max-w-4xl  mb-8">
            "I had an amazing experience with InstaDrive! The booking process
            was seamless, and the car was in excellent condition. Highly
            recommend!"
          </p>

          <p className="text-center text-md sm:text-xl sm:max-w-xl max-w-xs amd:text-xl md:max-w-xl lg:text-3xl lg:max-w-3xl">
            - John Cena
          </p>
        </div>

        <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between xl:left-24 xl:right-24">
          <a
            href="#slide1"
            className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          >
            ❯
          </a>
        </div>
      </div>

      <div
        id="slide3"
        className="carousel-item relative w-full flex justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center pt-12">
          <p className="text-center text-md sm:text-xl sm:max-w-xl max-w-xs md:text-2xl md:max-w-2xl lg:text-4xl lg:max-w-4xl mb-8">
            "I had an amazing experience with InstaDrive! The booking process
            was seamless, and the car was in excellent condition. Highly
            recommend!"
          </p>

          <p className="text-center text-md sm:text-xl sm:max-w-xl max-w-xs amd:text-xl md:max-w-xl lg:text-3xl lg:max-w-3xl">
            - John Cena
          </p>
        </div>

        <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between xl:left-24 xl:right-24">
          <a
            href="#slide2"
            className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimony;
