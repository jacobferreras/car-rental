import React from "react";

const steps = [
  {
    title: "Select",
    desc: "Choose your preferred vehicle from our extensive range of options.",
  },
  {
    title: "Book",
    desc: "Reserve your vehicle easily with our seamless online booking system.",
  },
  {
    title: "Drive",
    desc: "Pick up your car and enjoy a smooth, hassle-free driving experience.",
  },
  {
    title: "Return",
    desc: "Return the vehicle at your convenience. We handle the rest!",
  },
];

const Steps = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mb-8 gap-6 px-4">
      {steps.map((step, index) => (
        <React.Fragment key={step.title}>
          <div className="relative card w-full h-30 max-w-md bg-white/80 border border-blue-100 shadow-xl transition-transform hover:scale-105">
            <span className="absolute -top-4 -left-4 bg-gradient-to-br from-red-500 to-red-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md border-2 border-white">
              {index + 1}
            </span>
            <div className="card-body pt-6">
              <h2 className="card-title flex justify-center text-xl font-semibold text-red-600">
                {step.title}
              </h2>
              <p className="text-center text-gray-600">{step.desc}</p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Steps;
