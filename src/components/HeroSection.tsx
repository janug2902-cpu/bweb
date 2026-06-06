"use client";

import { motion } from "framer-motion";

const FRIEND_NAME = "Kuku";

const stars = [
  { left: "10%", top: "20%" },
  { left: "20%", top: "60%" },
  { left: "30%", top: "15%" },
  { left: "40%", top: "75%" },
  { left: "55%", top: "25%" },
  { left: "65%", top: "55%" },
  { left: "75%", top: "18%" },
  { left: "85%", top: "70%" },
  { left: "95%", top: "40%" },
  { left: "15%", top: "85%" },
  { left: "45%", top: "10%" },
  { left: "72%", top: "90%" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
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
      {/* Aurora */}

      <div className="aurora" />

      {/* Stars */}

      {stars.map((star, i) => (
        <div
          key={i}
          className="star absolute"
          style={{
            left: star.left,
            top: star.top,
          }}
        />
      ))}

      {/* Moon */}

      <div
        className="
        absolute
        top-24
        right-20
        w-32
        h-32
        rounded-full
        bg-white/10
        blur-xl
        "
      />

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
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
          font-hand
          text-5xl
          md:text-7xl
          text-[#d9a5a5]
          "
        >
          Dear {FRIEND_NAME},
        </motion.p>

        <motion.h1
          className="
          mt-8
          font-display
          text-6xl
          md:text-8xl
          lg:text-[9rem]
          leading-none
          "
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .4,
            duration: 1,
          }}
        >
          Before We Celebrate
          <br />

          <span className="italic text-[#d9a5a5]">
            Your Birthday
          </span>
        </motion.h1>

        <motion.p
          className="
          mt-12
          max-w-3xl
          mx-auto
          text-xl
          md:text-2xl
          text-[#d8cfc5]
          leading-loose
          "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
        >
          Before the cake.
          <br />

          Before the candles.
          <br />

          Before another year begins.
          <br />
          <br />

          There is a story I want to tell.
        </motion.p>

        <motion.button
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
          }}
          onClick={() =>
            document
              .getElementById("intro")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
          className="
          mt-14
          px-10
          py-5
          rounded-full
          bg-[#e8d5a6]
          text-[#5f4030]
          text-lg
          font-semibold
          shadow-2xl
          "
        >
          Begin The Story →
        </motion.button>
      </div>
    </section>
  );
}