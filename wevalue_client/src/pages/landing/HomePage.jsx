import React from "react";
import HeroSection from "./HeroSection";
import Patners from "./Patners";
import Counts from "./Counts";
import TutorDashboard from "./TutorDashboard";
import Reviews from "./Reviews";
import Login from "../logins/StudentLogin";

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
