import React from "react";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-[#fefefe] p-4 md:p-8 font-sans">
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-[#0C0950] mb-4">
          Welcome back, Vignesh!
        </h2>
        <p className="text-gray-600">
          Here is your dashboard where you can find all the information you
          need.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-5 border-l-4 border-[#bfa3f7] border-t w-full max-w-sm mx-auto md:mx-0">
          <h4 className="text-[#8065e0] text-lg font-semibold">
            Total Classes
          </h4>
          <p className="text-sm mt-1 text-gray-600">
            Total classes we have completed!
          </p>

          <div className=" mt-4 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#f3f3fd] via-[#fdf1f4] to-[#f3f3fd] flex items-center justify-center shadow-md">
              <span className="text-[#8065e0] font-bold text-md">100/200</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-4 border-l-4 border-t  border-[#f7c3a3]">
          <h4 className="text-[#f7a76c] font-semibold">Attendance</h4>
          <p className="text-sm mt-2 text-gray-600">Your percentage!</p>
          <div className=" mt-4 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#f3f3fd] via-[#fdf1f4] to-[#f3f3fd] flex items-center justify-center shadow-md">
              <span className="text-[#8065e0] font-bold text-md">38%/100</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-4 border-l-4 border-t  border-[#a3d7f7]">
          <h4 className="text-[#65bdf0] font-semibold">Dashboard</h4>
          <p className="text-sm mt-2 text-gray-600">
            Learn Typography from our expert trainer
          </p>
          <p className="text-xs text-gray-400 mt-2">Progress</p>
          <div className="bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-[#65bdf0] h-2 rounded-full w-1/2"></div>
          </div>
        </div>

        <div className="bg-yellow-100 rounded-2xl shadow-md p-4 text-yellow-800 flex flex-col justify-between">
          <p>You have 5 days left on your subscription</p>
          <button className="mt-4 bg-yellow-400 text-white py-2 rounded-lg font-semibold">
            Upgrade to Pro
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl shadow-md p-4 w-full border max-w-md mx-auto md:mx-0">
          <h3 className="text-lg font-semibold mb-4">Last Month Topper's</h3>
          {["Vignesh", "Shashank", "Vinayak", "Sushant", "Kiran"].map(
            (name, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg px-4 py-2 flex justify-between items-center mb-2"
              >
                <p className="text-gray-700 font-medium">{name}</p>
                <span className="text-yellow-500 font-bold">#{index + 1}</span>
              </div>
            )
          )}
        </div>
        <div className="md:col-span-3 border rounded-2xl shadow-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Upcoming Clasess</h3>
          {[
            {
              name: "Maths",
              title: "Maths by John Doe",
              date: "2023-10-15",
              time: "10:00 AM",
            },
            {
              name: "Maths",
              title: "Maths by John Doe",
              date: "2023-10-15",
              time: "10:00 AM",
            },
            {
              name: "Maths",
              title: "Maths by John Doe",
              date: "2023-10-15",
              time: "10:00 AM",
            },
            {
              name: "Maths",
              title: "Maths by John Doe",
              date: "2023-10-15",
              time: "10:00 AM",
            },
          ].map((mentor, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center py-2 border-b last:border-none"
            >
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-semibold">{mentor.name}</p>
                  <p className="text-xs text-gray-500">{mentor.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-xs sm:text-sm text-gray-500">
                  {mentor.date}
                </p>
                <p className="text-xs sm:text-sm text-blue-500">
                  {mentor.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
