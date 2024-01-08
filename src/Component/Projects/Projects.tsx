import ProjectStyle from "./ProjectsStyles";
import { Link } from "react-router-dom";

interface projectType {
  image: any;
  text: string;
  link: string;
}

const Projects = ({ image, text, link }: projectType) => {
  return (
    <ProjectStyle>
      <div className="project__container">
        <div className="img__group">
          <Link to={link} target="_blank">
         
            <img src={image} alt="" />{" "}
          </Link>
        </div>
        <p>{text}</p>
      </div>
    </ProjectStyle>
  );
};

export default Projects;
