import styled from "styled-components";

const ProjectStyle = styled.div`
  .project__container {
    padding: 30px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 25px 25px 50px #c5c5c5, -25px -25px 50px #fbfbfb;
    width: 100%;
    margin-top: 10px;


    // .project__group {
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    // }

    .img__group {
        margin-top: 20px;
      width: 100%;
      height: 300px;
      display: flex;
      justify-content: center;
      img {
        max-width: 100%;
        height: 300px;
        border-radius: 20px;
      }
      p {
        margin-top: 20px;
      }
    }

    .language__group {
        margin-top: 20px;
      display: flex;
      justify-content: start;
      align-items: center;
    //   padding-left: 30px;
    }
  }
`;
export default ProjectStyle;
