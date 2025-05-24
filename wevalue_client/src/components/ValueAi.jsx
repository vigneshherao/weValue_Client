import React, { useState } from "react";
import { FiTrash2, FiUpload, FiMic } from "react-icons/fi";

const ValueAi = () => {
  const [input, setInput] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-4 flex flex-col gap-10">
      <div className="max-w-4xl mx-auto w-full bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">AI Value Tool</h2>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={4}
          placeholder="Type or paste your text here..."
          className="w-full border border-gray-300 rounded-xl p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="mt-4 flex gap-4 flex-wrap">
          <button
            onClick={() => setInput("")}
            className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition"
          >
            <FiTrash2 /> Clear
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition">
            <FiUpload /> Upload
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded-xl hover:bg-green-200 transition">
            <FiMic /> Voice
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 px-2">
          Recent Learns
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Learn Physics", "Learn Maths", "Learn Last Topic"].map(
            (title, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-500">
                  A short summary of what was learned on this topic. Click to
                  revisit.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ValueAi;
