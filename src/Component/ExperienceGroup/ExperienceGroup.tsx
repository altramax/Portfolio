import ExperienceGroupStyle from "./ExperienceGroupStyle";
import Experience from "../Experience/Experience";
import { experienceType } from "../Experience/Experience";

const ExperienceGroup = () => {

  const exp1:experienceType = {
    title: "Ea-tech",
    body: ["construction", "developemnt", "drainage"],
  };

  return (
    <ExperienceGroupStyle>
      <Experience {...exp1}/>
    </ExperienceGroupStyle>
  );
};

export default ExperienceGroup;
