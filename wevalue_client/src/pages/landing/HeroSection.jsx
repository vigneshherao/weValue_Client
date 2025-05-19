import React from "react";
import { ArrowDown } from "lucide-react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-white via-[#fdf1f4] to-[#f3f3fd] px-4 md:px-16 py-12 relative">
        <div className="text-center mb-4">
          <span className="text-xs md:text-sm text-[#6e6e6e] bg-white px-3 py-1 rounded-full border border-gray-300">
            About us
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-center text-[#0C0950] leading-tight md:leading-snug max-w-4xl mx-auto">
          Discover Our Mission and Values in Student-Centered Learning
        </h1>
        <p className="text-center text-gray-600 mt-4 max-w-xl mx-auto text-sm md:text-base">
          We are dedicated to delivering exceptional education through a
          supportive, student-first approach that empowers every learner to
          succeed.
        </p>
        <div className="text-center mt-6">
          <button className="bg-[#7b3bf4] text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-[#692dd3] transition">
            Contact us
          </button>
        </div>
        <div className="mt-14 flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
          <div className="animate-float min-w-[320px] h-[300px] bg-white rounded-2xl shadow-md overflow-hidden flex items-center justify-center">
            <img
              src="https://enterprisewired.com/wp-content/uploads/2024/04/1-Unlocking-Academic-Success_-The-Power-of-Online-Tutoring-Services.jpg"
              alt="care1"
              className="object-cover w-full h-full "
            />
          </div>
          <div className="animate-float  min-w-[320px] h-[300px] rounded-2xl shadow-md overflow-hidden relative">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/64b9ba7dc5d415a35afb68d1/Teenage-girl-with-headphones-and-laptop-having-online-school-class-at-home/960x0.jpg?format=jpg&width=960"
              alt="care2"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-3 right-3 flex flex-col gap-1 text-sm">
              <span className="bg-white text-[#0C0950] px-3 py-1 rounded-full shadow-md">
                100% Fast Response
              </span>
              <span className="bg-white text-[#0C0950] px-3 py-1 rounded-full shadow-md">
                99% Satisfying treatment
              </span>
            </div>
          </div>
          <div className="animate-float  min-w-[320px] h-[300px] bg-white rounded-2xl shadow-md overflow-hidden flex items-center justify-center">
            <img
              src="https://media.istockphoto.com/id/2160438109/photo/primary-multiethnic-pupils-working-on-digital-tablet-with-teacher.jpg?s=612x612&w=0&k=20&c=JVN-yMR73hsXUMdKCxCsPxfsUVkBpxIbduo3Xhk6dCA="
              alt="care3"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 hidden md:flex items-center justify-center">
          <div className="bg-white p-3 rounded-full shadow-lg">
            <ArrowDown size={20} className="text-[#0C0950]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
