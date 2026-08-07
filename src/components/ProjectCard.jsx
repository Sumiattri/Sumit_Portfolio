import { useRef } from "react";
import { motion as Motion, useMotionValue, useSpring } from "motion/react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import useSound from "use-sound";
import { useTheme } from "../context/ThemeContext";

function ProjectCard({ index, title, description, src, color, git, live, type, stack = [] }) {
  const { isSoundOn } = useTheme();
  const stageRef = useRef(null);
  const rawRotateX = useMotionValue(5);
  const rawRotateY = useMotionValue(index % 2 === 0 ? -8 : 8);
  const rotateX = useSpring(rawRotateX, { stiffness: 130, damping: 18 });
  const rotateY = useSpring(rawRotateY, { stiffness: 130, damping: 18 });
  const [playHover] = useSound("/audio/rising-pops.mp3", { volume: 0.18, soundEnabled: isSoundOn });
  const reversed = index % 2 === 1;

  const movePreview = (event) => {
    const bounds = stageRef.current?.getBoundingClientRect();
    if (!bounds) return;
    rawRotateY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 12);
    rawRotateX.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -9);
  };

  const resetPreview = () => {
    rawRotateX.set(5);
    rawRotateY.set(reversed ? 8 : -8);
  };

  return (
    <Motion.article
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="grid items-center gap-9 lg:grid-cols-2 lg:gap-16"
    >
      <div className={reversed ? "lg:order-2" : ""}>
        <div className="flex items-center gap-4 font-[font2] text-xs uppercase tracking-[0.18em] opacity-55">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-10 bg-current" />
          <span>{type}</span>
        </div>
        <h3 className="mt-5 font-[font4] text-[40px] leading-none tracking-[-0.035em] sm:text-[54px]">{title}</h3>
        <p className="mt-6 max-w-[500px] font-[font3] text-[15px] leading-6 opacity-70">{description}</p>
        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-[font2] text-xs" aria-label="Technologies">
          {stack.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex items-center gap-3">
          <a href={live} target="_blank" rel="noreferrer" onMouseEnter={playHover} className="group/button inline-flex items-center gap-3 rounded-full bg-[#111820] px-5 py-3 font-[font2] text-sm text-white dark:bg-white dark:text-[#111820]">
            View project
            <FiArrowUpRight className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
          </a>
          <a href={git} target="_blank" rel="noreferrer" onMouseEnter={playHover} aria-label={`${title} source code`} className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 transition-all hover:-translate-y-1 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">
            <FiGithub className="text-lg" />
          </a>
        </div>
      </div>

      <div
        ref={stageRef}
        onPointerMove={movePreview}
        onPointerLeave={resetPreview}
        className={`project-stage relative min-h-[390px] overflow-hidden rounded-[36px] sm:min-h-[500px] ${reversed ? "lg:order-1" : ""}`}
        style={{ backgroundColor: color }}
      >
        <div className="absolute left-[8%] top-[12%] h-32 w-32 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm" />
        <Motion.div animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }} transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }} className="absolute right-[9%] top-[8%] h-14 w-14 rounded-[16px] bg-[#FFD76A] shadow-xl" />
        <Motion.div animate={{ y: [0, 13, 0], x: [0, -6, 0] }} transition={{ duration: 5.2 + index, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[10%] left-[7%] h-10 w-10 rounded-full bg-[#809FFF] shadow-xl" />

        <Motion.a
          href={live}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${title}`}
          style={{ rotateX, rotateY, transformPerspective: 1100 }}
          whileHover={{ scale: 1.025 }}
          className="absolute inset-x-[9%] top-[17%] block origin-center rounded-2xl bg-[#111820] p-2.5 pb-3 shadow-[0_35px_70px_rgba(0,0,0,0.35)] sm:inset-x-[8%] sm:top-[14%] sm:p-3"
        >
          <div className="mb-2 flex h-5 items-center gap-1.5 px-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B6B]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFD166]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#78D59A]" />
            <span className="ml-2 h-2.5 flex-1 rounded-full bg-white/10" />
          </div>
          <div className="overflow-hidden rounded-lg bg-white">
            <img src={src} alt={`${title} interface preview`} loading="lazy" className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.035]" />
          </div>
        </Motion.a>

        <Motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-white/60">
          <FiArrowUpRight className="text-xl text-white" />
        </Motion.div>
      </div>
    </Motion.article>
  );
}

export default ProjectCard;
