import { Link } from "react-router-dom";
import styles from "./css_modules/NotFound.module.css";

function NotFound() {
  return (
    <div
      className={`min-h-screen flex items-center justify-center text-center relative overflow-hidden px-4 bg-linear-to-br from-[#e6e6fa] via-[#f0dff5] to-[#f5c8e6] dark:from-slate-900 dark:via-purple-900 dark:to-slate-800 text-slate-900 dark:text-white`}
    >
      {/* Floating blurred blobs */}
      <div
        className={`absolute -left-20 -top-24 w-72 h-72 rounded-full bg-pink-300 dark:bg-pink-500 mix-blend-multiply dark:mix-blend-screen opacity-60 dark:opacity-30 filter blur-2xl ${styles.blob}`}
      />
      <div
        className={`absolute right-20 -top-16 w-80 h-80 rounded-full bg-indigo-300 dark:bg-indigo-500 mix-blend-multiply dark:mix-blend-screen opacity-40 dark:opacity-25 filter blur-2xl ${styles.blob} ${styles.blob2}`}
      />
      <div
        className={`absolute left-10 -bottom-12 w-96 h-96 rounded-full bg-cyan-300 dark:bg-cyan-500 mix-blend-multiply dark:mix-blend-screen opacity-40 dark:opacity-20 filter blur-3xl ${styles.blob} ${styles.blob3}`}
      />

      {/* Main card */}
      <div
        className={`relative z-10 max-w-6xl w-full p-10 md:p-16 shadow-2xl text-center backdrop-blur-sm bg-white/30 dark:bg-white/5 border border-slate-200/20 dark:border-white/10 rounded-2xl`}
      >
        <div className="mb-6">
          <h1
            className={`text-7xl md:text-9xl font-extrabold mb-2 bg-clip-text text-transparent bg-linear-to-r from-pink-500 via-indigo-400 to-cyan-400`}
          >
            404
          </h1>
          <div className="mx-auto mt-3 h-1 w-36 rounded-full bg-linear-to-r from-pink-500 to-cyan-400" />
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold mb-3">
          Uh-oh — we can’t find that page.
        </h2>
        <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed text-slate-600 dark:text-gray-300">
          It looks like the page you’re looking for went off on an adventure.
          Try returning home or reach out if you think something’s broken.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4 items-center">
          <Link
            to="/"
            aria-label="Back to home"
            className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-pink-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 1.707a1 1 0 00-1.414 0L2 9v8a1 1 0 001 1h5a1 1 0 001-1v-4h2v4a1 1 0 001 1h5a1 1 0 001-1V9l-7.293-7.293z" />
            </svg>
            Back to Home
          </Link>

          <Link
            to="/"
            className="text-sm transition text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white"
          >
            Report an issue
          </Link>
        </div>

        {/* Decorative bouncing dots */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span
            className={`${styles.dot} ${styles.wiggle} bg-pink-400 dark:bg-pink-500`}
          />
          <span
            className={`${styles.dot} ${styles.wiggle} ${styles.delay2000} bg-indigo-400 dark:bg-indigo-500`}
          />
          <span
            className={`${styles.dot} ${styles.wiggle} ${styles.delay4000} bg-cyan-400 dark:bg-cyan-500`}
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
