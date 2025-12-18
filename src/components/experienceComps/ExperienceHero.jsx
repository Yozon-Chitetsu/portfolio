import FlipCard from "../FlipCard";
import TypingCycle from "../TypingCycle";

const ExperienceHero = () => {
  return (
    <FlipCard>
      {/* Back face (rotate to avoid mirror) */}
      <div className="rotate-y-180 w-full">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-10 text-center">
          Experience
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-4xl font-extrabold mb-6">
          I&apos;m The{" "}
          <span className="inline-block">
            <TypingCycle words={["Best", "King", "Demon Lord"]} />
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Experience Card */}
          <div className="bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-black/30 dark:border-white/30 shadow-lg">
            <h2 className="text-xl font-bold mb-2">Web Developer</h2>
            <p className="text-sm opacity-70 mb-4">
              Freelance · 2024 – Present
            </p>

            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                Built responsive front-end interfaces using React and Tailwind
                CSS
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                Developed REST APIs with Node.js and Express
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                Integrated MongoDB and MySQL databases
              </li>
            </ul>
          </div>

          {/* Experience Card */}
          <div className="bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-black/30 dark:border-white/30 shadow-lg">
            <h2 className="text-xl font-bold mb-2">Web Development Student</h2>
            <p className="text-sm opacity-70 mb-4">
              Self-Taught & Projects · Ongoing
            </p>

            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                Built full-stack portfolio projects from scratch
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                Practiced clean architecture and reusable components
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                Learned modern tooling, Git workflows, and deployment basics
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FlipCard>
  );
};

export default ExperienceHero;
