import React from "react";

const CustomerTestimony = () => {
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item relative w-full flex justify-center items-center"
      >
        <p className="text-center text-base sm:text-xl max-w-xs sm:max-w-xl mx-4 mb-8">
          "I had an amazing experience with InstaDrive! The booking process was
          seamless, and the car was in excellent condition. Highly recommend!"
        </p>

        <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
          <div>
            <a href="#slide3" className="btn btn-circle btn-xs">
              ❮
            </a>
          </div>

          <div className="pl-">
            <a href="#slide2" className="btn btn-circle btn-xs ">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full flex justify-center items-center"
      >
        <p className="text-center text-base sm:text-lg max-w-xs sm:max-w-xl mb-8">
          "I had an amazing experience with InstaDrive! The booking process was
          seamless, and the car was in excellent condition. Highly recommend!"
        </p>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle btn-xs">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-xs">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full flex justify-center items-center"
      >
        <p className="text-center text-base sm:text-lg max-w-xs sm:max-w-xl  mb-8">
          "I had an amazing experience with InstaDrive! The booking process was
          seamless, and the car was in excellent condition. Highly recommend!"
        </p>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle btn-xs">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-xs">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimony;
