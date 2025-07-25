import { useTheme } from "../context/ThemeContext";
import DistanceMap from "./DiatanceMap";

function Info() {
  const { darkMode } = useTheme();
  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } h-screen dark:bg-[#0D0F12]   bg-white w-full`}
    >
      <DistanceMap />
    </div>
  );
}

export default Info;
