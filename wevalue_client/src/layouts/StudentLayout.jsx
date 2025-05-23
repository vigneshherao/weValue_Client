import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function StudentLayout() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
