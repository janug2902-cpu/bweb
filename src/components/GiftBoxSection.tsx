"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function GiftBoxSection() {
  const [opened, setOpened] = useState(false);

  return (
    <section
      className="
      relative
      py-40
      px-6
      overflow-hidden
      "
    >
      <div className="max-w-5xl mx-auto text-center">

        <p
          className="
          font-hand
          text-5xl
          text-[#d9a5a5]
          "
        >
          One Last Surprise
        </p>

        <h2
          className="
          font-display
          text-6xl
          md:text-8xl
          mt-6
          mb-20
          "
        >
          A Gift For You
        </h2>

        <AnimatePresence mode="wait">

          {!opened ? (
            <motion.div
              key="gift"
              className="
              flex
              justify-center
              "
              exit={{
                opacity: 0,
                scale: .8,
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: .95,
                }}
                onClick={() => setOpened(true)}
                className="
                relative
                cursor-pointer
                "
              >
                {/* Glow */}

                <div
                  className="
                  absolute
                  inset-0
                  rounded-3xl
                  blur-3xl
                  bg-pink-400/30
                  scale-150
                  "
                />

                {/* Box */}

                <div
                  className="
                  relative
                  w-64
                  h-64
                  rounded-3xl
                  bg-gradient-to-br
                  from-[#d9a5a5]
                  to-[#ba7f7f]
                  shadow-2xl
                  "
                >
                  {/* Ribbon Vertical */}

                  <div
                    className="
                    absolute
                    left-1/2
                    top-0
                    -translate-x-1/2
                    w-10
                    h-full
                    bg-[#f4e3b2]
                    "
                  />

                  {/* Ribbon Horizontal */}

                  <div
                    className="
                    absolute
                    top-1/2
                    left-0
                    -translate-y-1/2
                    w-full
                    h-10
                    bg-[#f4e3b2]
                    "
                  />

                  {/* Bow */}

                  <div
                    className="
                    absolute
                    left-1/2
                    top-0
                    -translate-x-1/2
                    -translate-y-8
                    text-7xl
                    "
                  >
                    🎀
                  </div>
                </div>

                <p
                  className="
                  mt-10
                  text-[#d8cfc5]
                  "
                >
                  Click to open
                </p>

              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              initial={{
                opacity: 0,
                scale: .7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="
              relative
              max-w-4xl
              mx-auto
              "
            >
              {/* Particles */}

              {Array.from({ length: 25 }).map(
                (_, i) => (
                  <motion.div
                    key={i}
                    className="
                    absolute
                    text-pink-300
                    text-3xl
                    "
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    animate={{
                      x:
                        Math.cos(i) *
                        250,
                      y:
                        Math.sin(i) *
                        250,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 2,
                    }}
                  >
                    ❤️
                  </motion.div>
                )
              )}

              {/* Message */}

              <div
                className="
                vintage-letter
                p-12
                md:p-20
                "
              >
                <h3
                  className="
                  font-display
                  text-5xl
                  md:text-7xl
                  "
                >
                  The Real Gift
                </h3>

                <p
                  className="
                  mt-10
                  text-xl
                  md:text-2xl
                  leading-loose
                  text-[#5f4030]
                  "
                >
                  The real gift
                  isn't this website.

                  <br />
                  <br />

                  It isn't the photos.

                  <br />
                  <br />

                  It isn't the animations.

                  <br />
                  <br />

                  It's simply the fact
                  that I got to meet
                  someone like you.

                  <br />
                  <br />

                  Thank you for every
                  memory, every laugh,
                  every conversation,
                  and every moment.

                  <br />
                  <br />

                  You mean more than
                  you probably realize.
                </p>

                <div
                  className="
                  mt-16
                  font-hand
                  text-7xl
                  text-[#d9a5a5]
                  "
                >
                  ❤️ Janu
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}