import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Last Camp",
    description:
      "A short retro style horror game made in Unity with over 8k downloads.",
    image: "https://img.itch.zone/aW1nLzIwMDg4MDI2LmpwZw==/original/6LtTLL.jpg",
    link: "#",
    tech: ["Unity", "C#", "Pixel Art"],
  },
  {
    title: "Math Card Roguelike",
    description:
      "A Godot-based roguelike card game that uses math-based mechanics.",
    image: "https://via.placeholder.com/400x250?text=Math+Card+Roguelike",
    link: "#",
    tech: ["Godot", "GDScript", "Procedural Generation"],
  },
  {
    title: "Greenhouse Horror Game",
    description:
      "A PSX-style psychological horror about paranoia and obsession.",
    image: "https://via.placeholder.com/400x250?text=Greenhouse+Horror",
    link: "#",
    tech: ["Unity", "C#", "PSX Shader"],
  },
  {
    title: "AI Image Toolkit",
    description:
      "A Python library for AI-powered background removal and segmentation.",
    image: "https://via.placeholder.com/400x250?text=AI+Image+Toolkit",
    link: "#",
    tech: ["Python", "OpenCV", "PyTorch"],
  },
  {
    title: "Data Visualizer",
    description:
      "An interactive dashboard for visualizing machine learning datasets.",
    image: "https://via.placeholder.com/400x250?text=Data+Visualizer",
    link: "#",
    tech: ["React", "D3.js", "Node.js"],
  },
];

export default function Projects() {
  const duplicated = [...projects, ...projects]; // for seamless loop
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);
  const speed = 10; // slower loop for readability

  useEffect(() => {
    if (!paused) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        },
      });
    } else {
      controls.stop(); // pause without resetting
    }
  }, [paused, controls]);

  return (
    <section id="projects" className="space-y-6 overflow-hidden py-20">
      <h2 className="text-3xl font-semibold border-b pb-2 text-white">
        Projects
      </h2>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div className="flex gap-6" animate={controls}>
          {duplicated.map((p, i) => (
            <div
              key={i}
              className="min-w-[300px] max-w-[300px] bg-white/5 hover:bg-white/10 transition rounded-2xl overflow-hidden flex-shrink-0 border border-white/10"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-3">
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {p.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white/10 border border-white/20 text-gray-300 px-2 py-0.5 rounded-full cursor-default select-none"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
