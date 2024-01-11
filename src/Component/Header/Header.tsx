import HeaderStyle from "./HeaderStyle";
import github from "../../Assets/images/github.svg";
import instagram from "../../Assets/images/instagram.svg";
import twitter from "../../Assets/images/twitter.svg";
import myImage from "../../Assets/images/My-image.jpg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyle>
      <div className='header__container'>
        <div className='img__container'>
          <img src={myImage} alt='' />
          <h2>Ezekiel Ajayi</h2>
        </div>
        <div className='name__container'>
          <p>
            Hello, I'm a frontend developer with 4 years of experience in
            creating user-friendly websites and web applications. This is where
            I show you the journey I've embarked on in the ever-evolving world
            of software development.    
          </p>
        </div>

        <div className='socials__container'>
          <Link to={"https://github.com/altramax"} target='_blank'>
            <img src={github} alt='' />
          </Link>
          <Link to={"https://x.com/the_izyy?s=21"} target='_blank'>
            <img src={twitter} alt='' />
          </Link>
          <Link
            to={"https://instagram.com/ezekielajayi_?igshid=OGQ5ZDc2ODk2ZA=="}
            target='_blank'
          >
            <img src={instagram} alt='' />
          </Link>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
