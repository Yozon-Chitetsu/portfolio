import { Outlet } from "react-router-dom";
import styles from "./css_modules/Content.module.css";

const Content = () => {
  return (
    <div
      className={`relative flex items-center justify-center text-center px-4 bg-linear-to-br from-[#e6e6fa] via-[#f0dff5] to-[#f5c8e6] dark:from-slate-900 dark:via-purple-900 dark:to-slate-800 text-slate-900 dark:text-white`}
    >
      <div className="absolute inset-0 w-full h-full isolate overflow-hidden">
        {/* Floating blurred blobs */}
        <div
          className={`absolute -left-20 -top-24 w-72 h-72 rounded-full bg-pink-300 dark:bg-pink-500 mix-blend-multiply dark:mix-blend-screen opacity-60 dark:opacity-30 filter blur-2xl ${styles.blob}`}
        />
        <div
          className={`absolute right-20 -top-16 w-80 h-80 rounded-full bg-indigo-400 dark:bg-indigo-500 mix-blend-multiply dark:mix-blend-screen opacity-40 dark:opacity-40 filter blur-2xl ${styles.blob} ${styles.blob2}`}
        />
        <div
          className={`absolute left-10 -bottom-12 w-96 h-96 rounded-full bg-cyan-300 dark:bg-cyan-500 mix-blend-multiply dark:mix-blend-screen opacity-40 dark:opacity-40 filter blur-3xl ${styles.blob} ${styles.blob3}`}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default Content;
