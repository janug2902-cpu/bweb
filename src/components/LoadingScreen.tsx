"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
onComplete: () => void;
}

export default function LoadingScreen({
onComplete,
}: Props) {
const [digits, setDigits] = useState([
"",
"",
"",
"",
]);

const [error, setError] =
useState(false);

const [phase, setPhase] = useState<
"locked" |
"opening" |
"letter" |
"revealing"

> ("locked");

const paperRef =
useRef<HTMLAudioElement>(null);

const handleChange = (
value: string,
index: number
) => {
if (!/^\d?$/.test(value)) return;

const updated = [...digits];

updated[index] = value;

setDigits(updated);

if (value && index < 3) {
  const next =
    document.getElementById(
      `digit-${index + 1}`
    );

  if (next) {
    (
      next as HTMLInputElement
    ).focus();
  }
}


};

useEffect(() => {
if (
digits.every(
(digit) => digit.length === 1
)
) {
setTimeout(() => {
unlock();
}, 300);
}
}, [digits]);

const unlock = () => {
const code = digits.join("");

if (code !== "0701") {
  setError(true);

  setDigits([
    "",
    "",
    "",
    "",
  ]);

  const first =
    document.getElementById(
      "digit-0"
    );

  if (first) {
    (
      first as HTMLInputElement
    ).focus();
  }

  setTimeout(() => {
    setError(false);
  }, 2500);

  return;
}

paperRef.current?.play();

setPhase("opening");

setTimeout(() => {
  setPhase("letter");
}, 1800);

setTimeout(() => {
  setPhase("letter");
}, 1800);

setTimeout(() => {
  onComplete();
}, 7600);

};

return ( <div className="fixed inset-0 z-[99999] bg-[#05060d] overflow-hidden">


  <audio
    ref={paperRef}
    src="/sounds/paper.mp3"
  />

  {/* STARS */}

  {Array.from({
    length: 25,
  }).map((_, i) => (
    <div
      key={i}
      className="star absolute"
      style={{
        left: `${
          (i * 13) % 100
        }%`,
        top: `${
          (i * 17) % 100
        }%`,
      }}
    />
  ))}

  <AnimatePresence>

    {phase === "locked" && (
      <motion.div
        className="
        h-full
        flex
        items-center
        justify-center
        px-6
        "
        exit={{
          opacity: 0,
        }}
      >
        <div className="text-center max-w-xl w-full">

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="mb-8"
          >
            <div className="envelope-wrapper">
              <div className="paper" />
              <div className="envelope-body" />
              <div className="envelope-flap" />
            </div>
          </motion.div>

          <h1
  className="
  font-display
  loading-title
  text-[#f5ede2]
  "
>
            For Kuku
          </h1>

          <p
            className="
            mt-4
            text-[#d8cfc5]
            "
          >
            Someone left a letter for you
          </p>

          <div
            className="
            flex
            justify-center
            gap-3
            mt-8
            "
          >
            {[0, 1, 2, 3].map(
              (index) => (
               <input
  key={index}
  id={`digit-${index}`}
  type="tel"
  inputMode="numeric"
  pattern="[0-9]*"
  autoComplete="off"
  maxLength={1}
  value={digits[index]}
  onChange={(e) =>
    handleChange(
      e.target.value,
      index
    )
  }
  className={`pin-box ${
    error
      ? "border-red-500"
      : ""
  }`}
/>
              )
            )}
          </div>

          <AnimatePresence>

            {error && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                className="
                mt-6
                text-red-400
                "
              >
                💔 That's not the
                date I'm thinking
                of.
                <br />
                Try again.
              </motion.div>
            )}

          </AnimatePresence>

          <p
            className="
            mt-6
            text-xs
            tracking-[0.3em]
            uppercase
            text-[#d9a5a5]
            "
          >
            Enter A Special Date
          </p>

        </div>
      </motion.div>
    )}

  </AnimatePresence>

  {/* OPENING */}

   {phase === "opening" && (
  <motion.div
    className="
    absolute
    inset-0
    flex
    items-center
    justify-center
    "
  >
    <div className="envelope-wrapper">

      <motion.div
  className="paper"
  initial={{
    y: 0,
    scale: 0.95,
  }}
  animate={{
    y: -140,
    scale: 1,
  }}
  transition={{
    duration: 1.4,
    ease: "easeInOut",
  }}
/>

      <div className="envelope-body" />

      <motion.div
  className="envelope-flap"
  initial={{
    rotateX: 0,
    y: 0,
  }}
  animate={{
    rotateX: -165,
    y: -6,
  }}
  transition={{
    duration: 1,
    ease: "easeInOut",
  }}
  style={{
    transformOrigin: "top center",
  }}
/>

    </div>
  </motion.div>
)}  

  {/* LETTER */}

  {phase === "letter" && (
    <motion.div
      className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      px-6
      "
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <motion.div
        initial={{
          y: 300,
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.6,
        }}
        className="
        vintage-letter
        max-w-3xl
        p-10
        md:p-14
        "
      >
        <h2
          className="
          text-4xl
          md:text-5xl
          font-display
          mb-8
          "
        >
          Dear Kuku,
        </h2>

        <motion.p
          className="
          text-lg
          md:text-xl
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
          Before the wishes...
          <br />
          Before the cake...
          <br />
          Before another year
          begins...
          <br />
          <br />
          I wanted to remind
          you how loved you
          are.
          <br />
          <br />
          Happy Birthday ❤️
        </motion.p>
      </motion.div>
    </motion.div>
  )}

  {/* REVEAL */}

  {phase === "revealing" && (
    <motion.div
      className="
      absolute
      inset-0
      bg-white
      "
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    />
  )}
</div>


);
}
