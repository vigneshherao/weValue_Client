import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/landing/Navbar";
import Footer from "../pages/landing/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-[#fdf1f4] to-[#f3f3fd]">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
