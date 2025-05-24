import HomePage from "../pages/landing/HomePage";
import Pricings from "../pages/landing/Pricings";
import Layout from "../layouts/Layout";
import Contact from "../pages/landing/Contact";
import { Route } from "react-router-dom";

const LandingRoutes = () => {
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="pricing" element={<Pricings />} />
    <Route path="contact" element={<Contact />} />
  </Route>;
};

export default LandingRoutes;
