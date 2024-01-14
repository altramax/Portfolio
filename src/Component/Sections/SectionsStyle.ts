import styled from "styled-components";
import mediaQuery from "../MediaQuery/MediaQuery";

const SectionsStyle = styled.div`
  padding-top: 40px;
  height: 100%;

  .section__container {
    width: 90%;
  }

  .section__ul{
    margin: auto;
    list-style: none;
    display: flex;
    justify-content: space-between;

    li {
      cursor: pointer;
      p {
        color: #fff;
        font-weight: 600;
        padding: 10px;
      }
    }
  }

  .underline {
    // position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    background: red;
    height: 2px;
  }

  @media ${mediaQuery.desktop} {
    padding: 0 50px 50px 50px;
    width: 50%;
    // height: 100%;
    // position: relative;
    //   width: 50%;
    margin-left: auto;
    .section__ul {
      padding-top: 40px;
      position: sticky;

      top: 0;
      background-color: #4C4A50;
    }
  }
`;

export default SectionsStyle;
