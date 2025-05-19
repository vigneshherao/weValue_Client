import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md ring-2 ring-gray-100 rounded-xl mx-auto w-[72%] mt-4 px-4 py-3 flex items-center justify-between z-50 relative">
      <div className="text-[#0C0950] text-2xl font-bold">WeValue</div>
      <div className="hidden md:flex items-center space-x-6">
        <a className="text-[#0C0950] font-medium hover:text-blue-600 transition">
          <Link to={"/"}>Home</Link>
        </a>
        <a className="text-[#0C0950] font-medium hover:text-blue-600 transition">
          <Link to={"/pricing"}>Pricing</Link>
        </a>
        <a
          href="#"
          className="text-[#0C0950] font-medium hover:text-blue-600 transition"
        >
          <Link to={"/contact"}>contact</Link>
        </a>
        <select className="bg-[#7b3bf4] p text-white border-none text-[#0C0950] font-medium rounded-md px-3 py-1 outline-none hover:border-white focus:ring-1 focus:ring-white transition">
          <option value="" disabled selected hidden>
            Sign up / Login
          </option>
          <option
            value="tutee"
            className="bg-white text-[#0C0950] border-none outline-none"
          >
            as Student
          </option>
          <option
            value="tutor"
            className="bg-white text-[#0C0950] border-none outline-none"
          >
            as Tutor
          </option>
        </select>
      </div>
      <button
        className="md:hidden text-[#0C0950] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-4 right-4 bg-white rounded-xl shadow-md p-4 flex flex-col space-y-4 md:hidden z-10">
          <a
            href="#"
            className="text-[#0C0950] font-medium hover:text-blue-600 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#0C0950] font-medium hover:text-blue-600 transition"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-[#0C0950] font-medium hover:text-blue-600 transition"
          >
            Contact
          </a>
          <select className="bg-white border border-gray-300 text-[#0C0950] font-medium rounded-md px-3 py-1 outline-none hover:border-blue-400 focus:ring-1 focus:ring-blue-500 transition">
            <option value="" disabled selected hidden>
              Sign up / Login
            </option>
            <option value="tutee">as Tutee</option>
            <option value="tutor">as Tutor</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
