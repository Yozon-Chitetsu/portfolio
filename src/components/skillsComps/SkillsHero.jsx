import FlipCard from "../FlipCard";
import TypingCycle from "../TypingCycle";

const SkillsHero = () => {
  return (
    <FlipCard>
      {/* We need a parent <div> with the rotate-y-180 class on the text to avoid a mirrored text image. */}
      <div className="w-full flex flex-col justify-center rotate-y-180">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-6">
          My Skills & Technologies
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-4xl font-extrabold mb-6">
          I&apos;m The{" "}
          <span className="inline-block">
            <TypingCycle words={["Best", "King", "Demon Lord"]} />
          </span>
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/*-------------Front-End-----------------*/}

          <div className="bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-black/30 dark:border-white/30 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">
              Front-End
            </h2>

            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                HTML5
              </li>

              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                CSS3
              </li>

              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                JavaScript (ES6+)
              </li>

              <li className="pt-3">
                <p className="mb-2 text-xs uppercase tracking-wider opacity-70">
                  Frameworks & Libraries
                </p>

                <ul className="grid md:grid-cols-2 gap-2 pl-1">
                  {[
                    "Bootstrap 5",
                    "Tailwind CSS",
                    "React JS",
                    "Axios",
                    "Redux Toolkit",
                    "React Icons",
                    "React Router DOM",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-black/10 dark:bg-white/10 px-3 py-1 text-center text-xs md:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/*-------------Back-End-----------------*/}

          <div className=" bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-black/30 dark:border-white/30 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">
              Back-End{" "}
              <span className="text-sm font-medium opacity-70">
                (Foundations)
              </span>
            </h2>

            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                PHP 8+
              </li>

              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                Node.js
              </li>

              <li className="pt-4">
                <p className="mb-3 text-xs uppercase tracking-wider opacity-70">
                  Frameworks & Libraries
                </p>

                <ul className="grid md:grid-cols-2 gap-2">
                  {[
                    "Laravel",
                    "Express JS",
                    "CORS",
                    "Bcrypt JS",
                    ".NET",
                    "Express Validator",
                    "Multer",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-black/10 dark:bg-white/10 px-3 py-1 text-center text-xs md:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/*-------------Databases-----------------*/}

          <div className=" bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-black/30 dark:border-white/30 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">
              Databases{" "}
              <span className="text-sm font-medium opacity-70">
                (Foundations)
              </span>
            </h2>

            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                MySQL
              </li>

              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                Mongo DB
              </li>

              <li className="pt-4">
                <p className="mb-3 text-xs uppercase tracking-wider opacity-70">
                  Technologies
                </p>

                <ul className="grid md:grid-cols-2 gap-2">
                  {[
                    "Mongoose",
                    "PHPMyAdmin",
                    "SQL",
                    "Database Design & Normalization",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-black/10 dark:bg-white/10 px-3 py-1 text-center text-xs md:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/*-------------Tools & Methodologies-----------------*/}

          <div className=" bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-black/30 dark:border-white/30 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">
              Tools & Methodologies
            </h2>

            <ul className="space-y-3 text-sm md:text-base">
              {["RESTful APIs", "Postman", "NPM", "Composer", "VS Code"].map(
                (item) => (
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          
          
          {/*-------------Version Control-----------------*/}

          <div className=" bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-black/30 dark:border-white/30 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">
              Version Control
            </h2>

            <ul className="space-y-3 text-sm md:text-base">
              {["Git & Github"].map(
                (item) => (
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          
          
          {/*-------------Version Control-----------------*/}

          <div className=" bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-black/30 dark:border-white/30 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">
              SEO
            </h2>

            <ul className="space-y-3 text-sm md:text-base">
              {["Meta Tags", "Site Structure" , "Page Speed Optimization", "On-Page SEO Techniques"].map(
                (item) => (
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </FlipCard>
  );
};

export default SkillsHero;
