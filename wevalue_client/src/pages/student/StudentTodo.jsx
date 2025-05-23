import React from "react";
import {
  FaCalendarAlt,
  FaBell,
  FaCheckCircle,
  FaSpinner,
  FaTasks,
} from "react-icons/fa";

const projects = {
  started: [
    { title: "Web Design", progress: 50 },
    { title: "App Development", progress: 60 },
    { title: "Mobile App", progress: 65 },
  ],
  ongoing: [
    { title: "Mobile App", progress: 30 },
    { title: "Dashboard", progress: 40 },
    { title: "Web Development", progress: 50 },
  ],
  completed: [
    { title: "Dashboard", progress: 90 },
    { title: "Landing Page", progress: 70 },
    { title: "App Development", progress: 80 },
  ],
};

const ProgressBar = ({ value }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div
      className="bg-purple-600 h-2.5 rounded-full transition-all duration-500"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

const StatCard = ({ icon, label, value, color }) => (
  <div className="flex items-center gap-4 bg-white border p-4 rounded-xl shadow-sm w-full md:w-auto">
    <div className={`text-2xl ${color}`}>{icon}</div>
    <div>
      <div className="text-gray-600 text-sm">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  </div>
);

const StudentTodo = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <StatCard
          icon={<FaCheckCircle />}
          label="Completed Tasks"
          value="12"
          color="text-green-500"
        />
        <StatCard
          icon={<FaSpinner />}
          label="In Progress"
          value="18"
          color="text-yellow-500"
        />
        <StatCard
          icon={<FaTasks />}
          label="Total Tasks"
          value="30"
          color="text-blue-600"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 bg-[#f6f9fc] min-h-screen">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(projects).map(([section, cards]) => (
            <div key={section}>
              <div className="text-lg font-semibold mb-3 capitalize text-gray-800">
                {section}
              </div>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-xl p-4 shadow-sm mb-4"
                >
                  <div className="text-base font-medium text-gray-700">
                    {card.title}
                  </div>
                  <div className="text-xs text-gray-400 mb-2">
                    Wireframing, mockups, client collaboration
                  </div>
                  <ProgressBar value={card.progress} />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>👥</span>
                    <span>6 💬 4</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentTodo;
