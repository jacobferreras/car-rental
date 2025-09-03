import Hero from "../../components/common/Hero";
import VehicleSection from "../../components/ui/vehicles/VehicleSection";

const page = () => {
  return (
    <>
      <Hero
        title="OUR FLEET"
        description="EXPLORE OUR DIVERSE RANGE OF VEHICLES, METICULOUSLY CURATED TO MEET YOUR EVERY NEED."
        ImageSrc="/Another.webp"
      />
      <VehicleSection />
    </>
  );
};

export default page;
