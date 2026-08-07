import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion as Motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import useSound from "use-sound";
import { useTheme } from "../context/ThemeContext";

const rotatingWords = ["useful", "playful", "fast", "memorable"];
const floatingLabels = [
  { text: "FULL-STACK", className: "left-[4%] top-[32%] -rotate-6" },
  { text: "MOTION", className: "right-[7%] top-[25%] rotate-6" },
  { text: "DETAILS", className: "right-[4%] bottom-[27%] -rotate-3" },
  { text: "CURIOSITY", className: "left-[7%] bottom-[25%] rotate-4" },
];

function PlayfulWord({ children, accent = false, playLetter, stopLetter }) {
  return (
    <span className="inline-flex whitespace-nowrap" aria-label={children}>
      {[...children].map((letter, index) => (
        <Motion.span
          key={`${letter}-${index}`}
          aria-hidden="true"
          onMouseEnter={() => {
            if (letter !== " ") window.setTimeout(playLetter, 20);
          }}
          onMouseLeave={stopLetter}
          whileHover={{
            y: -14,
            rotate: index % 2 ? 7 : -7,
            scale: 1.08,
            color: accent ? "#FFD76A" : "#809FFF",
          }}
          transition={{ type: "spring", stiffness: 420, damping: 13 }}
          className="inline-block cursor-default"
        >
          {letter === " " ? "\u00A0" : letter}
        </Motion.span>
      ))}
    </span>
  );
}

function InteractiveProjectHero() {
  const { isSoundOn } = useTheme();
  const heroRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [arrowHovered, setArrowHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 65, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 65, damping: 18 });
  const ghostX = useTransform(smoothX, [-0.5, 0.5], [-24, 24]);
  const ghostY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);
  const [playLetter, { stop: stopLetter }] = useSound(
    "/audio/plunger-immediate.mp3",
    { volume: 0.18, soundEnabled: isSoundOn }
  );

  useEffect(() => {
    const timer = window.setInterval(
      () => setWordIndex((current) => (current + 1) % rotatingWords.length),
      1900
    );
    return () => window.clearInterval(timer);
  }, []);

  const followPointer = (event) => {
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;
    mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  return (
    <section
      ref={heroRef}
      onPointerMove={followPointer}
      className="relative min-h-[780px] overflow-hidden bg-[#9FD3EE] px-5 pb-36 pt-28 dark:bg-gradient-to-b dark:from-[#111B27] dark:to-[#203746] sm:min-h-[840px] sm:px-10 sm:pt-36"
    >
      <Motion.p
        style={{ x: ghostX, y: ghostY }}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-[font4] text-[26vw] leading-none tracking-[-0.08em] text-white/[0.09] dark:text-white/[0.035]"
      >
        PROJECTS
      </Motion.p>

      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {floatingLabels.map((label, index) => (
          <Motion.div
            key={label.text}
            drag
            dragConstraints={heroRef}
            dragElastic={0.15}
            whileDrag={{ scale: 1.08, cursor: "grabbing" }}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1, y: [0, index % 2 ? 8 : -8, 0] }}
            transition={{
              opacity: { delay: 0.55 + index * 0.08 },
              scale: { delay: 0.55 + index * 0.08, type: "spring" },
              y: { duration: 4.5 + index, repeat: Infinity, ease: "easeInOut" },
            }}
            className={`pointer-events-auto absolute cursor-grab select-none rounded-full border border-black/10 bg-white/55 px-4 py-2 font-[font2] text-[11px] tracking-[0.14em] shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-[#0D0F12]/45 ${label.className}`}
          >
            {label.text}
          </Motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1020px] flex-col items-center text-center">
        <Motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-[font4] text-[40px] leading-[0.92] tracking-[-0.055em] min-[360px]:text-[46px] sm:mt-12 sm:text-[82px] lg:text-[104px]"
        >
          <span className="block">
            <PlayfulWord playLetter={playLetter} stopLetter={stopLetter}>CODE THAT</PlayfulWord>
          </span>
          <span className="block text-[#4242F9] dark:text-[#809FFF]">
            <PlayfulWord accent playLetter={playLetter} stopLetter={stopLetter}>LOOKS GOOD</PlayfulWord>
          </span>
          <span className="block">
            <PlayfulWord playLetter={playLetter} stopLetter={stopLetter}>& FEELS RIGHT.</PlayfulWord>
          </span>
        </Motion.h1>

        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-9 flex flex-col items-center gap-2 font-[font3] text-[17px] sm:flex-row sm:gap-1"
        >
          <span>I build digital experiences that are</span>
          <span className="relative inline-flex h-8 min-w-28 items-center justify-center overflow-hidden rounded-full bg-[#111820] px-4 font-[font2] text-sm text-white dark:bg-white dark:text-[#111820]">
            <AnimatePresence mode="wait">
              <Motion.span
                key={rotatingWords[wordIndex]}
                initial={{ y: 22, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -22, opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="absolute"
              >
                {rotatingWords[wordIndex]}.
              </Motion.span>
            </AnimatePresence>
          </span>
        </Motion.div>

        <Motion.a
          href="#work"
          onHoverStart={() => setArrowHovered(true)}
          onHoverEnd={() => setArrowHovered(false)}
          onFocus={() => setArrowHovered(true)}
          onBlur={() => setArrowHovered(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.48 }}
          whileHover={{ y: -4 }}
          className="relative mt-10 flex h-16 w-16 items-center justify-center rounded-full border border-black/20 font-[font2] text-lg dark:border-white/25"
          aria-label="Explore projects"
        >
          <Motion.span
            animate={{ y: arrowHovered ? [0, 5, 0] : 0 }}
            transition={{ duration: 0.65, repeat: arrowHovered ? Infinity : 0 }}
          >
            ↓
          </Motion.span>
          <AnimatePresence>
            {arrowHovered && (
              <Motion.span
                initial={{ opacity: 0, scale: 0.7, x: -12 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.75, x: -8 }}
                transition={{ type: "spring", stiffness: 420, damping: 22 }}
                className="absolute left-[calc(100%+14px)] whitespace-nowrap rounded-full bg-[#111820] px-4 py-2 font-[font2] text-xs text-white shadow-lg dark:bg-white dark:text-[#111820]"
              >
                Go to the projects
              </Motion.span>
            )}
          </AnimatePresence>
        </Motion.a>
      </div>

      <svg viewBox="0 0 1440 155" preserveAspectRatio="none" aria-hidden="true" className="absolute -bottom-px left-0 h-24 w-full sm:h-36">
        <path d="M0 98c138-57 270 32 423 13 151-19 217-81 385-55 143 22 218 76 365 56 113-15 181-53 267-47v90H0Z" className="fill-[#DDEEF8] dark:fill-[#141B22]" />
        <path d="M0 127c177-27 287 23 439 14 154-10 244-46 399-27 157 19 241 46 375 27 89-13 155-28 227-22v36H0Z" className="fill-white dark:fill-[#0D0F12]" />
      </svg>
    </section>
  );
}

export default InteractiveProjectHero;
