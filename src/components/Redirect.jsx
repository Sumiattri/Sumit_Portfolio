import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import useSound from "use-sound";
import { useState } from "react";

function Redirect() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const { darkMode, isSoundOn } = useTheme();
  const [playHover, { stop }] = useSound("/audio/rising-pops.mp3", {
    volume: 0.3,
    soundEnabled: isSoundOn,
  });
  const [playHover2, { stop: stop3 }] = useSound(
    "/audio/plunger-immediate.mp3",
    {
      volume: 0.18,
      soundEnabled: isSoundOn,
    }
  );

  const ARROW_DELAY = 205;

  const tech_stack = [
    "Javascript",
    "React",
    "Tailwindcss",
    "Next JS",
    "HTML",
    "CSS",
    "Framer Motion",
    "GSAP",
    "Express",
    "Mongodb",
    "NodeJS",
    "Qdrantdb",
    "Cloudinary",
  ];

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } dark:bg-[#0D0F12] bg-white relative  sm:h-97 h-[calc(100vh-300px)] sm:pt-10 pt-20 text-white `}
    >
      <div className="absolute md:block hidden lg:right-[8%] right-[0%] h-40 lg:w-110 w-80 top-15 z-1000 font-[font2] ">
        <p className="text-[#FF1B80] tracking-wider "> MY TOOLBOX</p>
        <div className=" w-full pt-8 flex gap-x-5 gap-y-3  flex-wrap cursor-pointer">
          {tech_stack.map((item, index) => {
            return (
              <div
                key={index}
                onMouseEnter={() => {
                  setTimeout(() => {
                    playHover2();
                  }, [20]);
                }}
                onMouseLeave={() => {
                  stop3();
                }}
                className="relative py-[6px] px-2  "
              >
                <div className="relative z-0 text-sm dark:text-[#E4E6E8] text-black font-[font3] ">
                  {item}
                </div>
                <div className="absolute inset-0 border border-[#3A4048] transition-transform duration-300 hover:scale-115 rounded-[8px]"></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-[1020px] sm:px-[40px] pl-[20px] pr-[20px] mx-auto flex  flex-col gap-10 items-start  ">
        <div>
          <NavLink
            to="/about"
            onMouseEnter={() => {
              playHover();
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              stop();
              setIsHovering(false);
            }}
            className="dark:text-[#FF1B80] text-[#E60066] font-[font2] inline  tracking-wider"
          >
            {/* Know The Guy Behind The Screen */}
            KNOW THE GUY BEHIND THE SCREEN
            <svg
              width="36"
              height="12"
              viewBox="0 0 36 12"
              fill="none"
              className="inline ml-2"
            >
              <path
                d="M0.75 6H11.25 M6 0.75L11.25 6L6 11.25"
                stroke="#809FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  opacity: isHovering ? 1 : 0,
                  color: "white",
                  transition: `opacity ${isHovering ? 0 : ARROW_DELAY}ms`,
                }}
              />

              <path
                d="M15 10L19.5 5.5L15 1"
                stroke="#809FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  opacity: isHovering ? 1 : 0,
                  transition: `opacity ${isHovering ? 0 : ARROW_DELAY}ms`,
                }}
              />
              <path
                d="M23 10L27.5 5.5L23 1"
                stroke="#809FFF"
                strokeOpacity="0.66"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  opacity: isHovering ? 1 : 0,
                  transition: `opacity ${
                    isHovering ? 0 : ARROW_DELAY
                  }ms ${ARROW_DELAY}ms`,
                }}
              />
              <path
                d="M31 10L35.5 5.5L31 1"
                stroke="#809FFF"
                strokeOpacity="0.35"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  opacity: isHovering ? 1 : 0,
                  transition: `opacity ${isHovering ? 0 : ARROW_DELAY}ms ${
                    ARROW_DELAY * 2
                  }ms`,
                }}
              />
            </svg>
          </NavLink>
          <p className="font-[font3] text-sm dark:text-white text-black ">
            Peek into my journey, thoughts, and what makes me tick.
          </p>
        </div>
        <div>
          <NavLink
            to="/projects"
            onMouseEnter={() => {
              playHover();
              setIsHovering1(true);
            }}
            onMouseLeave={() => {
              stop();
              setIsHovering1(false);
            }}
            className="dark:text-[#FF1B80] text-[#E60066] font-[font2]  tracking-wider"
          >
            {/* Stuff I've been building */}
            STUFF I HAVE BEEN BUILDING
            <svg
              width="36"
              height="12"
              viewBox="0 0 36 12"
              fill="none"
              className="inline ml-2"
            >
              <path
                d="M0.75 6H11.25 M6 0.75L11.25 6L6 11.25"
                stroke="#809FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  opacity: isHovering1 ? 1 : 0,
                  color: "white",
                  transition: `opacity ${isHovering1 ? 0 : ARROW_DELAY}ms`,
                }}
              />

              <path
                d="M15 10L19.5 5.5L15 1"
                stroke="#809FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  opacity: isHovering1 ? 1 : 0,
                  transition: `opacity ${isHovering1 ? 0 : ARROW_DELAY}ms`,
                }}
              />
              <path
                d="M23 10L27.5 5.5L23 1"
                stroke="#809FFF"
                strokeOpacity="0.66"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  opacity: isHovering1 ? 1 : 0,
                  transition: `opacity ${
                    isHovering1 ? 0 : ARROW_DELAY
                  }ms ${ARROW_DELAY}ms`,
                }}
              />
              <path
                d="M31 10L35.5 5.5L31 1"
                stroke="#809FFF"
                strokeOpacity="0.35"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  opacity: isHovering1 ? 1 : 0,
                  transition: `opacity ${isHovering1 ? 0 : ARROW_DELAY}ms ${
                    ARROW_DELAY * 2
                  }ms`,
                }}
              />
            </svg>
          </NavLink>
          <p className="dark:text-white text-black font-[font3] text-sm ">
            From fun experiments to serious projects — all in one place.
          </p>
        </div>
        <div>
          <NavLink
            to="/contact"
            onMouseEnter={() => {
              playHover();
              setIsHovering2(true);
            }}
            onMouseLeave={() => {
              stop();
              setIsHovering2(false);
            }}
            className="dark:text-[#FF1B80] text-[#E60066] font-[font2]   tracking-wider"
          >
            {/* Shoot me a message */}
            SHOOT ME A MESSAGE
            <svg
              width="36"
              height="12"
              viewBox="0 0 36 12"
              fill="none"
              className="inline ml-2"
            >
              <path
                d="M0.75 6H11.25 M6 0.75L11.25 6L6 11.25"
                stroke="#809FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  opacity: isHovering2 ? 1 : 0,
                  color: "white",
                  transition: `opacity ${isHovering2 ? 0 : ARROW_DELAY}ms`,
                }}
              />

              <path
                d="M15 10L19.5 5.5L15 1"
                stroke="#809FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  opacity: isHovering2 ? 1 : 0,
                  transition: `opacity ${isHovering2 ? 0 : ARROW_DELAY}ms`,
                }}
              />
              <path
                d="M23 10L27.5 5.5L23 1"
                stroke="#809FFF"
                strokeOpacity="0.66"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  opacity: isHovering2 ? 1 : 0,
                  transition: `opacity ${
                    isHovering2 ? 0 : ARROW_DELAY
                  }ms ${ARROW_DELAY}ms`,
                }}
              />
              <path
                d="M31 10L35.5 5.5L31 1"
                stroke="#809FFF"
                strokeOpacity="0.35"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  opacity: isHovering2 ? 1 : 0,
                  transition: `opacity ${isHovering2 ? 0 : ARROW_DELAY}ms ${
                    ARROW_DELAY * 2
                  }ms`,
                }}
              />
            </svg>
          </NavLink>
          <p className="dark:text-white text-black text-sm font-[font3] ">
            Got an idea, feedback, or just wanna say hi? Let’s talk.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Redirect;

{
  /* <div className="relative  transition-all duration-300  outline-2 hover:outline-offset-3 outline-neutral-700 rounded-md px-2 py-1  text-sm">
            Javascript
          </div>
          <div className="relative  transition-all duration-300  outline-2 hover:outline-offset-3 outline-neutral-700 rounded-md px-2 py-1  text-sm">
            React JS
          </div>
          <div className="relative  transition-all duration-300  outline-2 hover:outline-offset-3 outline-neutral-700 rounded-md px-2 py-1  text-sm">
            Tailwind
          </div>
          <div className="relative  transition-all duration-300  outline-2 hover:outline-offset-3 outline-neutral-700 rounded-md px-2 py-1  text-sm">
            Framer Motion
          </div>
          <div className="relative  transition-all duration-300  outline-2 hover:outline-offset-3 outline-neutral-700 rounded-md px-2 py-1  text-sm">
            GSAP
          </div>
          <div className="relative  transition-all duration-300  outline-2 hover:outline-offset-3 outline-neutral-700 rounded-md px-2 py-1  text-sm">
            Next JS
          </div>
          <div className="relative  transition-all duration-300  outline-2 hover:outline-offset-3 outline-neutral-700 rounded-md px-2 py-1  text-sm">
            HTML
          </div>
          <div className="relative  transition-all duration-300  outline-2 hover:outline-offset-3 outline-neutral-700 rounded-md px-2 py-1  text-sm">
            CSS
          </div>
          <div className="relative  transition-all duration-300  outline-2 hover:outline-offset-3 outline-neutral-700 rounded-md px-2 py-1  text-sm">
            fsrsf
          </div>
          <div className="relative  transition-all duration-300  outline-2 hover:outline-offset-3 outline-neutral-700 rounded-md px-2 py-1  text-sm">
            dscds
          </div>
          <div className="relative  transition-all duration-300  outline-2 hover:outline-offset-3 outline-neutral-700 rounded-md px-2 py-1  text-sm">
            dsds
          </div>
          <div className="relative  transition-all duration-300  outline-2 hover:outline-offset-3 outline-neutral-700 rounded-md px-2 py-1  text-sm">
            sdc
          </div>
          <div className="relative  transition-all duration-300  outline-2 hover:outline-offset-3 outline-neutral-700 rounded-md px-2 py-1  text-sm">
            dsf
          </div> */
}
