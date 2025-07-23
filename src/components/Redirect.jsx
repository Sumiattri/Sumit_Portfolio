import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import useSound from "use-sound";
import { useState } from "react";

function Redirect() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const { darkMode, isSoundOn } = useTheme();
  const [playHover, { stop }] = useSound("public/audio/rising-pops.mp3", {
    volume: 0.3,
    soundEnabled: isSoundOn,
  });

  const ARROW_DELAY = 205;

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } dark:bg-[#0D0F12] bg-white  sm:h-88 h-[calc(100vh-300px)] sm:pt-10 pt-20 text-white `}
    >
      <div className="max-w-[1020px] sm:px-[40px] pl-[20px] pr-[40px] mx-auto flex  flex-col gap-10 items-start ">
        <div>
          <NavLink
            onMouseEnter={() => {
              playHover();
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              stop();
              setIsHovering(false);
            }}
            className="dark:text-[#FF1B80] text-[#E60066] font-[font3] inline  "
          >
            Know The Guy Behind The Screen
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
          <p className="font-[font3] text-sm dark:text-white text-black">
            Peek into my journey, thoughts, and what makes me tick.
          </p>
        </div>
        <div>
          <NavLink
            onMouseEnter={() => {
              playHover();
              setIsHovering1(true);
            }}
            onMouseLeave={() => {
              stop();
              setIsHovering1(false);
            }}
            className="dark:text-[#FF1B80] text-[#E60066] font-[font3] "
          >
            Stuff I've been building
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
            onMouseEnter={() => {
              playHover();
              setIsHovering2(true);
            }}
            onMouseLeave={() => {
              stop();
              setIsHovering2(false);
            }}
            className="dark:text-[#FF1B80] text-[#E60066] font-[font3] "
          >
            Shoot me a message
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
