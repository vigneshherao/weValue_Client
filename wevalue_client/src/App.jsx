import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/landing/HomePage";
import Pricings from "./pages/landing/Pricings";
import Layout from "./layouts/Layout";
import Contact from "./pages/landing/Contact";
import StudentLogin from "./pages/logins/StudentLogin";
import TutorLogin from "./pages/logins/TutorLogin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="pricing" element={<Pricings />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="student/login" element={<StudentLogin />} />
        <Route path="tutor/login" element={<TutorLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
