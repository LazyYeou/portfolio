import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";

export default function App() {
  const [theme, setTheme] = useState("dark"); // keep if you want toggle later

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-neutral-950 text-white" : "bg-white text-black"}`}>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 md:px-8 py-12">
        <Hero />
        <TechStack />
        <Showcase />
        {/* <Experience /> */}
        <Contact />
      </main>
      <footer className="text-center text-sm text-gray-400 py-8 border-t border-neutral-900">
        © {new Date().getFullYear()} Your Name — Built with React & Tailwind
      </footer>
    </div>
  );
}
