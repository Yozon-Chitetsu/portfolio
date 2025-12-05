import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-7 md:py-3 py-0.5 text-xl text-[#1d1d1d] dark:text-[#e6e6fa] bg-linear-to-br from-[#e6e6fa] via-[#f0dff5] to-[#f5c8e6] dark:from-slate-900 dark:via-purple-900 dark:to-slate-800 relative">
        {/* Logo */}
        <div className="logo font-bold tracking-wide">logo</div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex justify-center items-center gap-x-5">
            <li>
              <NavLink to="/">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/experience">Experience</NavLink>
            </li>
            <li>
              <NavLink to="/certification">Certifications</NavLink>
            </li>
            <li>
              <NavLink to="/education">Education</NavLink>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 cursor-pointer focus:outline-none"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          {isNavbarOpen ? <HiX size={25} /> : <HiMenu size={25} />}
        </button>
        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {isNavbarOpen && (
            <motion.div
              key="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="absolute right-0 z-50 top-full w-full bg-[#e6e6fa] dark:bg-[#1d1d1d] px-7 py-5 flex justify-center items-center flex-col gap-4 text-lg md:hidden overflow-hidden"
            >
              <NavLink to="/" onClick={() => setIsNavbarOpen(false)}>
                Profile
              </NavLink>
              <NavLink to="/skills" onClick={() => setIsNavbarOpen(false)}>
                Skills
              </NavLink>
              <NavLink to="/experience" onClick={() => setIsNavbarOpen(false)}>
                Experience
              </NavLink>
              <NavLink to="/certification" onClick={() => setIsNavbarOpen(false)}>
                Certifications
              </NavLink>
              <NavLink to="/education" onClick={() => setIsNavbarOpen(false)}>
                Education
              </NavLink>
              <ThemeToggle />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;

