"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { testimonials } from "@/lib/constant";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import StarRating from "./StarRating";

const CustomerTestimony = () => {
  return (
    <div className="container mx-auto px-2 md:px-4 lg:px-8 xl:px-32 ">
      <div className="text-2xl lg:text-5xl font-family-mono font-bold mb-4 md:mb-8 text-center">
        WHAT OUR CUSTOMERS SAY
      </div>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="h-[400px]"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="flex justify-center items-center h-full"
          >
            <div className="card w-auto max-w-md bg-[#1c2634] card-md shadow-sm">
              <div className="card-body">
                <h2 className="card-title justify-center items-center text-center">
                  "{testimonial.quote}"
                </h2>
                <StarRating rating={testimonial.rating} />
                <figure className="px-10">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-16 h-16 object-cover"
                    loading="lazy"
                    width={250}
                    height={250}
                  />
                </figure>
                <p className="justify-center items-center text-center text-xl font-family-mono font-bold">
                  {testimonial.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerTestimony;
