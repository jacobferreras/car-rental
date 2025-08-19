import Hero from "./HeroSection";
import VehicleSection from "./VehicleSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import TestimonialSection from "./TestimonialSection";
import CallToActionSection from "../../common/CallToActionSection";

const HomeSection = async () => {
  return (
    <div>
      <Hero />
      <VehicleSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <CallToActionSection />
    </div>
  );
};

export default HomeSection;
