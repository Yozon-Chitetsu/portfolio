import styles from "../css_modules/ProfileHero.module.css";

const ProfileHero = () => {
  return (
    <>
      <div
        className={`min-h-screen flex items-center justify-center text-center relative overflow-hidden px-4 bg-linear-to-br from-[#e6e6fa] via-[#f0dff5] to-[#f5c8e6] dark:from-slate-900 dark:via-purple-900 dark:to-slate-800 text-slate-900 dark:text-white`}
      >
        {/* Floating blurred blobs */}
        <div
          className={`absolute -left-20 -top-24 w-72 h-72 rounded-full bg-pink-300 dark:bg-pink-500 mix-blend-multiply dark:mix-blend-screen opacity-60 dark:opacity-30 filter blur-2xl ${styles.blob}`}
        />
        <div
          className={`absolute right-20 -top-16 w-80 h-80 rounded-full bg-indigo-300 dark:bg-indigo-500 mix-blend-multiply dark:mix-blend-screen opacity-40 dark:opacity-40 filter blur-2xl ${styles.blob} ${styles.blob2}`}
        />
        <div
          className={`absolute left-10 -bottom-12 w-96 h-96 rounded-full bg-cyan-300 dark:bg-cyan-500 mix-blend-multiply dark:mix-blend-screen opacity-40 dark:opacity-40 filter blur-3xl ${styles.blob} ${styles.blob3}`}
        />

        {/* Main card */}
        <div
          className={`relative z-10 max-w-6xl w-full h-full p-10 md:p-16 shadow-2xl text-center backdrop-blur-sm bg-white/30 dark:bg-white/5 border border-slate-200/20 dark:border-white/10 rounded-2xl`}
        >
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-4">
            Welcome to my Profile
          </h1>
          <p className="text-sm md:text-lg lg:text-xl">
            A highly motivated and passionate Full-Stack Web Developer with a
            strong foundation in modern web technologies. Proficient in building
            responsive, and user-friendly web applications using the MERN stack
            (MongoDB, Express.js, React.js, Node.js), bootstrap5, Tailwind CSS,
            Html5, and Laravel framework along with RESTful APIs, Postman, NPM,
            VS Code.
          </p>
          <br />
          <p className="text-sm md:text-lg lg:text-xl">
            Eager to apply my expertise in React.js, PHP, Laravel, and MySQL to
            contribute to a collaborative team environment. A quick learner with
            a proven ability to manage projects from concept to deployment.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileHero;
