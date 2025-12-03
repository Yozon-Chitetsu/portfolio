import { useEffect, useState } from "react";
// import styles from "./css_modules/ThemeToggle.module.css";
import { motion } from "motion/react";
import { BsMoonStarsFill } from "react-icons/bs";
import { PiSunHorizonFill } from "react-icons/pi";

export default function ThemeToggle() {
  // Detect system theme once
  const [systemTheme, setSystemTheme] = useState("light");

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setSystemTheme(isDark ? "dark" : "light");
    setMode(isDark ? "dark" : "light");
  }, []);

  // Set default to system theme
  const [mode, setMode] = useState(systemTheme);

  const themeToggle = () => {
    setMode((prev) => {
      switch (prev) {
        case "light":
          return "dark";
        case "dark":
          return "light";
        default:
          return systemTheme; // fallback safety net
      }
    });
  };

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
   <button
  onClick={themeToggle}
  className={`flex items-center relative p-1 px-3 w-25 rounded-full cursor-pointer border
    ${mode === "light"
      ? "justify-start bg-[#c9c9df] text-[#1e1e1e]"
      : "justify-end bg-[#1e1e1e] text-[#f0e68c]"
    }
  `}
>
  <motion.span
    layout // smooth transition when position changes
    className="flex items-center"
  >
    {mode === "light" ? (
      <PiSunHorizonFill size={20} />
    ) : (
      <BsMoonStarsFill size={20} />
    )}
  </motion.span>
</button>

  );
}
