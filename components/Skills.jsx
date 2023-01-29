import skills from "../data/skills.json";
import Container from "./Container";
import SkillBox from "./SkillBox";

const Skills = () => {
  return (
    <Container id={"skills"}>
      <div className="flex flex-col justify-center">
        <p className="sm:text-xl  text-base tracking-widest uppercase text-primary">
          Skills
        </p>
        <h2 className="py-4 mb-2 sm:text-2xl text-xl lg:text-3xl">
          What I Can Do
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ title, img }, i) => (
            <SkillBox key={i} img={img} title={title} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
