import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiUnity,
  SiReact,
  SiGit,
  SiNodedotjs,
} from "react-icons/si";

const techs = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Python", icon: <SiPython className="text-blue-400" /> },
  { name: "Unity", icon: <SiUnity className="text-gray-300" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Git", icon: <SiGit className="text-orange-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto text-center px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex items-center justify-start gap-3 bg-black text-white border border-neutral-800 px-4 py-3 rounded-lg w-48 hover:border-white/40 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="text-2xl flex-shrink-0">{tech.icon}</div>
              <p className="font-medium text-gray-200 text-sm">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
