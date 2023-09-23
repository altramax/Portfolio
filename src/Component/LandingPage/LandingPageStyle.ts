import styled from "styled-components";
import mediaQuery from "../MediaQuery/MediaQuery";

const LandingPageStyle = styled.div`
  background-color: rgba(59, 130, 246, 0.1);
  // height: 100vh;
  // width: 100vw;
  padding: 20px 30px;

  header {
    margin-bottom: 100px;
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

    .name__container {
      margin-top: 15px;
      p {
        margin-top: 8px;
      }
    }

    .socials__container {
      margin-top: 20px;
      img {
        width: 20px;
        margin-right: 15px;
        // height: 20px;
      }
    }

    .dot__container {
      
      margin-top: 10px;
      // width: 100%;

      .dot {
        height: 15px;
        width: 15px;
        border-radius: 50%;
      }

      .dot__group{
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 12px;
      }

      .--active {
        .dot {
          background-color: blue;
          border: none;
        }
        p {
          font-size: 16px;
          color: blue;
        }
      }

      .--inactive {
        .dot {
          border: 1px solid grey;
        }
        p {
          font-size: 12px;
          color: grey;
        }
      }
    }
  }

  @media ${mediaQuery.tablet} {
    padding: 50px 70px 20px 70px;
    // display: flex;
    // justify-content: end;
    // align-items: start;
    gap: 100px;
    // position: relative;

    header {
      width: 40%;
      position: fixed;
      left: 70px;
    }
    main {
      width: 50%;
      margin-left: auto;
    }
  }
`;
export default LandingPageStyle;
