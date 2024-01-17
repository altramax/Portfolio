import ProjectStyle from "./ProjectsStyles";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Language from "../Language/Language";

interface projectType {
  image: any;
  text: string;
  link: string;
}

const Projects = ({ image, text, link }: projectType) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    observer.observe(images.current);
    observer.observe(textGroup.current);
  }, []);

  const images = useRef<any>();
  const textGroup = useRef<any>();



  const callBack = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fadein__left");
        entry.target.classList.add("fadein__right");

      } else {
        entry.target.classList.remove("fadein__right");
        entry.target.classList.remove("fadein__right");
      }
    });
  };

  const options = {};

  return (
    <ProjectStyle>
      <div className='project__group'>
        <div className='img__group' ref={images}>
          <Link to={link} target='_blank'>
            <img src={image} alt='' />{" "}
          </Link>
        </div>
        <div className='text__group' ref={textGroup}>
          <p className='text'>{text}</p>
          <div className='language__group'>
            <Language language='HTML' />
            <Language language='CSS' />
            <Language language='JAVASCRIPT' />
          </div>
        </div>
      </div>
    </ProjectStyle>
  );
};

export default Projects;
