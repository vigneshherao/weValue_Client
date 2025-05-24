import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/landing/HomePage";
import Pricings from "./pages/landing/Pricings";
import Layout from "./layouts/Layout";
import Contact from "./pages/landing/Contact";
import StudentLogin from "./pages/logins/StudentLogin";
import TutorLogin from "./pages/logins/TutorLogin";

import StudentDashBoard from "./pages/student/StudentDashBoard";
import StudentLayout from "./layouts/StudentLayout";
import StudentProfile from "./pages/student/StudentProfile";
import StudentTodo from "./pages/student/StudentTodo";
import StudentCalendar from "./pages/student/StudentCalendar";
import ValueAi from "./components/ValueAi";
import StudentAssesment from "./pages/student/StudentAssesment";
import StudentDoubt from "./pages/student/StudentDoubt";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        //landing page routes
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="pricing" element={<Pricings />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        //student page routes
        <Route path="/student/:id" element={<StudentLayout />}>
          <Route path="dashboard" element={<StudentDashBoard />} />
          <Route path="todo" element={<StudentTodo />} />
          <Route path="calendar" element={<StudentCalendar />} />
          <Route path="ai" element={<ValueAi />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="test" element={<StudentAssesment />} />
          <Route path="doubt" element={<StudentDoubt />} />
        </Route>
        //Login routes
        <Route path="student/login" element={<StudentLogin />} />
        <Route path="tutor/login" element={<TutorLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
