import React from "react";
import HeroSection from "./HeroSection";
import Patners from "./Patners";
import Counts from "./Counts";
import TutorDashboard from "./TutorDashboard";
import Reviews from "./Reviews";
import { ToastContainer, toast } from "react-toastify";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Counts />
      <TutorDashboard />
      <Reviews />
      <Patners />
    </div>
  );
};

export default HomePage;
