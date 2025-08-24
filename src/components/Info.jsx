import { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import DistanceMap from "./DiatanceMap";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import useSound from "use-sound";
import FallingText from "./FallingText";
import { FiFileText } from "react-icons/fi";
import BlobCursor from "./cursor/BlobCursor";

function Info() {
  const { darkMode } = useTheme();
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);
  const buttonRef3 = useRef(null);
  const buttonRef4 = useRef(null);

  const items = [{ icon: <FiFileText />, color: "#ff4676", label: "Resume" }];

  const [play] = useSound("/audio/909-drums.mp3", {
    sprite: {
      kick: [0, 200], // start: 0ms, duration: 250ms
      snare: [330, 200],
      hihat: [600, 300],
      clap: [900, 300],
    },
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "q") {
        buttonRef1.current?.click();
      }
      if (e.key.toLowerCase() === "w") {
        buttonRef2.current?.click();
      }
      if (e.key.toLowerCase() === "e") {
        buttonRef3.current?.click();
      }
      if (e.key.toLowerCase() === "r") {
        buttonRef4.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } h-auto dark:bg-[#0D0F12]   bg-white w-full custom-padding  lg:px-30 md:px-7 px-7   pb-30 pt-20 overflow-hidden`}
    >
      <div className="grid max-w-[1200px] md:grid-cols-4 sm:grid-cols-5 grid-cols-2 gap-4 min-h-[800px] text-[15px] text-[#E4E6E8]">
        {/* Top section */}
        <div className="md:col-span-2 sm:col-span-3 col-span-2 md:row-span-2 sm:row-span-4  row-span-10  rounded-2xl p-4 dark:bg-[#1B2532] bg-[#DDEEF8] dark:text-white text-black">
          <DistanceMap />
        </div>
        <div className="md:col-span-1 sm:col-span-2 col-span-1  md:row-span-1 row-span-2  dark:bg-[#1B2532] bg-[#DDEEF8] dark:text-white text-black rounded-2xl  text-center py-5    font-[font3] flex justify-center items-center lg:px-[25px] md:px-[10px] px-2">
          <div>
            I am 22 years old, currently pursuing my Bachelor of Technology at
            the
            <section
              className="text-[#FF4676] px-1 inline font-semibold"
              style={{ fontStyle: "italic" }}
            >
              Indian Institute of Information Technology, Ranchi.
            </section>
          </div>
        </div>
        <div className="md:col-span-1 sm:col-span-2 col-span-1  md:row-span-1 row-span-2 dark:bg-[#1B2532] bg-[#DDEEF8] dark:text-white text-black flex items-center gap-2 rounded-2xl p-4 font-[font3] sm:text-center">
          <div>
            Click here for the boring version of me… also known as my {}
            <span className="text-[#FF4676]  " style={{ fontStyle: "italic" }}>
              resume
            </span>
            .
          </div>
          <div className="w-full h-auto pt-3 ">
            <a
              className="cursor-pointer"
              href="https://drive.google.com/file/d/1rUoINZwM6ge1lEI9MLybmNGvf0HDqN_t/view?usp=drive_link"
              target="blank"
            >
              <FiFileText className="sm:text-6xl text-3xl cursor-pointer -mt-5  mx-auto text-gray-400 hover:scale-110 transition-all duration-300 " />
              {/* <GlassIcons
                items={items}
                className="custom-class cursor-pointer"
              /> */}
            </a>
          </div>
        </div>
        <div className="md:col-span-1 sm:col-span-2  md:row-span-1 row-span-2  dark:bg-[#1B2532] bg-[#DDEEF8] dark:text-white text-black rounded-2xl flex items-center lg:px-7 md:px-2 px-3 gap-2 py-5  ">
          <div className="-mt-5">
            <svg
              width="50"
              height="100"
              viewBox="0 0 50 100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g
                className="stroke-black dark:stroke-white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="25" cy="35" r="15"></circle>
                <line
                  x1="25"
                  y1="50"
                  x2="25"
                  y2="80"
                  className="border border-amber-500 text-blue-400  hover:scale-110"
                ></line>
                <line x1="25" y1="80" x2="15" y2="100"></line>
                <line x1="25" y1="80" x2="35" y2="100"></line>
                <line x1="25" y1="55" x2="15" y2="70"></line>
                <line x1="25" y1="55" x2="35" y2="70"></line>
              </g>
            </svg>
          </div>
          <div className="text-center">
            <p className="font-[font3] font-bold cursor-pointer">
              I'm 5'11" tall.
            </p>
            <p className="font-[font3] ">
              At this height, I get better Wi-Fi reception.
              <BsFillEmojiSunglassesFill className="inline ml-1 text-[#F4A10E] -mt-1" />
            </p>
          </div>
        </div>
        <div className="relative md:col-span-1   sm:col-span-3 md:row-span-3 row-span-2 dark:bg-[#1B2532] bg-[#DDEEF8] dark:text-white text-black rounded-2xl p-4">
          <BlobCursor
            blobType="circle"
            fillColor="#5227FF"
            trailCount={3}
            sizes={[60, 125, 75]}
            innerSizes={[20, 35, 25]}
            innerColor="rgba(255,255,255,0.8)"
            opacities={[0.6, 0.6, 0.6]}
            shadowColor="rgba(0,0,0,0.75)"
            shadowBlur={5}
            shadowOffsetX={10}
            shadowOffsetY={10}
            filterStdDeviation={30}
            useFilter={true}
            fastDuration={0.1}
            slowDuration={0.5}
            zIndex={100}
          />
        </div>

        {/* Middle section  */}
        <div className="md:col-span-3 sm:col-span-5 col-span-2 row-span-2 dark:bg-[#0D0F12] bg-white rounded-2xl  flex sm:flex-row flex-col gap-4  ">
          <div className="dark:bg-[#1B2532] bg-[#DDEEF8] dark:text-white text-black w-full rounded-2xl flex flex-col gap-2 items-center pb-5 ">
            <div className="flex gap-3 p-4 font-[font3] font-bold text-[#E4E6E8] ">
              <button
                ref={buttonRef1}
                onClick={() => play({ id: "kick" })}
                className={`relative text-sm cursor-pointer px-[18px] py-3  rounded-lg bg-gradient-to-b from-gray-700 to-gray-900   font-bold   shadow-[2px_4px_0px_0_rgba(0,0,0,0.8),-2px_4px_0px_0_rgba(0,0,0,0.8),0px_4px_2px_0_gray]  active:translate-y-[3px] active:shadow-[2px_2px_0px_0_rgba(0,0,0,0.8),-2px_2px_0px_0_rgba(0,0,0,0.8)] transition-all duration-150 `}
              >
                Q
              </button>
              <button
                ref={buttonRef2}
                onClick={() => play({ id: "snare" })}
                className={`relative cursor-pointer px-4 py-3 rounded-lg bg-gradient-to-b from-gray-700 to-gray-900   font-bold text-sm  shadow-[2px_4px_0px_0_rgba(0,0,0,0.8),-2px_4px_0px_0_rgba(0,0,0,0.8),0px_4px_2px_0_gray]  active:translate-y-[3px] active:shadow-[2px_2px_0px_0_rgba(0,0,0,0.8),-2px_2px_0px_0_rgba(0,0,0,0.8)] transition-all duration-150 `}
              >
                W
              </button>
              <button
                ref={buttonRef3}
                onClick={() => play({ id: "hihat" })}
                className={`relative cursor-pointer px-5 py-3 rounded-lg bg-gradient-to-b from-gray-700 to-gray-900   font-bold text-sm  shadow-[2px_4px_0px_0_rgba(0,0,0,0.8),-2px_4px_0px_0_rgba(0,0,0,0.8),0px_4px_2px_0_gray]  active:translate-y-[3px] active:shadow-[2px_2px_0px_0_rgba(0,0,0,0.8),-2px_2px_0px_0_rgba(0,0,0,0.8)] transition-all duration-150 `}
              >
                E
              </button>
              <button
                ref={buttonRef4}
                onClick={() => play({ id: "clap" })}
                className={`relative cursor-pointer px-5 py-3  rounded-lg bg-gradient-to-b from-gray-700 to-gray-900   font-bold text-sm  shadow-[2px_4px_0px_0_rgba(0,0,0,0.8),-2px_4px_0px_0_rgba(0,0,0,0.8),0px_4px_2px_0_gray]  active:translate-y-[3px] active:shadow-[2px_2px_0px_0_rgba(0,0,0,0.8),-2px_2px_0px_0_rgba(0,0,0,0.8)] transition-all duration-150 `}
              >
                R
              </button>
            </div>
            <div className="px-8 text-center font-[font3] text-[15px]  ">
              I’m fascinated by how sound can make the web more alive - these
              buttons are a small taste of the fun I have experimenting with
              audio in development.
            </div>
          </div>
          <div className="dark:bg-[#1B2532] bg-[#DDEEF8] dark:text-white text-black w-full p-4 rounded-2xl">
            <FallingText
              text={`Watch creativity drop, bounce, and settle into something unexpected and fun.`}
              highlightWords={["drop", "bounce", "settle", "unexpected", "fun"]}
              highlightClass="highlighted"
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.2}
              fontSize="14px"
              mouseConstraintStiffness={0.9}
            />
          </div>
        </div>

        {/* Bottom section */}
        <div className="md:col-span-1 z-1 sm:col-span-2 col-span-2 dark:bg-[#1B2532] bg-[#DDEEF8] dark:text-white text-black rounded-2xl   sm:pt-5 relative font-[font3] text-center  ">
          <div className="absolute lg:block  hidden z-0  -left-36   -top-15  ">
            <img
              src="/flat-paper-coffee-cup.png"
              alt=""
              className="h-60  -rotate-48"
            />
          </div>
          <div className="relative z-1 w-full lg:block flex flex-col justify-center items-center  dark:bg-[#1B2532] bg-[#DDEEF8] dark:text-white text-black h-full rounded-2xl px-4  pb-5">
            <div className="lg:hidden block">
              <img src="/flat-paper-coffee-cup.png" alt="" className="h-30" />
            </div>
            <div>
              Some people are tea people, some are coffee people — I’m both.{" "}
              <br /> My productivity runs on a perfectly balanced blend of
              caffeine diplomacy.
            </div>
          </div>
        </div>
        <div className="sm:col-span-3 relative z-2 col-span-2  row-span-3 dark:bg-[#0D0F12] bg-white rounded-2xl flex md:flex-row flex-col gap-4  box-border">
          <div className="w-full h-78 dark:bg-[#1B2532] bg-[#DDEEF8] dark:text-white text-black rounded-2xl p-2 overflow-hidden">
            <img src="/setup.jpeg" alt="" className="rounded-xl " />
            <div className="font-[font3] text-center pt-5">
              My little command center — where caffeine, chaos, and code meet in
              perfect harmony.
            </div>
          </div>
          <div className="w-full dark:bg-[#1B2532] bg-[#DDEEF8] dark:text-white text-black  rounded-2xl p-4 box-border font-[font3] ">
            <div className="absolute -right-30 sm:-top-30 -top-17 h-60 w-60 z-0">
              <img alt="" src="/joy-of-react-mascot.png"></img>
            </div>
            <div className="relative z-1">
              When I first stepped into coding, web development wasn’t even on
              my radar. My heart was set on game development — thanks to my love
              for gaming (and that one weekend I played for over 16 hours
              straight ). But somewhere between physics engines and pixel art, I
              stumbled into web dev… and stayed. <br /> Turns out, the browser
              can be just as much of a playground as any game world — every
              animation, API call, and line of JavaScript had me hooked. <br />
              Now, I mix a bit of that “game dev curiosity” into everything I
              build, whether it’s an interactive UI, a map that connects people,
              or just a small feature that makes someone smile.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
