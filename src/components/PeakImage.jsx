import { useEffect, useState } from "react";

function PeekImage({ darkMode, ImageDark, ImageLight }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // base position = -35 (initially hidden more inside cloud)
  // as we scroll, it gradually increases towards -21 (peeking more)
  const topValue = Math.min(-35 + offsetY * 0.05, -21);

  return (
    <div
      className="absolute z-0 left-43 transition-all duration-200"
      style={{ top: `${topValue}px` }}
    >
      <img
        src={darkMode ? ImageDark : ImageLight}
        alt=""
        className="sm:w-[140px] w-[100px] h-auto rotate-180"
      />
    </div>
  );
}

export default PeekImage;
