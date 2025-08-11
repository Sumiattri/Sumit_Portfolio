import { useTheme } from "../context/ThemeContext";
import DistanceMap from "./DiatanceMap";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";

function Info() {
  const { darkMode } = useTheme();
  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } h-auto dark:bg-[#0D0F12]   bg-white w-full px-55 pb-50`}
    >
      <div className="grid grid-cols-4 gap-4 min-h-[800px] text-[15px] text-[#E4E6E8]">
        {/* Top section */}
        <div className="col-span-2 row-span-2  rounded-2xl p-4 bg-[#1B2532]">
          <DistanceMap />
        </div>
        <div className="col-span-1 row-span-1 bg-[#1B2532] rounded-2xl  text-center    font-[font3] flex justify-center items-center px-[25px] ">
          I am 22 years old, currently pursuing my Bachelor of Technology at the
          Indian Institute of Information Technology, Ranchi.
        </div>
        <div className="col-span-1 row-span-1 bg-[#1B2532] rounded-2xl p-4">
          Po
        </div>
        <div className="col-span-1 row-span-1  bg-[#1B2532] rounded-2xl flex items-center px-7 gap-2  ">
          <div className="-mt-5">
            <svg
              width="50"
              height="100"
              viewBox="0 0 50 100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class=""
            >
              <g
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="25" cy="35" r="15" class="h1indsjw"></circle>
                <line
                  x1="25"
                  y1="50"
                  x2="25"
                  y2="80"
                  className="border border-amber-500 text-blue-400 hover:scale-110"
                ></line>
                <line x1="25" y1="80" x2="15" y2="100"></line>
                <line x1="25" y1="80" x2="35" y2="100"></line>
                <line x1="25" y1="55" x2="15" y2="70"></line>
                <line x1="25" y1="55" x2="35" y2="70"></line>
              </g>
            </svg>
          </div>
          <div className="text-center">
            <p className="font-[font3] font-bold">I'm 5'11" tall</p>
            <p className="font-[font3] ">
              At this height, I get better Wi-Fi reception.
              <BsFillEmojiSunglassesFill className="inline ml-1 text-[#F4A10E]" />
            </p>
          </div>
        </div>
        <div className="col-span-1 row-span-3 bg-[#1B2532] rounded-2xl p-4">
          Creativity
        </div>

        {/* Middle section */}
        <div className="col-span-1 row-span-2 bg-[#1B2532] rounded-2xl p-4">
          Sound-box
        </div>
        <div className="col-span-2 row-span-2 bg-[#1B2532] rounded-2xl p-4">
          P-E
        </div>

        {/* Bottom section */}
        <div className="col-span-1 bg-[#1B2532] rounded-lg p-4">Hobby</div>
        <div className="col-span-1 row-span-3 bg-[#1B2532] rounded-lg p-4">
          Exp
        </div>
        <div className="col-span-2 row-span-3 bg-[#1B2532] rounded-lg p-4">
          Any Course Exp
        </div>
      </div>
    </div>
  );
}

export default Info;
