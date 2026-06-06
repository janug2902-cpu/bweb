"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { memories } from "@/data/memories";
import MemoryLightbox from "./MemoryLightbox";

const rotations = [
  "-rotate-6",
  "rotate-4",
  "-rotate-3",
  "rotate-5",
  "-rotate-4",
  "rotate-3",
  "-rotate-5",
  "rotate-6",
];

export default function ScrapbookSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="scrapbook"
      className="
      relative
      py-40
      px-6
      overflow-hidden
      "
    >
      {/* Decorative Background */}

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-40">
          <p
            className="
            font-hand
            text-5xl
            text-[#d9a5a5]
            "
          >
            Our Memory Wall
          </p>

          <h2
            className="
            mt-6
            font-display
            text-6xl
            md:text-8xl
            "
          >
            Pieces Of Us
          </h2>

          <p
            className="
            mt-6
            max-w-2xl
            mx-auto
            text-[#d8cfc5]
            text-lg
            "
          >
            Every picture here is a tiny reminder
            that life became a little brighter
            because you were in it.
          </p>
        </div>

        {/* Polaroids */}
<div
  className="
  grid
  md:grid-cols-2
  lg:grid-cols-3
  gap-16
  mt-32
  "
>
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              drag
              dragElastic={0.12}
              dragMomentum={false}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                zIndex: 999,
              }}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.04,
              }}
              onClick={() => setSelected(memory)}
              className={`
                cursor-pointer
                relative
                ${rotations[index % rotations.length]}
              `}
            >
              {/* Tape */}

              <div
                className="
                absolute
                left-1/2
                -translate-x-1/2
                -top-3
                w-20
                h-8
                bg-[#efe2c880]
                backdrop-blur-sm
                rotate-[-6deg]
                z-20
                "
              />

              {/* Polaroid */}

              <div
                className="
                polaroid-card
                bg-[#faf7f0]
                p-4
                rounded-md
                shadow-2xl
                "
              >
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="
                  w-full
                  h-[340px]
                  object-cover
                  rounded
                  "
                />

                <div className="text-center mt-5">
                  <h3
                    className="
                    text-[#5f4030]
                    font-semibold
                    text-lg
                    "
                  >
                    {memory.title}
                  </h3>

                  <p
                    className="
                    mt-2
                    text-[#6d5747]
                    font-hand
                    text-2xl
                    "
                  >
                    {memory.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sticky Note */}

        <motion.div
          initial={{
            opacity: 0,
            rotate: -8,
          }}
          whileInView={{
            opacity: 1,
            rotate: -4,
          }}
          viewport={{
            once: true,
          }}
          className="
          mt-32
          max-w-xl
          mx-auto
          bg-[#efe2c8]
          text-[#5f4030]
          p-10
          shadow-2xl
          "
        >
          <p
            className="
            font-hand
            text-4xl
            "
          >
            Sometimes the best memories
            are the ones we never planned.
          </p>

          <p className="mt-6">
            Somehow, most of mine include you.
          </p>
        </motion.div>

      </div>

      {/* Lightbox */}

      <MemoryLightbox
        open={!!selected}
        image={selected?.image || ""}
        title={selected?.title || ""}
        caption={selected?.caption || ""}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}