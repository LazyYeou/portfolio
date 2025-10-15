import React from "react";
import { motion } from "framer-motion";
import profilePic from "../public/profile_pic.jpg";

export default function Hero() {
  return (
    <section className="pt-8 pb-20 text-white">
      <div className="md:flex md:items-center md:justify-between gap-8">
        {/* Left Text Section */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            ABOUT ME{" "}
            <motion.span
              className="text-[var(--accent)]"
              whileHover={{
                textShadow: "0px 0px 8px var(--accent)",
                scale: 1.05,
              }}
            />
          </motion.h1>

          {/* About Box */}
          <motion.div
            className="mt-6 bg-black/30 border border-white/10 backdrop-blur-sm rounded-lg p-5 shadow-lg"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(255, 255, 255, 0.3)",
              borderColor: "rgba(255, 255, 255, 0.4)",
              y: -4,
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <p className="text-gray-300 leading-relaxed">
              Hi, I'm <b>Muhammad Ridwan Nasir Firdaus</b> aka <b>LazyYeou</b>, a Bandung Institute of Technology first year student and developer passionate about creating impactful software. My main interests lie in <b>software engineering, artificial intelligence, and game development.</b>
            </p>
            <br />
            <p className="text-gray-300 leading-relaxed">
              I enjoy exploring how code can bring ideas to life—from building functional web apps to developing engaging games. I'm always eager to learn new technologies and improve my skills through hands-on projects and collaboration.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="mt-6 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="inline-block px-5 py-2 border border-neutral-700 rounded-md text-sm text-gray-300 hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              See projects
            </motion.a>

            <motion.a
              href="#contact"
              className="inline-block px-5 py-2 border border-neutral-700 rounded-md text-sm text-gray-300 hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Profile Image */}
        <motion.div
          className="mt-12 md:mt-0 flex-shrink-0 relative"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="w-52 h-52 rounded-full overflow-hidden border-4 border-neutral-900"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(255, 255, 255, 0.6)",
              rotate: 2,
            }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img
              src={profilePic}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
