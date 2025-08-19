"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    quote:
      "Amazing service! The car was clean and the booking process was seamless. Highly recommend!",
    name: "Sarah Johnson",
    rating: 5,
    image: "/Fleet.jpg",
  },
  {
    id: 2,
    quote:
      "Great experience! Professional staff and competitive prices. Will definitely use again.",
    name: "Mike Davis",
    rating: 5,
    image: "/Fleet.jpg",
  },
  {
    id: 3,
    quote:
      "Excellent customer support and reliable vehicles. Top notch service from start to finish.",
    name: "Emily Chen",
    rating: 5,
    image: "/Fleet.jpg",
  },
  {
    id: 4,
    quote:
      "Quick and easy rental process. The car was in perfect condition and saved my trip!",
    name: "John Rodriguez",
    rating: 5,
    image: "/Fleet.jpg",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex justify-center items-center py-4">
      {[...Array(rating)].map((_, index) => (
        <svg
          key={index}
          className="w-6 h-6 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const CustomerTestimony = () => {
  return (
    <div className="container mx-auto px-2 md:px-4 lg:px-8 xl:px-32 ">
      <div className="text-2xl lg:text-5xl font-family-mono font-bold mb-4 md:mb-8 text-center">
        What our customers say
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
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-16 h-16 object-cover"
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
