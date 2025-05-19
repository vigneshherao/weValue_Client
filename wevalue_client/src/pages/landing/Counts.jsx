import React from "react";
import Partners from "./Patners";
import Marquee from "react-fast-marquee";

const logos = [
  "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
  "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
  "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
  "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
  "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
  "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
];

const Counts = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-[#fdf1f4] to-[#f3f3fd] py-12 px-4 md:px-16 lg:px-24 text-[#151342] font-sans">
        {/* <section className="py-10 px-4 md:px-0 ">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0C0950]">
            Our Partners
          </h2>
          <div className="mt-10 mb-10">
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
        </section> */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-start">
          <div className="lg:w-1/3">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Your Trusted <br /> Learning <br /> Partner
            </h1>
            <p className="text-[#7E7C9C] mb-6">
              We connect students with experienced tutors for personalized
              learning. Learn smarter, not harder – from anywhere.
            </p>

            <button className="bg-[#7b3bf4] text-white px-6 py-2 rounded-full flex items-center gap-2 font-medium">
              Join Fast <span className="text-xl">→</span>
            </button>
          </div>
          <div className="lg:w-1/3 w-full bg-gradient-to-br from-[#BA99FD] to-[#7ECDF4] rounded-2xl p-6 shadow-lg">
            <h3 className="text-white text-lg font-semibold mb-2">
              Ask Doubts with We Value Ai-Bot
            </h3>
            <p className="text-white text-sm mb-4">
              Get instant answers to your questions with our AI-powered chatbot.
              Available 24/7, it provides personalized support and resources.
            </p>
            <div className="bg-white rounded-xl px-4 py-3">
              <div className="text-[#151342] font-semibold">Hi, User</div>
              <div className="text-[#7E7C9C] text-sm mb-2">
                Bangalore, India
              </div>
              <hr className="my-2" />
              <div className="text-sm text-[#151342]">Upcoming Assesment</div>
              <div className="text-[#7E7C9C] text-sm">20 May 2025</div>
              <div className="text-[#7E7C9C] text-sm">04:00 PM – 05:00 PM</div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-[#151342]">
              Track Your Progress Easily
            </h3>
            <p className="text-sm text-[#7E7C9C] mb-4">
              Monitor your learning journey with our intuitive dashboard. Stay
              on top of your goals and achievements.
            </p>
            <div className="flex justify-between items-end gap-2">
              {[
                { name: "Maths", height: 24, color: "bg-[#4EBFFF]" },
                { name: "English", height: 16, color: "bg-[#A78BFA]" },
                { name: "Statics", height: 20, color: "bg-[#F9A8D4]" },
                { name: "English", height: 28, color: "bg-[#FCD34D]" },
              ].map((student, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`${student.color} rounded-t-lg w-6`}
                    style={{ height: `${student.height * 4}px` }}
                  ></div>
                  <img
                    src={`https://randomuser.me/api/portraits/thumb/men/${
                      idx + 40
                    }.jpg`}
                    alt={student.name}
                    className="w-8 h-8 rounded-full mt-2"
                  />
                  <div className="text-xs text-[#151342] mt-1">
                    {student.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 text-center">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h4 className="text-2xl font-bold">100%</h4>
            <p className="text-[#7E7C9C] mt-2">Expert Verified Tutors</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <h4 className="text-2xl font-bold">50K+</h4>
            <p className="text-[#7E7C9C] mt-2">Sessions Completed</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <h4 className="text-2xl font-bold">98%</h4>
            <p className="text-[#7E7C9C] mt-2">Student Satisfaction</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counts;
