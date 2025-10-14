import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Minimal portfolio built with React & Tailwind.",
    link: "#",
    image: "https://via.placeholder.com/800x450?text=Portfolio",
  },
  {
    title: "Math Roguelike",
    desc: "Godot-based card roguelike with procedural math puzzles.",
    link: "#",
    image: "https://via.placeholder.com/800x450?text=Math+Game",
  },
  {
    title: "AI Image Tools",
    desc: "Image segmentation & background removal experiments.",
    link: "#",
    image: "https://via.placeholder.com/800x450?text=AI+Tool",
  },
];

export default function Showcase() {
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Selected projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <article key={i} className="bg-neutral-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="w-full h-44 md:h-36 overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover"/>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <a href={p.link} className="text-[var(--accent)] font-medium">View →</a>
                <span className="text-xs text-gray-400">2024</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
