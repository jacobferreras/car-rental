import React from "react";
import Image from "next/image";
import MissionAndVisionCard from "./MissionAndVisionCard";
import OurteamCard from "./OurteamCard";
import CoreValueCard from "./CoreValueCard";

const AboutSection = () => {
  return (
    <>
      <div className="hero min-h-100 md:min-h-150 relative mb-12">
        <Image
          src="/About.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="flex flex-col justify-center items-center absolute z-20">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-center text-white font-bold font-family-mono">
            ABOUT INSTADRIVE
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-center text-white font-bold font-family-mono">
            WITH INSTADRIVE
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-10 mb-8 px-4 md:gap-x-12 gap-x-24">
        <div>
          <h1 className="mb-4 text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold font-family-mono">
            Our Journey
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl md:w-100 font-family-sans">
            Founded in 2025, InstaDrive was born from a passion for premium
            automobiles and a commitment to unparalleled customer service. We
            noticed a gap in the market for a car rental experience that truly
            combined luxury, convenience, and transparency. From humble
            beginnings with a small fleet, we've grown into a trusted name,
            serving countless customers who demand nothing but the best.
          </p>
        </div>
        <div>
          <figure className="md:pt-4 lg:pt-6">
            <Image
              src="/Journey.png"
              alt="About Us"
              width={800}
              height={600}
              className="rounded-xl mt-8 md:h-70 lg:h-96"
            />
          </figure>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-10 px-4 gap-8 bg-[url('/Mission.png')] bg-cover bg-no-repeat bg-center">
        <MissionAndVisionCard
          title="Our Mission"
          description="To redefine the car rental experience by providing a seamless, transparent, and customer-centric service that exceeds expectations at every turn. We aim to empower our customers with the freedom to drive their dreams, backed by a commitment to quality and innovation."
          iconClass="bi bi-bullseye"
        />
        <MissionAndVisionCard
          title="Our Vision"
          description="To be the leading car rental service known for our exceptional quality, innovative solutions, and unwavering commitment to customer satisfaction. We envision a future where every journey is effortless, enjoyable, and tailored to the unique needs of our customers, setting new standards in the industry."
          iconClass="bi bi-eye-fill"
        />
      </div>

      <div className="flex flex-col items-center justify-center py-24 px-4 mb-12">
        <h1 className="mb-8 text-xl md:text-2xl lg:text-5xl font-bold font-family-mono">
          Meet Our Team
        </h1>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-x-10 w-full">
            <OurteamCard
              imageUrl="/CEO.jpg"
              name="John Doe"
              position="CEO & Founder"
              description="John is the visionary behind InstaDrive, dedicated to providing a premium car rental experience that combines luxury and convenience. His leadership ensures that every customer receives exceptional service and quality."
            />
            <OurteamCard
              imageUrl="/Head.jpg"
              name="Jane Smith"
              position="Chief Operating Officer"
              description="Jane is dedicated to ensuring that every aspect of our operations runs smoothly, from fleet management to customer service, making sure that our clients have the best experience possible."
            />
            <OurteamCard
              imageUrl="/Customer.jpg"
              name="Alice Johnson"
              position="Head of Marketing"
              description="Alice is passionate about creating innovative marketing strategies that connect with our customers and enhance their experience with InstaDrive."
            />
            <OurteamCard
              imageUrl="/Fleet.jpg"
              name="Bob Brown"
              position="Customer Support Manager"
              description="Bob leads our customer support team, ensuring that every inquiry is handled with care and professionalism, making sure our customers feel valued and supported."
            />
          </div>
        </div>
      </div>

      <div className="bg-[url('/Corevalues.png')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="flex flex-col justify-center items-center relative pt-12 z-10">
          <h1 className="text-2xl lg:text-5xl font-family-mono font-bold mb-4 text-center absolute z-20">
            Our Core Values
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center py-10 px-4 gap-8 relative z-10">
          <CoreValueCard
            title="Integrity"
            description="We believe in honesty and transparency in all our dealings. Our customers can trust that we will always provide clear information about our services, pricing, and policies."
            iconClass="bi bi-shield-check"
          />
          <CoreValueCard
            title="Innovation"
            description="We are committed to continuously improving our services and adopting the latest technologies to enhance the customer experience. Our goal is to make car rental as seamless and efficient as possible."
            iconClass="bi bi-lightbulb"
          />
          <CoreValueCard
            title="Excellence"
            description="We strive for excellence in everything we do, from the quality of our vehicles to the level of service we provide. Our team is dedicated to ensuring that every customer has a memorable and enjoyable experience."
            iconClass="bi bi-gem"
          />
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-center items-center px-2 py-12 bg-red-600">
          <div className="text-2xl lg:text-5xl font-family-mono font-bold mb-4 text-white pl-4">
            Ready to Experience Seamless Travel?
          </div>
          <div className="text-md lg:text-xl font-family-sans text-white text-center mb-8 px-4">
            Browse our extensive fleet and find the perfect car for your next
            adventure.
          </div>
          <div className="flex justify-center items-center">
            <button className="btn bg-base-100 rounded-xl">
              Book Your Ride Now <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
