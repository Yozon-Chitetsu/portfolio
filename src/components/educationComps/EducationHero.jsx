import FlipCard from "../FlipCard";
import TypingCycle from "../TypingCycle";

const EducationHero = () => {
  return (
    <>
      <FlipCard>
        {/* We need a parent <div> with the rotate-y-180 class on the text to avoid a mirrored text image. */}
        <div className="w-full flex flex-col justify-center rotate-y-180">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-6">
            Education
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-extrabold mb-6">
            I&apos;m The{" "}
            <span className="inline-block">
              <TypingCycle words={["Best", "King", "Demon Lord"]} />
            </span>
          </h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">

            {/*-------------Matric-----------------*/}
            <div className="flex justify-around items-center bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-black/30 dark:border-white/30 shadow-lg">
              <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">
                Matriculation - <span className="mb-3 text-base uppercase tracking-wider opacity-70">2020-2022</span>
              </h2>
            </div>

            {/*-------------Faculty in Arts-----------------*/}
            <div className="flex justify-around items-center bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-black/30 dark:border-white/30 shadow-lg">
              <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">
                Faculty in Arts (F. A) - <span className="mb-3 text-base uppercase tracking-wider opacity-70">2023-2025</span>
              </h2>
            </div>
          </div>
        </div>
      </FlipCard>
    </>
  );
};

export default EducationHero;
