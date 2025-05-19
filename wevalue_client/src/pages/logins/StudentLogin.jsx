import React from "react";

export default function StudentLogin() {
  return (
    <div className="h-screen overflow-hidden flex flex-col md:flex-row bg-gradient-to-br from-white via-[#fdf1f4] to-[#f3f3fd]">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white shadow-md">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            WeValue — Unlock the True Power of Your Mind.
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Login with your email and password to access your account.
          </p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4">
            Forgot your password{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Click here
            </a>
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-96 md:h-full">
        <img
          src="https://i.pinimg.com/736x/41/2e/18/412e18f0915648a9cff52c07afb511bc.jpg"
          alt="Person working on laptop"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
