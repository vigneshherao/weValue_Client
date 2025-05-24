import React from "react";
import { FiX } from "react-icons/fi";

const Notication = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-full w-full relative">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">12-11-2033</span>
          <button className="text-gray-400 hover:text-gray-600 transition">
            <FiX size={20} />
          </button>
        </div>
        <label className="text-blue-600 text-sm font-medium mb-1 block">
          Fees
        </label>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          9th second part fees need to be paid before 11th
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          exercitationem facilis doloremque, iure nam assumenda atque accusamus
          rerum asperiores temporibus inventore quia ad eius eos, minima aliquid
          voluptate doloribus maxime!
        </p>
      </div>
    </div>
  );
};

export default Notication;
