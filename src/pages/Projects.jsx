import { motion as Motion } from "motion/react";
import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";
import InteractiveProjectHero from "../components/InteractiveProjectHero";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

function Projects() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="relative z-0 -mt-[90px] min-h-screen overflow-hidden bg-white text-[#111820] dark:bg-[#0D0F12] dark:text-white sm:-mt-[120px]">
        <InteractiveProjectHero />

        <section id="work" className="relative z-10 -mt-1 mx-auto max-w-[1100px] scroll-mt-24 bg-white px-5 pb-28 pt-20 dark:bg-[#0D0F12] sm:px-10 sm:pb-36 sm:pt-28">
          <div className="mb-16">
            <div>
              <p className="font-[font2] text-sm text-[#4242F9] dark:text-[#809FFF]">Selected work · 2024—present</p>
              <h2 className="mt-3 max-w-[620px] font-[font4] text-4xl leading-tight tracking-[-0.035em] sm:text-6xl">A closer look at what I’ve shipped.</h2>
            </div>
          </div>

          <div className="flex flex-col gap-16 sm:gap-24">
            {projects.map((project, index) => <ProjectCard key={project.title} {...project} index={index} />)}
          </div>

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mt-28 overflow-hidden rounded-[32px] bg-[#DDEEF8] px-7 py-14 text-center dark:bg-[#1B2532] sm:px-14 sm:py-20"
          >
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#90CDEB] opacity-60 blur-2xl" />
            <div className="absolute -bottom-12 -right-8 h-36 w-36 rounded-full bg-[#809FFF] opacity-30 blur-2xl" />
            <p className="relative font-[font2] text-sm text-[#4242F9] dark:text-[#809FFF]">Still curious?</p>
            <h2 className="relative mx-auto mt-3 max-w-[630px] font-[font4] text-3xl leading-tight sm:text-5xl">There’s always another experiment brewing.</h2>
            <a href="https://github.com/Sumiattri" target="_blank" rel="noreferrer" className="relative mt-8 inline-flex rounded-full bg-[#111820] px-6 py-3.5 font-[font2] text-sm text-white transition-transform hover:-translate-y-1 dark:bg-white dark:text-[#111820]">Explore my GitHub ↗</a>
          </Motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
