import HeaderStyle from "./HeaderStyle";
import github from "../../Assets/images/github.svg";
import instagram from "../../Assets/images/instagram.svg";
import twitter from "../../Assets/images/twitter.svg";
import myImage from "../../Assets/images/My-image.jpg";
import linkedin from "../../Assets/images/linkedin_black.svg";
import githubColor from "../../Assets/images/github __color.svg";
import instagramColor from "../../Assets/images/instagram __color.svg";
import twitterColor from "../../Assets/images/twitter __color.svg";
import linkedincolor from "../../Assets/images/linkedin__color.svg"

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
        <Link
            to={"https://instagram.com/ezekielajayi_?igshid=OGQ5ZDc2ODk2ZA=="}
            target='_blank'
            className="linkedin__container"
          >
            <img src={linkedin} alt='' className="linkedin"/>
            <img src={linkedincolor} alt=''  className="linkedincolor"/>

          </Link>
          <Link to={"https://github.com/altramax"} target='_blank' className="git__container">
            <img src={github} alt='' className="git" />
            <img src={githubColor} alt='' className="gitcolor" />
          </Link>
          <Link to={"https://x.com/the_izyy?s=21"} target='_blank' className="twitter__container">
            <img src={twitter} alt='' className="twitter" />
            <img src={twitterColor} alt=''  className="twittercolor"/>

          </Link>
          <Link
            to={"https://instagram.com/ezekielajayi_?igshid=OGQ5ZDc2ODk2ZA=="}
            target='_blank'
            className="instagram__container"
          >
            <img src={instagram} alt='' className="instagram"/>
            <img src={instagramColor} alt=''  className="instagramcolor" />

          </Link>
         
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
