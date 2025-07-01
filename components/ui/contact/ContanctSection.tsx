import Image from "next/image";
import ContactForm from "./ContactForm";

const ContanctSection = () => {
  return (
    <>
      <div className="hero min-h-100 relative mb-12">
        <Image
          src="/Contact.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="flex flex-col justify-center items-center absolute z-20">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-center text-white font-family-mono font-bold">
            GET IN TOUCH
          </h1>
          <h2 className="text-xl md:text-2xl text-center text-white font-family-mono font-bold">
            WE'RE HERE TO HELP! REACH OUT TO US FOR ANY INQUIRIES, SUPPORT OR
            FEEDBACK
          </h2>
        </div>
      </div>

      <div className="px-4 mb-12 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-8">
        <div className="card w-auto lg:w-96 bg-base-100 card-xl shadow-sm mb-4">
          <div className="card-body">
            <h2 className="card-title">Contact Information</h2>
            <p className="text-lg font-bold">
              <span className="inline-flex items-center mr-2">
                <i className="bi bi-geo-alt text-red-600"></i>
              </span>
              Our Office Addres
            </p>
            <p>123 Main Street, Suite 456, Cityville, State 12345, Country</p>

            <p className="text-lg font-bold">
              <span className="inline-flex items-center mr-2">
                <i className="bi bi-telephone text-red-600"></i>
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
                <i className="bi bi-envelope text-red-600"></i>
              </span>
              Email Address
            </p>
            <div className="flex flex-col gap-2">
              <h1>InstaDrive@Info.com(General Inquiries)</h1>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
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

export default ContanctSection;
