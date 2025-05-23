import React, { useRef, useState } from "react";
import { validateStudentForm } from "../../utils/formValidation";
import { toast, ToastContainer } from "react-toastify";

export default function StudentLogin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [validationError, setValidationError] = useState({
    email: null,
    password: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const validation = validateStudentForm(email, password);

    setValidationError(validation || { email: null, password: null });

    if (validation) {
      return;
    }

    handleLogin(email, password);
  };

  const handleLogin = async (email, password) => {
    setIsLoading(true);

    setTimeout(async () => {
      try {
        const response = await fetch("http://localhost:7999/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        });

        const data = await response.json();

        if (response.ok) {
          toast.success(data.message || "Login successful");
        } else {
          toast.error(data.error || "Login failed");
        }
      } catch (err) {
        toast.error("Network error");
        console.error("Login error:", err);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

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

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              ref={emailRef}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {validationError.email && (
              <p className="text-red-600 text-sm">{validationError.email}</p>
            )}
            <input
              type="password"
              ref={passwordRef}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {validationError.password && (
              <p className="text-red-600 text-sm">{validationError.password}</p>
            )}
            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              {isLoading ? "Logging in..." : "Login"}
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
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
