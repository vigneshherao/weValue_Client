import React from "react";

const TutorDashboard = () => {
  const features = [
    {
      title: "📅 Schedule & Class Management",
      points: [
        "View upcoming classes and sessions",
        "Set and edit class timings",
        "Manage student batches",
      ],
    },
    {
      title: "✅ To-Do & Task Assignment",
      points: [
        "Create and assign tasks/homework",
        "Track completed tasks",
        "Give feedback on submissions",
      ],
    },
    {
      title: "📢 Notices & Announcements",
      points: [
        "Send announcements to batches or all",
        "Schedule alerts (e.g. test dates)",
      ],
    },
    {
      title: "📨 Doubt Resolver / Q&A",
      points: [
        "View and reply to student questions",
        "Moderate/filter doubts",
        "Mark as resolved or important",
      ],
    },
    {
      title: "👥 Student Management",
      points: ["View students per batch", "Monitor progress and attendance"],
    },
    {
      title: "📈 Analytics & Reports",
      points: [
        "See progress by student or batch",
        "Engagement metrics & exportable reports",
      ],
    },
    {
      title: "📦 Resource Sharing",
      points: [
        "Upload notes, PDFs, videos, links",
        "Organize by subject/topic",
        "Control download/view permissions",
      ],
    },
    {
      title: "🗨️ Group Chats & Forums",
      points: [
        "Join student groups",
        "Moderate conversations",
        "Create study-focused forums",
      ],
    },
    {
      title: "🎯 Test & Quiz Management",
      points: [
        "Create & schedule quizzes/tests",
        "Auto/manual evaluation",
        "Instant result sharing",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-[#fdf1f4] to-[#f3f3fd] py-16 px-6 md:px-16 lg:px-24 font-sans text-[#1e293b]">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="lg:w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tutor Dashboard <br className="hidden md:block" />– Empowering
            Educators
          </h1>
          <p className="text-[#475569] text-lg mb-8">
            Manage your classes, students, tasks, resources, and performance—all
            from one powerful dashboard built for modern tutoring needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow p-4 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <ul className="list-disc list-inside text-sm text-[#475569]">
                  {feature.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorDashboard;
