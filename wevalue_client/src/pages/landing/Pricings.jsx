import React, { useState } from "react";

const plans = [
  {
    name: "Base",
    price: "$80",
    duration: "/month",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
    buttonText: "Downgrade",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$120",
    duration: "/month",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
    buttonText: "Upgrade",
    highlighted: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Enterprise",
    price: "$260",
    duration: "/month",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
    buttonText: "Upgrade",
    highlighted: false,
  },
];

const Pricings = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="min-h-screen px-4 md:px-12 py-20  text-[#0C0950]">
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Simple, transparent pricing
      </h2>
      <p className="text-center text-gray-500 mt-4 text-sm md:text-base">
        No contracts. No surprise fees.
      </p>
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setIsMonthly(true)}
          className={`py-1 px-4 rounded-full border ${
            isMonthly ? "bg-[#7b3bf4] text-white" : "text-[#0C0950]"
          } transition-all`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsMonthly(false)}
          className={`py-1 px-4 rounded-full border ${
            !isMonthly ? "bg-[#7b3bf4] text-white" : "text-[#0C0950]"
          } transition-all`}
        >
          Yearly
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all flex flex-col justify-between ${
              plan.highlighted
                ? "bg-gradient-to-br from-[#7b3bf4] to-[#5b3cf4] text-white scale-105 z-10"
                : "text-[#0C0950]"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute top-4 right-4 text-xs bg-white text-[#7b3bf4] font-semibold px-2 py-1 rounded-full shadow">
                {plan.badge}
              </div>
            )}
            <div>
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-base font-medium">{plan.duration}</span>
              </p>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-lg">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-6 w-full py-2 px-4 rounded-xl font-medium ${
                plan.highlighted
                  ? "bg-white text-[#7b3bf4] hover:bg-gray-100"
                  : "bg-[#7b3bf4] text-white hover:bg-[#5b3cf4]"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricings;
