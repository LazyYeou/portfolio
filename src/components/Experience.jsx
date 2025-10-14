import React from "react";

const items = [
  { date: "Jan 2025 — Apr 2025", title: "Fullstack Developer (contract)", org: "Ever Tech", desc: "Worked on frontend features & backend endpoints." },
  { date: "Jul 2025 — Present", title: "Software Dev Intern", org: "2cW", desc: "Contributed to production services & tests." },
  { date: "2023 — present", title: "BSc Computer Science", org: "Your University", desc: "Ongoing studies and personal projects." },
];

export default function Experience() {
  return (
    <section id="experience" className="mt-12 mb-12">
      <h2 className="text-2xl font-semibold mb-6">Experience & Education</h2>

      <div className="space-y-6">
        {items.map((it, idx) => (
          <div key={idx} className="relative pl-8">
            <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-neutral-950" />
            <div className="text-sm text-gray-400">{it.date}</div>
            <div className="font-semibold">{it.title} — <span className="text-gray-300 font-medium">{it.org}</span></div>
            <div className="text-gray-300 text-sm mt-1">{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
