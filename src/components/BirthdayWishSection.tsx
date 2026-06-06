"use client";

import { motion } from "framer-motion";

const FRIEND_NAME = "Kuku";

const lanterns = [
  { left: "10%", delay: 0 },
  { left: "20%", delay: 1 },
  { left: "35%", delay: 2 },
  { left: "50%", delay: 3 },
  { left: "65%", delay: 4 },
  { left: "80%", delay: 5 },
  { left: "90%", delay: 6 },
];

export default function BirthdayWishSection() {
  return (
    <section
      id="birthday"
      className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
      justify-center
      px-6
      "
    >
      {/* Sunrise */}

      <div className="absolute inset-0">

        <div
          className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[1000px]
          h-[1000px]
          rounded-full
          blur-[120px]
          opacity-40
          "
          style={{
            background:
              "radial-gradient(circle,#f6c177,transparent 70%)",
          }}
        />

      </div>

      {/* Stars */}

      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="star absolute"
          style={{
            left: `${5 + i * 5}%`,
            top: `${5 + (i % 6) * 10}%`,
          }}
        />
      ))}

      {/* Lanterns */}

      {lanterns.map((lantern, i) => (
        <motion.div
          key={i}
          className="
          absolute
          bottom-0
          text-5xl
          "
          style={{
            left: lantern.left,
          }}
          animate={{
            y: [-50, -1000],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            delay: lantern.delay,
          }}
        >
          🏮
        </motion.div>
      ))}

      {/* Content */}

      <div
        className="
        relative
        z-10
        max-w-5xl
        mx-auto
        text-center
        "
      >
        <motion.p
          className="
          font-hand
          text-5xl
          md:text-7xl
          text-[#d9a5a5]
          "
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
        >
          One Final Wish...
        </motion.p>

        <motion.h1
          className="
          mt-8
          font-display
          text-6xl
          md:text-8xl
          lg:text-[10rem]
          leading-none
          "
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          Happy Birthday
          <br />

          <span className="text-[#d9a5a5] italic">
            {FRIEND_NAME}
          </span>
        </motion.h1>

        <motion.p
          className="
          mt-16
          max-w-3xl
          mx-auto
          text-xl
          md:text-3xl
          leading-loose
          text-[#d8cfc5]
          "
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: .5,
          }}
        >
          I hope this year gives you
          more reasons to smile.

          <br />
          <br />

          More adventures.

          <br />
          <br />

          More unforgettable memories.

          <br />
          <br />

          More happiness than you've
          ever imagined.

          <br />
          <br />

          Because nobody deserves it
          more than you.
        </motion.p>

        <motion.div
          className="
          mt-20
          font-hand
          text-7xl
          text-[#d9a5a5]
          "
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
        >
          ❤️ Jagu
        </motion.div>
      </div>
    </section>
  );
}