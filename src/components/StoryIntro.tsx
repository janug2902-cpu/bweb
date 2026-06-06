"use client";

import { motion } from "framer-motion";

export default function StoryIntro() {
  return (
    <section
      id="intro"
      className="
      section
      max-w-5xl
      mx-auto
      text-center
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <p className="font-hand text-4xl text-[#d9a5a5] mb-6">
          A Small Disclaimer
        </p>

        <h2
          className="
          font-display
          text-5xl
          md:text-7xl
          mb-10
          "
        >
          This Isn't A Birthday Website
        </h2>

        <p
          className="
          max-w-3xl
          mx-auto
          text-xl
          md:text-2xl
          leading-loose
          text-[#d8cfc5]
          "
        >
          This is a collection of memories.

          A collection of moments.

          A collection of reasons
          why your existence has made
          life better for the people around you.

          Especially mine.
        </p>
      </motion.div>
    </section>
  );
}