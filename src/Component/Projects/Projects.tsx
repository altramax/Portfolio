import ProjectStyle from "./ProjectsStyles";

interface projectType {
  image: any;
  text: string;
}

const Projects = ({ image, text }: projectType) => {
  return (
    <ProjectStyle>
      <div className="project__container">
        <div className="img__group">
          <img src={image} alt="" />
        </div>
        <p>{text}</p>
      </div>
    </ProjectStyle>
  );
};

export default Projects;
