import { NavLink } from "react-router-dom";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunDim } from "react-icons/lu";
import { SlVolumeOff } from "react-icons/sl";
import { useTheme } from "../context/ThemeContext";
import useSound from "use-sound";

function Navbar() {
  const { darkMode, toggleTheme, isSoundOn, toggleSound } = useTheme();
  const [playClick1, { stop }] = useSound("public/audio/switch-off.mp3", {
    volume: 0.5,
    soundEnabled: isSoundOn,
  });
  const [playClick2, { stop1 }] = useSound("public/audio/switch-on.mp3", {
    volume: 0.5,
    soundEnabled: isSoundOn,
  });

  const [playClick3, { stop2 }] = useSound("public/audio/enable-sound.mp3", {
    volume: 0.5,
  });
  const [playClick4, { stop3 }] = useSound("public/audio/disable-sound.mp3", {
    volume: 0.5,
  });

  return (
    <div
      className={`w-full ${
        darkMode ? "dark" : ""
      }  h-[80px] sm:mt-[44px] mt-[0px] sticky  z-2`}
    >
      <div className=" h-full max-w-[1020px] sm:px-[40px] pl-[20px] pr-[40px] mx-auto">
        <header className="w-full h-full flex items-center justify-between">
          <div className="flex items-center gap-14">
            <NavLink
              to="/"
              className="dark:text-[#809FFF] text-[#4242F9] text-[23px] font-[font2] -mt-[7px]"
            >
              Sumit Attri
            </NavLink>
            <ul className="sm:flex hidden dark:text-[#E4E6E8] text-black font-[font3]  gap-8 text-[16px]">
              <li className="cursor-pointer ">About</li>
              <li className="cursor-pointer ">Projects</li>
              <li className="cursor-pointer ">Contact</li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            {isSoundOn ? (
              <IoVolumeMediumOutline
                onClick={() => {
                  toggleSound();
                  playClick4();
                }}
                className="dark:text-[#E4E6E8] text-black text-[23px] cursor-pointer"
              />
            ) : (
              <SlVolumeOff
                onClick={() => {
                  toggleSound();
                  playClick3();
                }}
                className="dark:text-[#E4E6E8] text-black text-[23px] cursor-pointer"
              />
            )}
            {darkMode ? (
              <IoMoonOutline
                className="text-[#E4E6E8]  text-[21px] cursor-pointer"
                onClick={() => {
                  toggleTheme();
                  playClick2();
                }}
              />
            ) : (
              <LuSunDim
                className="text-black text-[21px] cursor-pointer"
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
  );
}

export default Navbar;
// #193243
