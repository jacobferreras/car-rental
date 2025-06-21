import React from "react";

const Arrow = () => (
  <div className="flex justify-center animate-bounce">
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
      <defs>
        <linearGradient id="arrow-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
      </defs>
      <path
        d="M16 7v18m0 0l-7-7m7 7l7-7"
        stroke="url(#arrow-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

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
    <div className="flex flex-col justify-center items-center mb-8 gap-6">
      {steps.map((step, index) => (
        <React.Fragment key={step.title}>
          <div className="relative card w-full max-w-md bg-white/80 border border-blue-100 shadow-xl transition-transform hover:scale-105">
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
          {index < steps.length - 1 && <Arrow />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Steps;
