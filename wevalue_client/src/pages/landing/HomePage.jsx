import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Patners from "./Patners";
import Counts from "./Counts";
import TutorDashboard from "./TutorDashboard";
import Reviews from "./Reviews";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="w-full h-full ">
      <HeroSection />
      <Counts />
      <TutorDashboard />
      <Reviews />
      <Patners />
      <Footer />
    </div>
  );
};

export default HomePage;
