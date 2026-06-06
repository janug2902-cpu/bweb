"use client";

import { motion } from "framer-motion";

export default function LetterSection() {
  return (
    <section
      id="letter"
      className="
      relative
      py-40
      px-6
      overflow-hidden
      "
    >
      <div className="letter-glow top-20 left-1/2 -translate-x-1/2" />

      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-24">

          <p
            className="
            font-hand
            text-5xl
            text-[#d9a5a5]
            "
          >
            A Letter For You
          </p>

          <h2
            className="
            font-display
            text-6xl
            md:text-8xl
            mt-6
            "
          >
            Straight From My Heart
          </h2>

        </div>

        {/* Wax Seal */}

        <motion.div
          initial={{
            scale: 0,
            rotate: -180,
          }}
          whileInView={{
            scale: 1,
            rotate: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          flex
          justify-center
          mb-10
          "
        >
          <div className="wax-seal">
            ❤️
          </div>
        </motion.div>

        {/* Letter */}

        <motion.div
          initial={{
            opacity: 0,
            rotateX: -90,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            rotateX: 0,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
          vintage-letter
          p-8
          md:p-16
          "
        >
          <div className="text-right mb-12">

            <p className="text-xl">
              7 June
            </p>

            <p className="text-sm opacity-60">
              For Kuku ❤️
            </p>

          </div>

          <h3
            className="
            font-hand
            text-5xl
            mb-12
            "
          >
            Dear Kuku,
          </h3>

          <div
            className="
            text-lg
            md:text-2xl
            leading-loose
            space-y-8
            "
          >
            <p>
              There are some people
              who simply pass through life.
            </p>

            <p>
              Then there are people
              who become part of your story.
            </p>

            <p>
              You became part of mine.
            </p>

            <p>
              Thank you for the laughs,
              the conversations,
              the memories,
              and the countless moments
              that made life feel brighter.
            </p>

            <p>
              Thank you for being someone
              I can trust,
              someone I can rely on,
              and someone I genuinely
              cherish having in my life.
            </p>

            <p>
              On your birthday,
              I hope you realize
              how loved,
              appreciated,
              and important you are.
            </p>

            <p>
              You deserve every happiness,
              every dream,
              and every beautiful thing
              waiting for you in the future.
            </p>

            <p>
              Never stop being you.
            </p>
          </div>

          <div className="mt-20 text-right">

            <p className="text-2xl mb-4">
              With Love,
            </p>

            <div
              className="
              font-hand
              text-7xl
              text-[#d9a5a5]
              "
            >
              Janu ❤️
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}