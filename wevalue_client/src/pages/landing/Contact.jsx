import React, { useState } from "react";

const faqs = [
  {
    question: "How this work?",
    answer:
      "This is a platform where students and tutors can track their daily progress, access assistance, and manage their learning schedule effectively. It's primarily designed to support tuition centers in organizing lessons, assignments, and performance tracking in a structured way.",
  },
  {
    question: "Are there any additional fee?",
    answer:
      "No additional fees. No Hidden fees. We believe in transparent pricing. The price you see is the price you pay.",
  },
  {
    question: "How can I get the app?",
    answer:
      "The app will be available soon. Currently, you can access all features via our fully functional website",
  },
  {
    question: "What features do you offer and other not?",
    answer:
      "We provide comprehensive features for students, tutors, and management to ensure a seamless learning and administrative experience.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white text-black font-sans flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Any questions? <br className="hidden sm:block" />
            We got you.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Yet bed any for assistance indulgence unpleasing. Not thoughts all
            exercise blessing. Indulgence way everything joy alteration
            boisterous the attachment.
          </p>
          <p className="text-indigo-600 font-medium text-sm sm:text-base hover:underline transition">
            Mail - altimaxeditz@gmail.com
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-t border-gray-300 py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center text-base sm:text-lg font-medium">
                <span>{faq.question}</span>
                <span className="text-xl font-bold">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600 text-sm sm:text-base transition-all duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
