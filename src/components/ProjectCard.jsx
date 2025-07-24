import { useTransform, motion, useScroll } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import useSound from "use-sound";
import { useTheme } from "../context/ThemeContext";

function ProjectCard({
  i,
  title,
  description,
  src,

  color,
  progress,
  range,
  targetScale,
  git,
  live,
}) {
  const { darkMode, isSoundOn } = useTheme();
  const [playHover, { stop }] = useSound("public/audio/rising-pops.mp3", {
    volume: 0.3,
    soundEnabled: isSoundOn,
  });

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const ARROW_DELAY = 125;

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-[100vh] flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          //   position: "relative",
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex  flex-col relative -top-[25%] h-[500px] rounded-4xl w-[1000px] px-15  pt-10"
      >
        <h2 className="text-center m-0 text-[28px]  font-[font4]">{title}</h2>
        <div className="flex  mt-[40px] gap-[50px]  ">
          <div className="w-[40%] relative  ">
            <p className="text-[16px] pt-2 font-[font3] text-justify">
              {description}
            </p>
            <div className=" mt-2 flex justify-between items-center ">
              <a
                href={live}
                target="blank"
                onMouseEnter={() => {
                  playHover();
                  setIsHovering2(true);
                }}
                onMouseLeave={() => {
                  stop();
                  setIsHovering2(false);
                }}
                className="text-black m font-[font2] "
              >
                Watch Live
                <svg
                  width="36"
                  height="12"
                  viewBox="0 0 36 12"
                  fill="none"
                  className="inline ml-2"
                >
                  <path
                    d="M0.75 6H11.25 M6 0.75L11.25 6L6 11.25"
                    stroke="black"
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
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      opacity: isHovering2 ? 1 : 0,
                      transition: `opacity ${isHovering2 ? 0 : ARROW_DELAY}ms`,
                    }}
                  />
                  <path
                    d="M23 10L27.5 5.5L23 1"
                    stroke="black"
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
                    stroke="black"
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
              </a>
              <div className="flex gap-2 items-center">
                <a
                  href={git}
                  target="blank"
                  onMouseEnter={() => {
                    playHover();
                    setIsHovering(true);
                  }}
                  onMouseLeave={() => {
                    stop();
                    setIsHovering(false);
                  }}
                  className="font-[font2] flex items-center gap-2"
                >
                  Github <FaGithub className="text-[20px] inline" />
                  <svg
                    width="36"
                    height="12"
                    viewBox="0 0 36 12"
                    fill="none"
                    className="inline ml-2"
                  >
                    <path
                      d="M0.75 6H11.25 M6 0.75L11.25 6L6 11.25"
                      stroke="black"
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
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        opacity: isHovering ? 1 : 0,
                        transition: `opacity ${isHovering ? 0 : ARROW_DELAY}ms`,
                      }}
                    />
                    <path
                      d="M23 10L27.5 5.5L23 1"
                      stroke="black"
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
                      stroke="black"
                      strokeOpacity="0.35"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        opacity: isHovering ? 1 : 0,
                        transition: `opacity ${
                          isHovering ? 0 : ARROW_DELAY
                        }ms ${ARROW_DELAY * 2}ms`,
                      }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-[60%] h-[100%] rounded-4xl overflow-hidden  ">
            <motion.div
              className="w-[100%] h-[100%] "
              style={{ scale: imageScale }}
            >
              <img src={src} alt="image" className="object-cover rounded-4xl" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectCard;
