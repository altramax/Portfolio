import SectionsStyle from "./SectionsStyle"
import ProjectGroup from "../ProjectGroup/ProjectGroup";
import { useState } from "react";
import AboutMe from "../About/AboutMe";
import ExperienceGroup from "../ExperienceGroup/ExperienceGroup";
import { motion} from "framer-motion";

const Sections = () => {

    const [selectedPath, setSelectedPath] = useState<string>("aboutMe");

    const selectorHandler = (path: string) => {
      setSelectedPath(path);
    };
  
    const renderDisplay = (): JSX.Element => {
      return (
        <>
          {selectedPath === "aboutMe" ? <AboutMe /> : null}
          {selectedPath === "experience" ? <ExperienceGroup /> : null}
          {selectedPath === "projects" ? <ProjectGroup /> : null}
        </>
      );
    };
  
  return (
   <SectionsStyle>
      <div className="section__container">
        <ul className="section__ul">
          <li
            onClick={() => {
              selectorHandler("aboutMe");
            }}
          >
            <p>About</p>
            {selectedPath === "aboutMe" ? (
              <motion.div className='underline' layoutId='underline' />
            ) : null}
          </li>
          <li
            onClick={() => {
              selectorHandler("experience");
            }}
          >
            <p> Experience</p>
            {selectedPath === "experience" ? (
              <motion.div className='underline' layoutId='underline' />
            ) : null}
          </li>
          <li
            onClick={() => {
              selectorHandler("projects");
            }}
          >
            <p>Projects</p>
            {selectedPath === "projects" ? (
              <motion.div className='underline' layoutId='underline' />
            ) : null}
          </li>
        </ul>
        {selectedPath === "aboutMe" ? <AboutMe /> : null}
        {selectedPath === "experience" ? <ExperienceGroup/> : null}
        {selectedPath === "projects" ? <ProjectGroup /> : null}
      </div>
   </SectionsStyle>
  )
}

export default Sections