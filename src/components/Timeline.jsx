import React from "react";

const Timeline = () => {
  const events = [
    {
      year: "2020",
      title: "Started Coding",
      desc: "Discovered my passion for programming and built small CLI tools.",
    },
    {
      year: "2021",
      title: "Joined Organization",
      desc: "Became part of a university tech organization, learning teamwork and leadership.",
    },
    {
      year: "2022",
      title: "First Project",
      desc: "Created my first web app using React and Firebase.",
    },
    {
      year: "2023",
      title: "Internship",
      desc: "Worked as a Front-End Developer intern, collaborating in a real project environment.",
    },
    {
      year: "2024",
      title: "Freelancing & Growth",
      desc: "Started freelance projects and focused on building my portfolio.",
    },
  ];

  return (
    <section
      id="timeline"
      className="py-20 bg-neutral-950 text-white flex justify-center"
    >
      <div className="w-full max-w-3xl px-6">
        <h2 className="text-4xl font-bold text-center mb-16">My Journey</h2>

        <div className="relative border-l-2 border-blue-500">
          {events.map((event, index) => (
            <div key={index} className=" px-5 mb-12 ml-6 group relative">
              {/* Node */}
              <div className="absolute -left-[13px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-neutral-950 group-hover:scale-110 transition-transform duration-300"></div>

              {/* Year */}
              <span className="text-sm text-blue-400 font-semibold">{event.year}</span>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-1">{event.title}</h3>

              {/* Description */}
              <p className="text-gray-400 mt-2 group-hover:text-gray-200 transition-all duration-300">
                {event.desc}
              </p>

              {/* Tooltip box */}
              <div className="absolute left-8 top-0 opacity-0 group-hover:opacity-100 bg-neutral-900 border border-blue-500 text-sm text-gray-300 rounded-lg p-3 shadow-lg w-64 transform -translate-y-1/2 transition-all duration-300">
                <p className="text-blue-400 font-semibold">{event.title}</p>
                <p className="text-xs mt-1">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
