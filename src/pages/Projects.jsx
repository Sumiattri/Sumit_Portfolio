import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";
import { useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import gsap from "gsap";
import Lenis from "lenis";
// import DotGrid from "../components/background/DotGrid";
import LightRays from "../components/background/LightRays";

function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const { darkMode } = useTheme();

  const headingRef = useRef(null);
  const [text] = useState("Code. Design. Ship. Repeat.");

  useEffect(() => {
    const chars = text.split("");
    headingRef.current.innerHTML = ""; // Clear before typing

    chars.forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = 0;
      headingRef.current.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        duration: 0.05,
        delay: i * 0.1,
        ease: "power1.inOut",
      });
    });
  }, [text]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div
      styles={{}}
      ref={container}
      className={`relative scrollbar-hide scroll-smooth hide-scrollbar -mt-[220px] pt-[30vh] ${
        darkMode ? "dark" : ""
      } dark:bg-[#0D0F12] bg-white `}
    >
      <div
        style={{ width: "100%", height: "600px", position: "fixed" }}
        className={`-mt-37 dark:block hidden `}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="text-white md:text-5xl sm:text-3xl text-[20px] sticky top-35 font-[font1] sm:h-90 h-40 w-full flex items-center justify-center ">
        <h1 ref={headingRef} className="dark:text-white text-black">
          {" "}
        </h1>
      </div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <ProjectCard
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}

export default Projects;
