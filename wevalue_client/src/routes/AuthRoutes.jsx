import { Route } from "react-router-dom";
import StudentLogin from "../pages/logins/StudentLogin";
import TutorLogin from "../pages/logins/TutorLogin";

const AuthRoutes = () => (
  <>
    <Route path="student/login" element={<StudentLogin />} />
    <Route path="tutor/login" element={<TutorLogin />} />
  </>
);

export default AuthRoutes;
