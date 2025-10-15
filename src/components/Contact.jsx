import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mt-12 pb-8">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-gray-300 max-w-xl">Got a project idea, feedback, or just want to chat about code and games? Don’t hesitate to reach out! I love connecting with other developers, learners, and creators. </p>

      <div className="mt-6 flex items-center gap-4">
        <a href="https://github.com/lazyyeou" className="text-gray-300 hover:text-white"><FaGithub size={20}/></a>
        <a href="https://linkedin.com/in/mridwannf" className="text-gray-300 hover:text-white"><FaLinkedin size={20}/></a>
        <a href="mailto:ridu2504@gmail.com" className="text-gray-300 hover:text-white"><FaEnvelope size={20}/></a>
      </div>
    </section>
  );
}
