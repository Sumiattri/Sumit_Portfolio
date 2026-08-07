import { motion as Motion } from "motion/react";
import { FiArrowUpRight, FiClock, FiMapPin } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="relative z-0 -mt-[90px] overflow-hidden bg-white text-[#111820] dark:bg-[#0D0F12] dark:text-white sm:-mt-[120px]">
        <section className="relative overflow-hidden bg-[#9FD3EE] px-5 pb-40 pt-32 dark:bg-gradient-to-b dark:from-[#111B27] dark:to-[#203746] sm:px-10 sm:pb-52 sm:pt-44">
          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 top-24 font-[font4] text-[25vw] leading-none tracking-[-0.08em] text-white/[0.1] dark:text-white/[0.035]"
          >
            HELLO
          </Motion.p>
          <div className="relative z-10 mx-auto max-w-[1020px]">
            <Motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 font-[font2] text-[9px] uppercase tracking-[0.12em] text-[#4242F9] dark:text-[#809FFF] min-[380px]:text-xs min-[380px]:tracking-[0.18em]"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#36B37E]" />
              Available for interesting work
            </Motion.div>
            <Motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.65 }}
              className="mt-8 max-w-[800px] font-[font4] text-[42px] leading-[0.98] tracking-[-0.045em] min-[380px]:text-[48px] sm:text-[78px] lg:text-[92px]"
            >
              Have an idea?<br />Let’s make it <span className="text-[#4242F9] dark:text-[#809FFF]">real.</span>
            </Motion.h1>
            <Motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-7 max-w-[560px] font-[font3] text-[17px] leading-7 opacity-70"
            >
              Tell me what you’re building, what’s getting in the way, or just
              say hello. I read every message.
            </Motion.p>
          </div>

          <svg viewBox="0 0 1440 155" preserveAspectRatio="none" aria-hidden="true" className="absolute -bottom-[3px] left-0 block h-[98px] w-full sm:h-36">
            <path d="M0 92c154-48 261 40 421 16 145-22 209-79 374-55 159 23 218 81 375 58 105-15 181-47 270-41v85H0Z" className="fill-[#DDEEF8] dark:fill-[#141B22]" />
            <path d="M0 126c163-25 279 21 434 14 161-8 249-44 405-25 148 18 238 45 372 27 92-13 159-29 229-23v36H0Z" className="fill-white dark:fill-[#0D0F12]" />
          </svg>
        </section>

        <section className="relative z-10 -mt-1 mx-auto grid max-w-[1020px] gap-12 bg-white px-5 pb-28 pt-14 dark:bg-[#0D0F12] sm:px-10 sm:pb-36 sm:pt-20 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
          <Motion.aside
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="font-[font2] text-sm text-[#4242F9] dark:text-[#809FFF]">Other ways to reach me</p>
              <a href="mailto:sumitattri165@gmail.com" className="group mt-5 flex min-w-0 items-center gap-2 font-[font3] text-base underline decoration-black/20 underline-offset-4 dark:decoration-white/20 sm:text-lg">
                <span className="min-w-0 break-all">sumitattri165@gmail.com</span>
                <FiArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
            <div className="mt-10 space-y-3 font-[font3] text-sm opacity-65 lg:mt-24">
              <p className="flex items-center gap-3"><FiMapPin /> India · working globally</p>
              <p className="flex items-center gap-3"><FiClock /> Usually replies within 24 hours</p>
            </div>
          </Motion.aside>

          <Motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] bg-[#DDEEF8] p-5 shadow-[0_24px_70px_rgba(20,45,60,0.08)] dark:bg-[#1B2532] sm:p-9"
          >
            <ContactForm />
          </Motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
