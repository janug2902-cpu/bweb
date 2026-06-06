"use client";

import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <section
      className="
      py-40
      px-6
      text-center
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <p
          className="
          font-hand
          text-5xl
          text-[#d9a5a5]
          "
        >
          To Be Continued...
        </p>

        <p
          className="
          mt-8
          text-xl
          text-[#d8cfc5]
          "
        >
          Because the best memories
          are still waiting to be made.
        </p>

        <div className="mt-16 text-6xl">
          ❤️
        </div>
      </motion.div>
    </section>
  );
}