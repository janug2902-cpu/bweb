"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThreeLettersSection() {
  const [active, setActive] = useState<number | null>(null);

  const letters = [
    {
      title: "Past",
      emoji: "📜",
      text: `
I still remember the first version of us.

Back when we had no idea how important
we would become in each other's lives.

Some people appear in your story for a chapter.

You stayed.
      `,
    },

    {
      title: "Present",
      emoji: "❤️",
      text: `
Today, you're one of the people I trust most.

You are part of my favorite memories,
my funniest conversations,
and some of my happiest moments.

Life genuinely became better with you in it.
      `,
    },

    {
      title: "Future",
      emoji: "✨",
      text: `
Years from now,

I hope you're living the life you've always dreamed about.

I hope you're smiling more,
laughing more,
and accomplishing everything you've worked for.

You deserve that happiness.
      `,
    },
  ];

  return (
    <section className="section">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="font-hand text-4xl text-[#d9a5a5]">
            Through Time
          </p>

          <h2 className="font-display text-5xl md:text-7xl mt-4">
            Three Letters
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {letters.map((letter, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              onClick={() => setActive(index)}
              className="
              cursor-pointer
              bg-[#e8d5a6]
              rounded-2xl
              p-10
              text-center
              text-[#5f4030]
              shadow-2xl
              "
            >
              <div className="text-6xl mb-4">
                {letter.emoji}
              </div>

              <h3 className="font-display text-4xl">
                {letter.title}
              </h3>
            </motion.div>
          ))}

        </div>

        <AnimatePresence>

          {active !== null && (
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 40,
              }}
              className="
              mt-16
              max-w-3xl
              mx-auto
              letter-paper
              "
            >
              <h3 className="font-hand text-4xl mb-8">
                Dear Kuku,
              </h3>

              <p
                className="
                whitespace-pre-line
                text-lg
                leading-loose
                text-[#5f4030]
                "
              >
                {letters[active].text}
              </p>

              <div className="text-right mt-10">
                <span className="signature">
                  Janu ❤️
                </span>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}