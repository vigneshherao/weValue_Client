import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log(isDropdownOpen);

  const navigate = useNavigate();

  const handleDropdownToggle = (text) => {
    text ? navigate("tutor/login") : () => navigate("student/login");
  };

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

        <div
          className="bg-[#7b3bf4]  text-white border-none font-medium rounded-md px-3 py-1 outline-none hover:border-white focus:ring-1 focus:ring-white transition"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <label className="flex justify-between items-center cursor-pointer">
            Login
            <span className="mt-1 ml-2 ">
              <FaAngleDown />
            </span>
          </label>
          {isDropdownOpen && (
            <div className="absolute  w-32 top-12 ring-gray-100 right-[-1px] bg-white rounded-md shadow-md p-4 flex flex-col space-y-4 ">
              <label
                className="text-[#0C0950] flex justify-between items-center cursor-pointer p-1 hover:bg-gray-100"
                onClick={() => navigate("student/login")}
              >
                as Tutee
              </label>
              <label
                className="text-[#0C0950]  flex justify-between items-center cursor-pointer  hover:bg-gray-100 "
                onClick={() => navigate("tutor/login")}
              >
                as Tutor
              </label>
            </div>
          )}
        </div>
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
          <div
            className="bg-[#7b3bf4]  text-white border-none font-medium rounded-md px-3 py-1 outline-none hover:border-white focus:ring-1 focus:ring-white transition"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <label className="flex justify-between items-center cursor-pointer">
              Login
              <span className="mt-1 ml-2 ">
                <FaAngleDown />
              </span>
            </label>
            {isDropdownOpen && (
              <div className="absolute  w-32 top-12 ring-gray-100 right-[-1px] bg-white rounded-md shadow-md p-4 flex flex-col space-y-4 ">
                <label
                  className="text-[#0C0950] flex justify-between items-center cursor-pointer p-1 hover:bg-gray-100"
                  onClick={() => handleDropdownToggle("tutee")}
                >
                  as Tutee
                </label>
                <label
                  className="text-[#0C0950]  flex justify-between items-center cursor-pointer  hover:bg-gray-100 "
                  onClick={() => handleDropdownToggle("tutor")}
                >
                  as Tutor
                </label>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
