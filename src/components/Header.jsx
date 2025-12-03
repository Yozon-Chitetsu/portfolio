import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center px-7 py-3 text-xl text-[#1d1d1d] bg-[#e6e6fa] dark:text-[#e6e6fa] dark:bg-[#1d1d1d]">
        <div className="logo">logo</div>
        <nav>
          <ul className={`flex justify-center items-center gap-x-5 gap-y-3`}>
            <li>
              <NavLink to="/">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/">Experience</NavLink>
            </li>
            <li>
              <NavLink to="/">Certifications</NavLink>
            </li>
            <li>
              <NavLink to="/">Education</NavLink>
            </li>
            <li></li>
          </ul>
        </nav>
        <ThemeToggle />
      </header>
    </>
  );
};

export default Header;
