import styled from "styled-components";
import mediaQuery from "../MediaQuery/MediaQuery";

const LandingPageStyle = styled.div`
  .container {
    background-color: rgba(59,130,246,.1);
    height: 100vh;
    width: 100vw;
    padding: 20px 30px;

    header {
      h1 {
        font-size: 20px;
      }
      .img__container {
        img {
          width: 280px;
          height: 280px;
          border-radius: 50%;
        }
      }
    }
  //   .g{
  //     position: absolute;
  //     top:0;
  //     left: 0;
  //     // background-color: pink;
  //     width: 100vw;
  //     height: 100vh;
  //   }
  }
  // .g:hover{
  //   background: radial-gradient(600px at 410px 130px, rgba(29, 78, 216, 0.15), transparent 80%);
  // }



  @media ${mediaQuery.tablet} {
    .container {
      padding: 70px 70px 20px 70px; 
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 100px;
      }
    }
  }
`;
export default LandingPageStyle;
