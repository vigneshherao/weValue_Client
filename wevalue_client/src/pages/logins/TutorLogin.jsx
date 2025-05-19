import React, { useState } from "react";

const TutorLogin = () => {
  const [role, setRole] = useState("tutor");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col md:flex-row bg-gradient-to-br from-white via-[#fdf1f4] to-[#f3f3fd]">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white shadow-md">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Teaching is the one profession that creates all other professions
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Login with your email and password to access your account.
          </p>
          <div className="mb-6">
            <label
              htmlFor="role"
              className="block mb-2 font-semibold text-gray-700"
            >
              Select Login Role:
            </label>
            <select
              id="role"
              value={role}
              onChange={handleRoleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="tutor">Tutor</option>
              <option value="admin">Admin</option>
              <option value="assistant">Assistant</option>
            </select>
          </div>
          <form className="space-y-4">
            <input
              type="email"
              placeholder={`Enter your ${role} email`}
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
              Login as {role.charAt(0).toUpperCase() + role.slice(1)}
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
          src="https://i.pinimg.com/736x/9b/a7/30/9ba7308d4b088087a9e804a07f5d71c1.jpg"
          alt="Person working on laptop"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default TutorLogin;
