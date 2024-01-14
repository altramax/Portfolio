import styled from "styled-components";

const ExperienceStyle = styled.div`
  .experience__container{
    padding: 20px;
   background-color: #4C4A50;
    box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
    border-radius: 10px;
  }

  h3 {
    width: fit-content;
  }
  .ul {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 15px;
    li {
      display: block;
    }
  }
`;
export default ExperienceStyle;
