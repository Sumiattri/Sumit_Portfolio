import { NavLink } from "react-router-dom";
import { BiVolumeFull } from "react-icons/bi";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunDim } from "react-icons/lu";
import { BiVolume } from "react-icons/bi";
import { useTheme } from "../context/ThemeContext";
import useSound from "use-sound";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion as Motion } from "motion/react";

function Navbar() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
  }, [location]);

  const { darkMode, toggleTheme, isSoundOn, toggleSound } = useTheme();
  const [playClick1] = useSound("/audio/switch-off.mp3", {
    volume: 0.5,
    soundEnabled: isSoundOn,
  });
  const [playClick2] = useSound("/audio/switch-on.mp3", {
    volume: 0.5,
    soundEnabled: isSoundOn,
  });

  const [playClick3] = useSound("/audio/enable-sound.mp3", {
    volume: 0.5,
  });
  const [playClick4] = useSound("/audio/disable-sound.mp3", {
    volume: 0.5,
  });
  const [playClick5] = useSound("/audio/plunger-immediate.mp3", {
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
              <ul className="sm:flex hidden dark:text-white text-black font-[font3]  gap-10 text-[16px]">
                <li className="cursor-pointer ">
                  <NavLink
                    className={({ isActive }) =>
                      `dark:text-white text-black relative ${isActive ? "font-bold after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-current after:transition-all after:duration-300" : "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300"} `
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="cursor-pointer ">
                  <NavLink
                    className={({ isActive }) =>
                      `dark:text-white text-black relative ${isActive ? "font-bold after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-current after:transition-all after:duration-300" : "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300"} `
                    }
                    to="/projects"
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="cursor-pointer ">
                  <NavLink
                    className={({ isActive }) =>
                      `dark:text-white text-black relative ${isActive ? "font-bold after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-current after:transition-all after:duration-300" : "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300"} `
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
                  className="dark:text-white text-black text-[23px] cursor-pointer"
                />
              ) : (
                <BiVolume
                  onClick={() => {
                    toggleSound();
                    playClick3();
                  }}
                  className="dark:text-white text-black text-[23px] cursor-pointer"
                />
              )}
              {darkMode ? (
                <IoMoonOutline
                  className="dark:text-white text-black text-[21px] cursor-pointer"
                  onClick={() => {
                    toggleTheme();
                    playClick2();
                  }}
                />
              ) : (
                <LuSunDim
                  className="dark:text-white text-black text-[21px] cursor-pointer"
                  onClick={() => {
                    toggleTheme();
                    playClick1();
                  }}
                />
              )}
              <button
                type="button"
                onClick={() => {
                  playClick5();
                  setMenuOpen((current) => !current);
                }}
                className="sm:hidden dark:text-white text-black text-[23px] cursor-pointer"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </header>
          <AnimatePresence>
            {menuOpen && (
              <Motion.nav
                initial={{ opacity: 0, y: -10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-x-5 top-[76px] rounded-2xl border border-black/10 bg-white/95 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#111820]/95 sm:hidden"
              >
                {[['About', '/about'], ['Projects', '/projects'], ['Contact', '/contact']].map(([label, to]) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) => `block rounded-xl px-4 py-3 font-[font3] text-sm transition-colors ${isActive ? 'bg-[#DDEEF8] text-[#4242F9] dark:bg-white/10 dark:text-[#809FFF]' : 'text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/5'}`}
                  >
                    {label}
                  </NavLink>
                ))}
              </Motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
// #193243
