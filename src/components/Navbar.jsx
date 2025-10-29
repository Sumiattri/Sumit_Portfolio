import { NavLink } from "react-router-dom";
import { BiVolumeFull } from "react-icons/bi";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunDim } from "react-icons/lu";
import { BiVolume } from "react-icons/bi";
import { useTheme } from "../context/ThemeContext";
import useSound from "use-sound";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [isProjects, setIsProjects] = useState(false);
  const [isContact, setIsContact] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Trigger blur after 20px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location]);
  useEffect(() => {
    setIsAbout(location.pathname === "/about");
  }, [location]);
  useEffect(() => {
    setIsProjects(location.pathname === "/projects");
  }, [location]);
  useEffect(() => {
    setIsContact(location.pathname === "/contact");
  }, [location]);

  const { darkMode, toggleTheme, isSoundOn, toggleSound } = useTheme();
  const [playClick1, { stop }] = useSound("/audio/switch-off.mp3", {
    volume: 0.5,
    soundEnabled: isSoundOn,
  });
  const [playClick2, { stop1 }] = useSound("/audio/switch-on.mp3", {
    volume: 0.5,
    soundEnabled: isSoundOn,
  });

  const [playClick3, { stop2 }] = useSound("/audio/enable-sound.mp3", {
    volume: 0.5,
  });
  const [playClick4, { stop3 }] = useSound("/audio/disable-sound.mp3", {
    volume: 0.5,
  });
  const [playClick5, { stop4 }] = useSound("/audio/plunger-immediate.mp3", {
    volume: 0.2,
  });

  return (
    <div
      className={`sticky ${darkMode ? "dark" : ""}  ${
        isHome ? "sm:-top-8 top-0" : " top-0"
      }  sm:h-[120px] h-[90px] z-1000 ${
        scrolled
          ? "backdrop-blur-md dark:bg-[#0D0E11]/10 bg-white/30  shadow-md"
          : "bg-transparent"
      }  `}
    >
      <div
        className={`w-full  ${darkMode ? "dark" : ""} h-full ${
          isHome ? "sm:pt-[54px] sm:pb-[20px] pt-0" : "sm:pt-0px"
        } mt-[0px]  transition-all duration-500 z-2`}
      >
        <div className=" h-full max-w-[1020px] sm:px-[40px] pl-[20px] pr-[40px] mx-auto">
          <header className="w-full h-full flex items-center justify-between">
            <div className="flex items-center gap-16">
              <NavLink
                to="/"
                className="dark:text-[#809FFF] text-[#4242F9] text-[23px] font-[font2] -mt-[7px]"
              >
                Sumit Attri
              </NavLink>
              <ul className="sm:flex hidden dark:text-[#E4E6E8] text-black font-[font3]  gap-10 text-[16px]">
                <li className="cursor-pointer ">
                  <NavLink
                    // onMouseEnter={playClick5}
                    // onMouseLeave={stop4}
                    className={({ isActive }) =>
                      `${
                        (isAbout && scrolled) ||
                        isProjects ||
                        isHome ||
                        isContact
                          ? "text-black dark:text-white"
                          : "text-white"
                      } relative ${isActive ? "font-bold" : ""} `
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="cursor-pointer ">
                  <NavLink
                    // onMouseEnter={playClick5}
                    // onMouseLeave={stop4}
                    className={({ isActive }) =>
                      `${
                        (isAbout && scrolled) ||
                        isProjects ||
                        isHome ||
                        isContact
                          ? "text-black dark:text-white"
                          : "text-white"
                      } relative ${isActive ? "font-bold" : ""} `
                    }
                    to="/projects"
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="cursor-pointer ">
                  <NavLink
                    // onMouseEnter={playClick5}
                    // onMouseLeave={stop4}
                    className={({ isActive }) =>
                      `${
                        (isAbout && scrolled) ||
                        isProjects ||
                        isHome ||
                        isContact
                          ? "text-black dark:text-white"
                          : "text-white"
                      } relative ${isActive ? "font-bold" : ""} `
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-6">
              {isSoundOn ? (
                <BiVolumeFull
                  onClick={() => {
                    toggleSound();
                    playClick4();
                  }}
                  className={`dark:text-[#E4E6E8] text-black text-[23px] cursor-pointer ${
                    (isAbout && scrolled) || isProjects || isHome || isContact
                      ? "text-black dark:text-white"
                      : "text-white"
                  }`}
                />
              ) : (
                <BiVolume
                  onClick={() => {
                    toggleSound();
                    playClick3();
                  }}
                  className={`dark:text-[#E4E6E8] text-black text-[23px] cursor-pointer  ${
                    (isAbout && scrolled) || isProjects || isHome || isContact
                      ? "text-black dark:text-white"
                      : "text-white"
                  }`}
                />
              )}
              {darkMode ? (
                <IoMoonOutline
                  className={`text-[#E4E6E8]  text-[21px] cursor-pointer ${
                    (isAbout && scrolled) || isProjects || isHome || isContact
                      ? "text-black dark:text-white"
                      : "text-white"
                  }`}
                  onClick={() => {
                    toggleTheme();
                    playClick2();
                  }}
                />
              ) : (
                <LuSunDim
                  className={`text-black text-[21px] cursor-pointer ${
                    (isAbout && scrolled) || isProjects || isHome || isContact
                      ? "text-black dark:text-white"
                      : "text-white"
                  }`}
                  onClick={() => {
                    toggleTheme();
                    playClick1();
                  }}
                />
              )}
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
// #193243
