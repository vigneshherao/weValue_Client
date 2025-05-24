import React, { Suspense } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import LandingRoutes from "./routes/LandingRoutes";
import StudentRoutes from "./routes/StudentRoutes";
import AuthRoutes from "./routes/AuthRoutes";

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {LandingRoutes()}
        {StudentRoutes()}
        {AuthRoutes()}
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
