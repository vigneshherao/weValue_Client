import React from "react";
import Marquee from "react-fast-marquee";

const Partners = () => {
  const logos = [
    "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
    "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
    "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
    "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
    "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
    "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
    "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
    "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
    "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
    "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
    "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
    "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
  ];

  return (
    <section className="bg-gradient-to-br from-[#fdf1f4] via-[#fdf1f4] to-[#f3f3fd]  py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0C0950]">
        Our Partners
      </h2>

      <div className="mt-10">
        <Marquee pauseOnHover={true} gradient={false} speed={40}>
          <div className="flex items-center gap-8 sm:gap-10 md:gap-14 lg:gap-20">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="w-24 sm:w-28 md:w-32  flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`partner-${index}`}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;
