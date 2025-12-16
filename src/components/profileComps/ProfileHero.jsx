import FlipCard from "../FlipCard";
import TypingCycle from "../TypingCycle";

const ProfileHero = () => {
  return (
    <>
      {/* Main card */}
      <FlipCard key={"profileHero"}>
        {/* We need a parent <div> with the rotate-y-180 class on the text to avoid a mirrored text image. */}
        <div className="rotate-y-180 h-full w-full">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-4">
            Hi!
            <br />
            I'm a{" "}
            <TypingCycle
              words={["Developer", "Programmer", "Coder", "Learner", "Problem Solver", "Student"]}
            />
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
      </FlipCard>
    </>
  );
};

export default ProfileHero;
