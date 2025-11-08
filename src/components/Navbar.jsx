import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/20">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold tracking-wide">LazyYeou</div>
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <div className="md:hidden text-gray-300 text-sm">Menu</div>
      </nav>
    </header>
  );
}
