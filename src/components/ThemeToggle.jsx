import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { PiMoonFill } from "react-icons/pi";

export default function ThemeToggle() {
  const [mode, setMode] = useState(() => {
    // Read saved theme first
    const stored = localStorage.getItem("theme");
    if (stored) return stored;

    // Otherwise detect system preference
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDark ? "dark" : "light";
  });

  const themeToggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Apply and persist theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme", mode); // persist choice
  }, [mode]);

  return (
    <>
      <button
        onClick={themeToggle}
        className={`flex items-center relative px-1 py-0.5 w-20 rounded-full cursor-pointer
        ${
          mode === "dark"
            ? "justify-start bg-[url(/assets/sky.jpg)] bg-cover text-[#1e1e1e]"
            : "justify-end bg-[url(/assets/day.jpg)] bg-cover text-[#f0e68c]"
        }
      `}
      >
        <motion.span layout className="flex items-center">
          {mode === "dark" ? (
            <PiMoonFill size={25} color="#c9c9df" />
          ) : (
              <span class="inline-block w-6 h-6 rounded-full bg-linear-to-br from-yellow-400 via-yellow-300 to-yellow-200 drop-shadow-2xl"></span>
          )}
        </motion.span>
      </button>
    </>
  );
}
