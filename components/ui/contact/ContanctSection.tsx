import Image from "next/image";
import ContactForm from "./ContactForm";
import Hero from "../../common/Hero";

const ContanctSection = () => {
  return (
    <>
      <Hero
        title="GET IN TOUCH"
        description="WE'RE HERE TO HELP! REACH OUT TO US FOR ANY INQUIRIES, SUPPORT OR FEEDBACK"
        ImageSrc="/Inside.webp"
      />

      <div className="px-4 py-24 lg:flex md:flex-row md:justify-center md:items-center md:gap-8 bg-[#111827]">
        <div className="pt-4">
          <div className="card w-auto lg:w-96 h-112 bg-[#303a49] card-xl shadow-sm mb-4">
            <div className="card-body">
              <h2 className="card-title">Contact Information</h2>
              <p className="text-lg font-bold">
                <span className="inline-flex items-center mr-2">
                  <i className="bi bi-geo-alt text-[#93c5fd]"></i>
                </span>
                Our Office Addres
              </p>
              <p>123 Main Street, Suite 456, Cityville, State 12345, Country</p>

              <p className="text-lg font-bold">
                <span className="inline-flex items-center mr-2">
                  <i className="bi bi-telephone text-[#93c5fd]"></i>
                </span>
                Phone Number
              </p>
              <div className="flex flex-col gap-2">
                <a href="tel:+1234567890" className="text-blue-500">
                  +1 (234) 567-890
                </a>
                <a href="tel:+1234567890" className="text-blue-500">
                  +1 (234) 567-890
                </a>
              </div>

              <p className="text-lg font-bold">
                <span className="inline-flex items-center mr-2">
                  <i className="bi bi-envelope text-[#93c5fd]"></i>
                </span>
                Email Address
              </p>
              <div className="flex flex-col gap-2">
                <h1>InstaDrive@Info.com(General Inquiries)</h1>
              </div>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-center items-center px-2 py-24 bg-[#18202f]">
          <div className="text-2xl lg:text-5xl font-family-mono font-bold mb-4 text-white pl-4">
            Need Quick Answers?
          </div>
          <div className="text-md lg:text-xl font-family-sans text-white text-center mb-8 px-4">
            For common questions, check our comprehensive FAQ section or browse
            our support resources.
          </div>
          <div className="flex justify-center items-center gap-4">
            <button className="btn bg-[#1d4ed8]  rounded-xl">
              Visit Our FAQ <i className="bi bi-patch-question-fill"></i>
            </button>
            <button className="btn bg-[#1d4ed8]  rounded-xl">
              Support Center <i className="bi bi-info-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContanctSection;
