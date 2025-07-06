import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CustomerTestimony = () => {
  return (
    <div className="container mx-auto px-2 md:px-4 lg:px-8 xl:px-32">
      <div className="text-2xl lg:text-5xl font-family-mono font-bold mb-4 md:mb-8 text-center">
        What our customers say
      </div>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide className="flex justify-center items-center h-full ">
          <div className="card w-auto bg-base-100 card-md shadow-sm mb-12">
            <div className="card-body">
              <h2 className="card-title justify-center items-center text-center">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </h2>
              <p className="justify-center items-center text-center">
                - John Doe
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center h-full">
          <div className="card w-auto bg-base-100 card-md shadow-sm mb-12">
            <div className="card-body">
              <h2 className="card-title justify-center items-center text-center">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </h2>
              <p className="justify-center items-center text-center">
                - John Doe
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center h-full">
          <div className="card w-auto bg-base-100 card-md shadow-sm mb-12">
            <div className="card-body">
              <h2 className="card-title justify-center items-center text-center">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </h2>
              <p className="justify-center items-center text-center">
                - John Doe
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center h-full">
          <div className="card w-auto bg-base-100 card-md shadow-sm mb-12">
            <div className="card-body">
              <h2 className="card-title justify-center items-center text-center">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </h2>
              <p className="justify-center items-center text-center">
                - John Doe
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomerTestimony;
