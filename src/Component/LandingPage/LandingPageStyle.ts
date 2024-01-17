import styled from "styled-components";
import mediaQuery from "../MediaQuery/MediaQuery";

const LandingPageStyle = styled.div`
  background-color: #fff;
  font-family: "Montserrat", sans-serif;
  padding: 40px 40px;
  min-height: 100vh;

  height: 100%;
  // overflow: hidden;

  // width: 100vw;

  // .circle {
  //   background-image: radial-gradient(
  //     circle at center,
  //    #4C4A50,
  //     #343236 70%,
  //     // #908A96 10%,
  //     transparent 80%
  //     );

  //   height: 800px;
  //   width: 800px;
  //   border-radius: 50%;
  //   // // z-index: 20;
  //   margin: -400px 0 0 -400px;
  //   opacity: 0.5;
  // }

  @media ${mediaQuery.desktop} {
    // background-color: #fff;
    position: relative;
    // overflow: hidden;
    padding: 0;
    gap: 100px;
    display: flex;
  }
`;
export default LandingPageStyle;
