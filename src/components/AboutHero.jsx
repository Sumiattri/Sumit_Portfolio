import { useTheme } from "../context/ThemeContext";

function AboutHero() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`w-screen md:h-[80vh] sm:h-[90vh] max-h-[1120px] h-auto relative  sm:-mt-30 -mt-23  ${
        darkMode ? "dark" : ""
      } bg-gradient-to-b from-[#0E0F12] to-[#14181C]/98  overflow-hidden flex     `}
    >
      <div className=" h-full  w-[100%] mx-auto max-w-[62rem]  z-3 relative  md:pt-[200px] sm:pt-[300px] pt-[340px] lg:px-20 sm:px-10  ">
        <div className="sm:mx-0 mx-6 relative z-10 pb-15">
          <h1 className="text-6xl  text-white font-[font4] ">
            <span className="sm:inline block sm:pb-0 pb-5">Hey,</span>{" "}
            <span className="">I'm Sumit.</span>
          </h1>
          <div className="text-white font-[font3]  sm:text-[18px] text-[20px] lg:w-[500px] w-[450px]  max-w-[100%] sm:pt-5 pt-5">
            <span className="lg:pl-49 md:pl-40  sm:pl-40 pl-15 ">
              – part engineer, part dreamer.....
            </span>
            <section className="sm:pt-3 pt-5">
              For me, frontend development is where creativity meets logic. I’m
              drawn to the details—the micro-interactions, the fluid layouts,
              the way a single animation can elevate an entire experience.
            </section>
            <section className="pt-5">
              {" "}
              It’s not just about building interfaces; it’s about crafting
              moments that feel natural, intuitive, and alive.
            </section>

            <section className="pt-3">
              This space is a glimpse into the grit, growth, and geeky chaos
              that shapes my journey.
            </section>
          </div>
        </div>
        <div className="w-full md:hidden absolute bottom-0 h-[85%] bg-gradient-to-b z-3 from-transparent via-[#181C20] to-[#0D0F12]"></div>
        <div className="absolute z-1  md:bottom-5 sm:bottom-40 bottom-110  sm:-right-20 -right-30 ">
          <img className="w-125  " src="/sumit.png" alt="" />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1999 454"
        preserveAspectRatio="none"
        className=" absolute bottom-0 left-0  min-w-[1000px] sm:block hidden"
      >
        <path
          // className="dark:fill-[#262B31] fill-[#9DD3ED]"
          fill="#262B31"
          d="M824.001 403L875.501 422H1999V63.1446C1977.5 77.3383 1961.18 93.6986 1958 93.5001C1950 93.0001 1946 25.5001 1846 11.5001C1746 -2.49994 1705.5 70.0001 1698.5 69.5001C1691.5 69.0001 1678 -0.499932 1559 0.500068C1440 1.50007 1439.5 117 1432.5 119.5C1425.5 122 1363.5 79.0001 1292 113.5C1220.5 148 1244.5 212 1237.5 216C1230.5 220 1191 172 1106.5 198.5C1022 225 1035 289 1024 291C1013 293 967.001 231.5 875.501 278C784.001 324.5 824.001 403 824.001 403Z"
        ></path>
        <path
          fill="#1C2127"
          d="M925.5 340.5C1010.5 364.432 1005.5 408.5 1005.5 408.5L1065.5 451.5H0V281.079C15.5746 272.042 39.5753 264.56 70.5013 260.5C200.001 243.5 219.003 293.5 227.501 292C236 290.5 257.001 219.5 387.501 233C518.001 246.5 530.002 317.5 540.501 319C551 320.5 601.502 263 695.001 283.5C788.5 304 788.502 352.5 796.501 354.5C804.5 356.5 840.501 316.568 925.5 340.5Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1999 454"
        preserveAspectRatio="none"
        className=" absolute -bottom-[1px] left-0  min-w-[1000px] z-3 "
      >
        <path
          fill={darkMode ? "#0D0F12" : "white"}
          d="M1347 413C1365.5 413 1395.5 375 1538.5 375C1681.5 375 1717 404 1729 403.5C1741 403 1752.5 323.5 1914.5 322.5C1947.52 322.296 1975.45 324.357 1999 327.767V453.5H0V393.684C29.7494 380.632 86.3331 368.933 191.5 375C399.5 387 447.5 444 457 444C466.5 444 488 390.5 676 375C864 359.5 931.5 413 940 413C948.5 413 990 340.5 1155.5 346.5C1321 352.5 1328.5 413 1347 413Z"
        ></path>
      </svg>
    </div>
  );
}

export default AboutHero;
