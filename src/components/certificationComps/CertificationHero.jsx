import FlipCard from "../FlipCard";
import TypingCycle from "../TypingCycle";
import certificate from "../../assets/certificate.jpg";

const CertificationHero = () => {
  return (
    <>
      <FlipCard key="certificationHero">
        {/* We need a parent <div> with the rotate-y-180 className on the text to avoid a mirrored text image. */}
        <div className="rotate-y-180">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-6">
            Certifications
          </h1>
          <h3 className="text-xl md:text-2xl lg:text-4xl font-extrabold mb-6">
            I&apos;m The{" "}
            <span className="inline-block">
              <TypingCycle words={["Best", "King", "Demon Lord"]} />
            </span>
          </h3>
          <div className="w-full z-10">

            {/* card no 1 */}
            <div className="space-y-3 text-sm md:text-base pointer bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-black/30 dark:border-white/30 shadow-lg">
              <h2 className="text-small md:text-base lg:text-xl font-extrabold mb-6">
                6 months Fullstack Web Development course at Masia Institute
              </h2>
                <img
                  src={certificate}
                  alt="Fullstack Web Dev Certificate"
                  loading="lazy"
                  decoding="async"
                  className="w-full object-contain"
                />
            </div>
          </div>
        </div>
      </FlipCard>
    </>
  );
};

export default CertificationHero;
