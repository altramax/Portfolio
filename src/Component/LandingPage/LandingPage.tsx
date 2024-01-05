import LandingPageStyle from "./LandingPageStyle";
import myImage from "../../Assets/images/My-image.jpg";
import ProjectGroup from "../ProjectGroup/ProjectGroup";
// import ecommerce from "../../Assets/images/ecommerce.png";
import github from "../../Assets/images/github.svg";
import instagram from "../../Assets/images/instagram.svg";
import twitter from "../../Assets/images/twitter.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import AboutMe from "../About/AboutMe";
import Experience from "../Experience/Experience";
import { motion, AnimatePresence } from "framer-motion";
// import { useInView } from "react-intersection-observer";

const LandingPage = (): JSX.Element => {
  const [selectedPath, setSelectedPath] = useState<string>("aboutMe");

  const selectorHandler = (path: string) => {
    setSelectedPath(path);
  };

  const renderDisplay = (): JSX.Element => {
    return (
      <>
        {selectedPath === "aboutMe" ? <AboutMe /> : null}
        {selectedPath === "experience" ? <Experience /> : null}
        {selectedPath === "projects" ? <ProjectGroup /> : null}
      </>
    );
  };

  return (
    <LandingPageStyle>
      <header>
        <div className="header__container">
          <div className="img__container">
            <img src={myImage} alt="" />
            <h1>Ezekiel Ajayi</h1>
          </div>
          <div className="name__container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              placeat facilis harum eligendi. Veritatis saepe quia mollitia quae
              nn
            </p>
          </div>

          <div className="socials__container">
            <Link to={"https://github.com/altramax"} target="_blank">
              <img src={github} alt="" />
            </Link>
            <Link to={"https://x.com/the_izyy?s=21"} target="_blank">
              <img src={twitter} alt="" />
            </Link>
            <Link
              to={"https://instagram.com/ezekielajayi_?igshid=OGQ5ZDc2ODk2ZA=="}
              target="_blank"
            >
              <img src={instagram} alt="" />
            </Link>
          </div>
        </div>
      </header>
      <main>
        <ul>
          <li
            onClick={() => {
              selectorHandler("aboutMe");
            }}
          >
            <p>About</p>
            {selectedPath === "aboutMe" ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </li>
          <li
            onClick={() => {
              selectorHandler("experience");
            }}
          >
            <p> Experience</p>
            {selectedPath === "experience" ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </li>
          <li
            onClick={() => {
              selectorHandler("projects");
            }}
          >
            <p>Projects</p>
            {selectedPath === "projects" ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </li>
        </ul>

        <AnimatePresence mode="wait">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 3 }}
          >
            {renderDisplay()}
          </motion.div>
        </AnimatePresence>
        {/* <div>
         
        </div> */}
      </main>
    </LandingPageStyle>
  );
};

export default LandingPage;
