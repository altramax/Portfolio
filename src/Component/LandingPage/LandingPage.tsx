import LandingPageStyle from "./LandingPageStyle";
import myImage from "../../Assets/images/image.jpg";
import Projects from "../Projects/Projects";
import ecommerce from "../../Assets/images/ecommerce.png";
import github from "../../Assets/images/github.svg";
import instagram from "../../Assets/images/instagram.svg";
import twitter from "../../Assets/images/twitter.svg";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Language from "../Language/Language";

const LandingPage = (): JSX.Element => {
  const { ref: about, inView: aboutElement } = useInView();
  const { ref: experience, inView: experienceElement } = useInView();
  const { ref: projects, inView: projectsElement } = useInView();

  return (
    <LandingPageStyle>
      <header>
        <div className="img__container">
          <img src={myImage} alt="" />
        </div>
        <div className="name__container">
          <h1>Ezekiel Ajayi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            placeat facilis harum eligendi. Veritatis saepe quia mollitia quae
            nn
          </p>
        </div>
        <div>
          <div className="dot__container">
            <div
              className={`dot__group ${
                aboutElement === true ? "--active" : "--inactive"
              }`}
            >
              <div className="dot"></div>
              <p>About</p>
            </div>
          </div>
          <div className="dot__container">
            <div
              className={`dot__group ${
                experienceElement === true ? "--active" : "--inactive"
              }`}
            >
              <div className="dot"></div>
              <p>Experience</p>
            </div>
          </div>
          <div className="dot__container">
            <div
              className={`dot__group ${
                projectsElement === true ? "--active" : "--inactive"
              }`}
            >
              <div className="dot"></div>
              <p>Projects</p>
            </div>
          </div>
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
      </header>

      <main>
        <div>
          <h1 ref={about}>Hi, Welcome</h1>
          <p>
            I've always been facinated by the internet for a long time. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Debitis, sunt
            cumque? Iste, doloribus nostrum ex porro ea eligendi animi eveniet
            natus aliquam id dolor repellendus accusantium sequi nesciunt
            inventore sapiente?
          </p>
        </div>

        <div className="project__container__box">
          <h3>E-commerce Web App</h3>
          <Projects
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Ipsam nobis dolore corporis delectus. Recusandae eos nostrum et at
        maiores totam facere eligendi non iusto iure debitis repellat
        accusantium atque deserunt ipsum dignissimos, quaerat tempora laborum
        pariatur ducimus minus ea ratione! Odit totam quasi tempore blanditiis
        dolorum culpa temporibus nesciunt quisquam."
            image={ecommerce}
            link={"https://e-commerce-gimhv49mt-altramax.vercel.app/"}
          />
          <div className="language__container">
            <Language language="Typescript" /> <Language language="React" />
            <Language language="Html" />
            <Language language="Sass" /> <Language language="Vite" />
          </div>
        </div>

        <div className="project__container__box">
          <h3>E-commerce Web App</h3>
          <Projects
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Ipsam nobis dolore corporis delectus. Recusandae eos nostrum et at
        maiores totam facere eligendi non iusto iure debitis repellat
        accusantium atque deserunt ipsum dignissimos, quaerat tempora laborum
        pariatur ducimus minus ea ratione! Odit totam quasi tempore blanditiis
        dolorum culpa temporibus nesciunt quisquam."
            image={ecommerce}
          />
          <div className="language__container">
            <Language language="HTML" /> <Language language="HTML" />{" "}
            <Language language="HTML" />
          </div>
        </div>
      </main>
    </LandingPageStyle>
  );
};

export default LandingPage;
