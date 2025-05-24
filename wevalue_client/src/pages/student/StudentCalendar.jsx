import React from "react";

const StudentCalendar = () => {
  const calendarData = [
    {
      date: 1,
      events: [
        { type: "Visits", count: 4 },
        { type: "Calls", count: 2 },
      ],
    },
    { date: 2, events: [{ type: "Assesment 1", count: 1 }] },
    { date: 6, events: [{ type: "Quiz", count: 3 }] },
    { date: 9, events: [{ type: "Parents meeting", count: 1 }] },
    { date: 10, events: [{ type: "Holiday", count: 3 }] },
    {
      date: 13,
      events: [
        { type: "J. Parkins", count: 1 },
        { type: "Calls", count: 2 },
      ],
    },
    { date: 15, events: [{ type: "Maths", count: 3 }] },
    { date: 21, events: [{ type: "Physics", count: 2 }] },
    { date: 23, events: [{ type: "Exam", count: 1 }] },
    { date: 24, events: [{ type: "Tasks", count: 2 }] },
    { date: 27, events: [{ type: "M. Dots...", count: 1 }] },
    { date: 28, events: [{ type: "Get labs...", count: 1 }] },
    { date: 30, events: [{ type: "Calls", count: 4 }] },
  ];

  const renderEvent = (event, i) => {
    const typeStyles = {
      Visits: "bg-pink-100 text-pink-700",
      Calls: "bg-blue-100 text-blue-700",
      Tasks: "bg-gray-200 text-gray-700",
      "Review t...": "bg-gray-200 text-gray-700",
      "Exam pr...": "bg-gray-200 text-gray-700",
      "Get labs...": "bg-gray-200 text-gray-700",
      "M. Dots...": "bg-blue-100 text-blue-700",
      "I. Filatova": "bg-blue-100 text-blue-700",
      "J. Parkins": "bg-pink-100 text-pink-700",
      Taks: "bg-gray-200 text-gray-700",
    };

    return (
      <div
        key={i}
        className={`flex justify-between items-center px-2 py-1 rounded-md text-sm mt-1 ${
          typeStyles[event.type] || "bg-gray-100 text-gray-800"
        }`}
      >
        <span>{event.type}</span>
        <span className="font-bold text-xs">{event.count}</span>
      </div>
    );
  };

  const daysInMonth = 30;
  const firstDayOffset = 3;

  const cells = [];
  for (let i = 0; i < firstDayOffset; i++) cells.push(null);
  for (let i = 1; i <= daysInMonth; i++) cells.push(i);

  return (
    <div className="p-4 md:p-10 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-200 rounded">
            Day
          </button>
          <button className="px-3 py-1 text-sm font-medium text-pink-700 bg-pink-100 rounded">
            Month
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-200 rounded">
            Year
          </button>
        </div>
        <h2 className="text-lg font-bold">June 2022</h2>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-gray-500 mb-2">
        <div>MON</div>
        <div>TUE</div>
        <div>WED</div>
        <div>THU</div>
        <div>FRI</div>
        <div>SAT</div>
        <div>SUN</div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-sm">
        {cells.map((day, index) => {
          const dayEvents =
            calendarData.find((item) => item.date === day)?.events || [];
          return (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-2 h-24 sm:h-22 md:h-28 overflow-hidden"
            >
              {day && (
                <div>
                  <div
                    className={`w-4 h-4 text-center rounded-full text-xs font-bold ${
                      day === 10 ? "bg-blue-600 text-white" : ""
                    }`}
                  >
                    {day}
                  </div>
                  {dayEvents.map(renderEvent)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentCalendar;
