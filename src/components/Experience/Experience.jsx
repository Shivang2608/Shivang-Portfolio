import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">WORK EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Professional experience and internship journey
        </p>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 cursor-pointer">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-6">
              <div className="bg-white rounded-xl p-4 h-40 flex items-center justify-center ">
                <img
                  src={exp.img}
                  alt={exp.company}
                  className="max-h-full object-contain"
                />
              </div>
            </div>

            <div className="px-6 pb-6">
              <h3 className="text-2xl font-bold text-white">
                {exp.role}
              </h3>

              <p className="text-purple-400 font-semibold mt-2">
                {exp.company}
              </p>

{exp.company === "Celebrare" && (
  <div className="flex gap-2 mt-3 flex-wrap">
    <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs">
      Production Application
    </span>

    <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs">
      React.js
    </span>

    <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs">
      Electron.js
    </span>
  </div>
)}
              <p className="text-gray-500 text-sm mt-1">
                {exp.date}
              </p>

              <p className="text-gray-400 mt-4 line-clamp-4">
                {exp.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;