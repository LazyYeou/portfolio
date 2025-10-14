import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mt-12 pb-8">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-gray-300 max-w-xl">I’m open to internships, collaborations, and part-time roles. Reach out — I usually reply within a few days.</p>

      <div className="mt-6 flex items-center gap-4">
        <a href="https://github.com/yourusername" className="text-gray-300 hover:text-white"><FaGithub size={20}/></a>
        <a href="https://linkedin.com/in/yourusername" className="text-gray-300 hover:text-white"><FaLinkedin size={20}/></a>
        <a href="mailto:you@example.com" className="text-gray-300 hover:text-white"><FaEnvelope size={20}/></a>
      </div>
    </section>
  );
}
