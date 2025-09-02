import ServiceCard from "./ServiceCard";

const ServiceBenifits = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center gap-4 lg:gap-8 mt-4 px-4">
      <ServiceCard
        title="Availability"
        description="InstaDrive offers a wide selection of vehicles ready to rent anytime, with real-time booking and flexible pick-up options. Whether it’s a last-minute trip or a planned vacation, we’re here 24/7."
        icon="bi bi-clock"
      />

      <ServiceCard
        title="Comfort"
        description="Our fleet is well-maintained, clean, and equipped with modern
            features to ensure your driving experience is relaxing and
            enjoyable—no matter the distance."
        icon="bi-car-front-fill"
      />

      <ServiceCard
        title="Savings"
        description="Enjoy transparent pricing, zero hidden fees, and exclusive deals. We
            make renting a car budget-friendly, so you get more mileage for your
            money."
        icon="bi bi-currency-dollar"
      />
    </div>
  );
};

export default ServiceBenifits;
