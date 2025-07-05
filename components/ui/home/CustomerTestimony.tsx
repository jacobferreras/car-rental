import React from "react";

const CustomerTestimony = () => {
  return (
    <div className="carousel w-full delay-100 autoplay">
      <div
        id="slide1"
        className="carousel-item w-full flex justify-center items-center flex-col gap-4"
      >
        <div className="flex flex-col justify-center items-center pt-12">
          <div className="card w-auto bg-base-100 card-xl shadow-sm">
            <div className="card-body">
              <p className="text-center text-md sm:text-xl sm:max-w-xl max-w-xs md:text-2xl md:max-w-2xl lg:text-4xl lg:max-w-4xl mb-8">
                "I had an amazing experience with InstaDrive! The booking
                process was seamless, and the car was in excellent condition.
                Highly recommend!"
              </p>

              <p className="text-center text-md sm:text-xl sm:max-w-xl max-w-xs md:text-xl md:max-w-xl lg:text-3xl lg:max-w-3xl">
                - John Cena
              </p>
            </div>
          </div>
        </div>

        <div className="items-center gap-8 flex justify-center">
          <div>
            <a
              href="#slide3"
              className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              ❮
            </a>
          </div>

          <div>
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
        className="carousel-item w-full flex justify-center items-center flex-col gap-4"
      >
        <div className="flex flex-col justify-center items-center pt-12">
          <div className="card w-auto bg-base-100 card-xl shadow-sm">
            <div className="card-body">
              <p className="text-center text-md sm:text-xl sm:max-w-xl max-w-xs md:text-2xl md:max-w-2xl lg:text-4xl lg:max-w-4xl mb-8">
                "I had an amazing experience with InstaDrive! The booking
                process was seamless, and the car was in excellent condition.
                Highly recommend!"
              </p>

              <p className="text-center text-md sm:text-xl sm:max-w-xl max-w-xs md:text-xl md:max-w-xl lg:text-3xl lg:max-w-3xl">
                - John Cena
              </p>
            </div>
          </div>
        </div>

        <div className="items-center gap-8 flex justify-center">
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
        className="carousel-item w-full flex justify-center items-center flex-col gap-4"
      >
        <div className="flex flex-col justify-center items-center pt-12">
          <div className="card w-auto bg-base-100 card-xl shadow-sm">
            <div className="card-body">
              <p className="text-center text-md sm:text-xl sm:max-w-xl max-w-xs md:text-2xl md:max-w-2xl lg:text-4xl lg:max-w-4xl mb-8">
                "I had an amazing experience with InstaDrive! The booking
                process was seamless, and the car was in excellent condition.
                Highly recommend!"
              </p>

              <p className="text-center text-md sm:text-xl sm:max-w-xl max-w-xs md:text-xl md:max-w-xl lg:text-3xl lg:max-w-3xl">
                - John Cena
              </p>
            </div>
          </div>
        </div>

        <div className="items-center gap-8 flex justify-center">
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
