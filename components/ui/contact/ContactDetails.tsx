import React from "react";

const ContactDetails = () => {
  return (
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
  );
};

export default ContactDetails;
