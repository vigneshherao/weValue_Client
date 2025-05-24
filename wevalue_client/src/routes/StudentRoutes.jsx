import React from "react";
import { Route } from "react-router-dom";

import StudentLayout from "../layouts/StudentLayout";
import StudentDashBoard from "../pages/student/StudentDashBoard";
import StudentTodo from "../pages/student/StudentTodo";
import StudentCalendar from "../pages/student/StudentCalendar";
import ValueAi from "../components/ValueAi";
import StudentProfile from "../pages/student/StudentProfile";
import StudentAssesment from "../pages/student/StudentAssesment";
import StudentDoubt from "../pages/student/StudentDoubt";

const StudentRoutes = () => (
  <Route path="/student/:id" element={<StudentLayout />}>
    <Route path="dashboard" element={<StudentDashBoard />} />
    <Route path="todo" element={<StudentTodo />} />
    <Route path="calendar" element={<StudentCalendar />} />
    <Route path="ai" element={<ValueAi />} />
    <Route path="profile" element={<StudentProfile />} />
    <Route path="test" element={<StudentAssesment />} />
    <Route path="doubt" element={<StudentDoubt />} />
  </Route>
);

export default StudentRoutes;
