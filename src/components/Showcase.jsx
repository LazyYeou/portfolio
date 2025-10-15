import React from "react";
import TalempongImg from "../public/talempong_digital.jpg";
import WisoktoImg from "../public/wisok_img.png";

const projects = [
  {
    title: "Last Camp",
    desc: "Developing a short retro-style horror game built in Unity with over 8k downloads.",
    link: "https://lazyyeou.itch.io/last-camp",
    image:
      "https://img.itch.zone/aW1nLzIwMDg4MDI2LmpwZw==/original/6LtTLL.jpg",
    year: 2025,
    tech: ["Unity", "C#", "Blender"],
  },
  {
    title: "Talempong Digital",
    desc: "Developing Sumatera Barat traditional music application.",
    link: "#",
    image: TalempongImg,
    year: 2023,
    tech: ["React Native", "Typescript"],
  },
  {
    title: "Parade Wisuda Oktober ITB 2025",
    desc: "Backend developer for the Parade Wisuda Oktober ITB 2025 web app, implementing API routes.",
    link: "https://wisokto2025.wisudaitb.id/",
    image: WisoktoImg,
    year: 2025,
    tech: ["TRPC", "Typescript", "DrizzleORM", "Next.js"],
  },
];

export default function Showcase() {
  return (
    <section id="projects" className="mt-16">
      <h2 className="text-2xl font-semibold mb-8 border-b border-neutral-800 pb-2">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <article
            key={i}
            className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            {/* Thumbnail */}
            <div className="w-full h-44 md:h-40 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-semibold text-lg text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {p.desc}
              </p>

              {/* Tech Tags */}
              {p.tech && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300 select-none"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] font-medium hover:underline"
                >
                  View →
                </a>
                <span className="text-xs text-gray-500">{p.year}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
