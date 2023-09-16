import LandingPageStyle from "./LandingPageStyle";
import myImage from "../../Assets/images/image.jpg";
import Projects from "../Projects/Projects";

const LandingPage = (): JSX.Element => {
  return (
    <LandingPageStyle>
      <main className="container">
        {/* <div className="g"></div>` */}
        <header>
          <div className="img__container">
            <img src={myImage} alt="" />
          </div>
          <div>
            <h1>Hi, Welcome</h1>
            <p>
              My name is Ezekiel Ajayi, Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Corrupti facere porro necessitatibus recusandae
              tempora delectus laborum sed, veritatis blanditiis eveniet, velit
              soluta omnis aliquam odio nihil iusto quidem temporibus impedit
              maxime deleniti, debitis veniam quam praesentium? Omnis unde
              fugiat, veniam sunt fugit veritatis velit beatae nobis facere
              culpa molestias soluta delectus deleniti! Quasi, repellendus.
              Nulla maiores asperiores deserunt natus praesentium culpa,
              voluptatibus eos ad ipsam molestiae iste aut consequuntur vero ab
              rem dolores recusandae neque quisquam quas illo beatae saepe earum
              quasi. Ex mollitia culpa dolorem dicta cupiditate ipsa nemo
              suscipit est labore deserunt, facilis hic! Eum voluptatibus
              pariatur ab.
            </p>
          </div>
        </header>
        <Projects></Projects>
      </main>
    </LandingPageStyle>
  );
};

export default LandingPage;
