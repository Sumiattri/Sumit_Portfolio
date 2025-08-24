import ImageDark from "../assets/images/josh-happy-dark.webp";
import ImageLight from "../assets/images/josh-happy-light.webp";
import { useTheme } from "../context/ThemeContext";
import { GiCoffeeCup } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { useState, useEffect, useRef } from "react";

function Footer() {
  const { darkMode } = useTheme();

  const footerRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let progress = 1 - rect.top / windowHeight;
        progress = Math.min(Math.max(progress, 0), 1);
        // console.log("progress:", progress, "topValue:", -35 + progress * 14);

        setOffsetY(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topValue = -190 + offsetY * 190;

  return (
    <div
      ref={footerRef}
      className={` ${
        darkMode ? "dark" : ""
      } max-w-[1500px]  relative  overflow-hidden w-screen h-[430px] -mt-2 bg-[#90CDEB] dark:bg-gradient-to-b from-[#132331] to-[#255770]`}
    >
      <svg
        width="320rem"
        height="15.625rem"
        viewBox="0 0 5120 337"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-ml-[1850px] -mt-1 relative z-1"
      >
        <path
          d="M2262 93C2122.5 82.5987 2116 21.5 2096.5 21.5C2077 21.5 2070.5 77.5238 1920.5 93C1794.5 106 1786 62 1771.5 63.5C1757 65 1687 155.5 1580 142C1473 128.5 1446.5 90 1435 93C1423.5 96 1448.03 199.005 1340 214C1181.5 236 1155.5 142 1144 142C1132.5 142 1105.5 269 946.5 236C787.5 203 799 115 784 114.5C769 114 732.5 162 544 158C382 154.562 352.5 81 341 84.5C329.5 88 358 269 168 326C-22 383 -75.5 180 -75.5 180V0.5H5189.5L5193.5 46C5193.5 46 5200 94 5069.5 100.5C4939 107 4923.5 21.5 4906.5 21.5C4889.5 21.5 4870 35 4835 93.5C4800 152 4765.5 169.5 4643.5 173.5C4521.5 177.5 4436.5 69 4425.5 76.5C4414.5 84 4413.5 212 4235 222C4056.5 232 4045.5 92 4033.5 89C4021.5 86 3968.5 169.5 3823.5 172.5C3678.5 175.5 3573.5 104 3562.5 106.5C3551.5 109 3553.5 167.5 3396 201C3238.5 234.5 3171.5 168.5 3161 172.5C3150.5 176.5 3164 273 3076.5 294.5C2975.99 319.197 2935 228 2920 225.5C2905 223 2862 276.955 2749 245C2671.4 223.057 2672.5 149 2660.5 151.5C2648.5 154 2622.5 181.04 2548.5 158C2425 119.548 2427.5 53.5 2412 51C2396.5 48.5 2376 101.5 2262 93Z"
          className=" dark:fill-[#0D0F11] fill-white"
        ></path>
      </svg>

      <div
        className={`absolute md:block hidden  z-0  left-43  `}
        style={{ top: `${topValue}px` }}
        // style={{ transform: `translateY(${topValue}px)` }}
      >
        <img
          src={darkMode ? ImageDark : ImageLight}
          alt=""
          className="sm:w-[140px] w-[100px] h-auto rotate-180"
        />
      </div>
      <div className="text-white absolute  md:left-50 left-15 h-full top-45 flex flex-col gap-5  justify-start">
        <div>
          <p className="dark:text-[#809FFF] text-[#4242F9] text-[23px] font-[font2] ">
            Sumit Attri
          </p>
          <div className="text-sm font-[font2] pt-1 flex gap-2 items-center dark:text-gray-300 text-black">
            Powered by chai only.
            <GiCoffeeCup className="text-yellow-500" />
          </div>
        </div>

        <div className="flex  mt-5 flex-col gap-1">
          <p className="font-[font3] dark:text-gray-300 text-black">
            Drop me a line at:
          </p>
          <div className="bg-[#0D0F13] px-1 pl-2 py-1 w-63 rounded-[8px]  flex items-center gap-5 -ml-[7px]">
            <p>sumitattri165@gmail.com</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sumitattri165@gmail.com"
              target="_blank"
            >
              <button className="cursor-pointer bg-amber-300 text-black p-[10px] rounded-sm ">
                {" "}
                <FaArrowRightLong />
              </button>
            </a>
          </div>
        </div>

        <div className="w-full  flex items-center justify-between  sm:mt-5 mt-10 ">
          <p className="text-xs dark:text-gray-300 text-black font-[font3]">
            © 2025-present Sumit Attri. All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="absolute  md:right-40 sm:right-20 right-58 bottom-10 sm:bottom-10">
        <div className="flex  sm:gap-6 gap-4">
          <a href="https://github.com/Sumiattri" target="_blank" className="">
            <FiGithub className="cursor-pointer text-xl dark:text-gray-300 dark:hover:text-white hover:animate-wiggle hover:text-black   text-gray-700" />
          </a>
          <a href="https://www.linkedin.com/in/sumit-attri/" target="_blank">
            <FaLinkedinIn className="cursor-pointer text-xl dark:text-gray-300 dark:hover:text-white hover:text-black hover:animate-wiggle  text-gray-700" />
          </a>
          <a href="https://www.instagram.com/sumitattri990/" target="blank">
            <FaInstagram className="cursor-pointer text-xl dark:text-gray-300 dark:hover:text-white hover:text-black  hover:animate-wiggle text-gray-700" />
          </a>
          <a href="https://x.com/Sumitattri63" target="blank">
            <FaXTwitter className="cursor-pointer text-xl dark:text-gray-300 dark:hover:text-white hover:text-black hover:animate-wiggle  text-gray-700" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

//  <a
//               className="flex  gap-3 items-center font-[font2] text-[#0B82C0] text-xl "
//               href="https://www.linkedin.com/in/sumit-attri/"
//               target="blank"
//             >
//               <img
//                 src="src/assets/icons/linkedin.png"
//                 alt=""
//                 className="h-10 w-10"
//               />
//               {/* <p>Linkedin</p> */}
//             </a>
//             <a
//               href="https://github.com/Sumiattri"
//               target="blank"
//               className="flex items-center gap-3 "
//             >
//               <FiGithub className="text-3xl" />
//               <p className="font-[font2] text-xl ">Github</p>
//             </a>
//             <a
//               href="https://www.instagram.com/sumitattri990/"
//               target="blank"
//               className="flex gap-3 items-center"
//             >
//               <img
//                 src="src/assets/icons/social.png"
//                 alt=""
//                 className="h-10 w-10"
//               />
//               <p className="font-[font2]  text-xl text-[#EF0074]">
//                 {" "}
//                 Instagram{" "}
//               </p>
//             </a>
//             <a
//               target="blank"
//               href="https://x.com/Sumitattri63"
//               className="flex gap-3 items-center"
//             >
//               <img
//                 src="src/assets/icons/twitter.png"
//                 alt="twitter"
//                 className="h-10 w-10"
//               />
//               <p className="font-[font2]  text-xl text-[#179ACD]">Twitter</p>
//             </a>
