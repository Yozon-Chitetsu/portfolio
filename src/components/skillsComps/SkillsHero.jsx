import FlipCard from "../FlipCard";

const SkillsHero = () => {
  return (
    <>
      <FlipCard key={"skillsHero"}>
        {/* We must need a div with "rotate-y-180" class in order to aviod mirrored image */}
        <div className="rotate-y-180">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-4">
            Welcome to my Skills
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

export default SkillsHero;