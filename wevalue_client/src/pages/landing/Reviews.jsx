import React from "react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Shawn utpoid",
    title: "Teacher in Alberta",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D", // replace with actual image path
    text: `They have a wonderful way of making lessons engaging and interactive, ensuring that every child feels included and motivated to learn. We have seen remarkable growth in our child’s confidence and skills, and we attribute much of that to their patience and encouragement.`,
  },
  {
    name: "Shawn utpoid",
    title: "Teacher in Alberta",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: `Their communication with parents is excellent, keeping us informed about our child’s progress and any areas that may need attention. It is evident that they genuinely care about their students' well-being and academic success.`,
  },
  {
    name: "Shawn utpoid",
    title: "Teacher in Alberta",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: `It is evident that they genuinely care about their students' well-being and academic success. We sincerely appreciate the hard work and dedication of them and highly recommend them to any parent looking for a caring and effective educator.`,
  },
  {
    name: "Shawn utpoid",
    title: "Teacher in Alberta",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: `It is evident that they genuinely care about their students' well-being and academic success. We sincerely appreciate the hard work and dedication of them and highly recommend them to any parent looking for a caring and effective educator.`,
  },
  {
    name: "Shawn utpoid",
    title: "Teacher in Alberta",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: `It is evident that they genuinely care about their students' well-being and academic success. We sincerely appreciate the hard work and dedication of them and highly recommend them to any parent looking for a caring and effective educator.`,
  },
  {
    name: "Shawn utpoid",
    title: "Teacher in Alberta",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: `It is evident that they genuinely care about their students' well-being and academic success. We sincerely appreciate the hard work and dedication of them and highly recommend them to any parent looking for a caring and effective educator.`,
  },
];

const Reviews = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white text-black">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#0C0950] leading-tight md:leading-snug max-w-4xl mx-auto">
            Success Stories From Our Clients
          </h1>
        </div>
      </div>

      <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-purple-50 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-600">{t.title}</p>
                <div className="text-yellow-400 mt-1">
                  {"★".repeat(t.stars)}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-700">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
