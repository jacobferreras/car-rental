import Image from "next/image";
import ContactForm from "./ContactForm";
import Hero from "../../common/Hero";
import QuickHelpSection from "./QuickHelpSection";
import ContactDetails from "./ContactDetails";

const ContanctScreen = () => {
  return (
    <>
      <Hero
        title="GET IN TOUCH"
        description="WE'RE HERE TO HELP! REACH OUT TO US FOR ANY INQUIRIES, SUPPORT OR FEEDBACK"
        ImageSrc="/Inside.webp"
      />

      <div className="px-4 py-24 lg:flex md:flex-row md:justify-center md:items-center md:gap-8 bg-[#111827]">
        <div>
          <ContactDetails />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>

      <QuickHelpSection />
    </>
  );
};

export default ContanctScreen;
