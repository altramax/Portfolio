import ProjectStyle from "./ProjectsStyles";
import { Link } from "react-router-dom";
import Language from "../Language/Language";

interface projectType {
  image: any;
  text: string;
  link: string;
}

const Projects = ({ image, text, link }: projectType) => {
  return (
    <ProjectStyle>
      <div className="project__container">
        <div className="project__group">
          <div className="img__group">
            <Link to={link} target="_blank">
              <img src={image} alt="" />{" "}
            </Link>
          </div>
          <p>{text}</p>
        </div>
        <div className="language__group">
          <Language language="HTML" />
          <Language language="CSS" />
          <Language language="JAVASCRIPT" />
        </div>
      </div>
    </ProjectStyle>
  );
};

export default Projects;
