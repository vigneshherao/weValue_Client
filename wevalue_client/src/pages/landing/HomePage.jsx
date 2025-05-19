import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Patners from "./Patners";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <HeroSection />
      <Patners />
    </div>
  );
};

export default HomePage;
