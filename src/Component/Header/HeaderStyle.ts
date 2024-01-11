import styled from "styled-components";
import mediaQuery from "../MediaQuery/MediaQuery";

const HeaderStyle = styled.div`
  margin: auto;
  z-index: 1;
//   background-color: red;
  // background-color: #D9B4A7;
  
  .header__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .img__container {
    width: 280px;
    img {
      width: 100%;
      border-radius: 20px;
    }
    h2 {
      margin: 10px auto 0 auto;
      width: fit-content;
    }
  }

  .name__container {
    margin-top: 15px;
    p {
      margin-top: 8px;
      text-align: center;
      width: 70%;
      margin: auto;
    font-size: 14px;
    }
  }

  .socials__container {
    margin: 20px 0;
    img {
      width: 20px;
      margin-right: 15px;
    }
  }

  @media${mediaQuery.desktop} {
    position: fixed;
    display: flex;
  flex-direction: column;
  justify-content: center;
    height: 100vh;
    width: 50%;
    // .header__container{
    // width: 80%;

    // }

    .img__container {
      img {
        width: 300px;
        border-radius: 20px;
      }
    }
  }
`;

export default HeaderStyle;
