import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || "true";
  });
  const [isSoundOn, setIsSoundOn] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };
  const toggleSound = () => setIsSoundOn((prev) => !prev);
  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleTheme, isSoundOn, toggleSound }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);
