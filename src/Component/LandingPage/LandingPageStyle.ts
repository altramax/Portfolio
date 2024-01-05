import styled from "styled-components";
import mediaQuery from "../MediaQuery/MediaQuery";

const LandingPageStyle = styled.div`
  font-family: 'Montserrat', sans-serif;
  background-color: #F2D9D0;
  padding: 40px 40px;
  // height: 100vh;

  header {
    z-index: 1;

    // background-color: #D9B4A7;
   .header__container{
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
      h1{
        margin:10px auto 0 auto;
        width: fit-content;

      }
    }

    .name__container {
      margin-top: 15px;
      p {
        margin-top: 8px;
        text-align: center;
      }
    }

    .socials__container {
      margin: 20px 0;
      img {
        width: 20px;
        margin-right: 15px;
        // height: 20px;
      }
    }
  }

  
  ul{
    margin: auto;
    list-style: none;
    display: flex;
    justify-content:space-between;
    // gap: 30px;
    width: 80%;
    li{
      cursor: pointer;
      p{
        color: #000;
        font-weight: 600;
        padding: 10px;}
    }
  }


  .underline{
    // position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    background: red;
    height: 2px;
  
  }

  main{
    padding-top: 40px;
    z-index: 10;
  }



  

  @media ${mediaQuery.desktop} {
    padding: 0;
    gap: 100px;
 

    header {
     display:flex;
     align-items: center;
     height: 100vh;
     position: fixed;
     left: 70px;
     .header__container{
       width: 40%;
     }
     .img__container {
      img {
        width: 300px;
        border-radius: 20px;
      }
    }

    }
    main {
      position: relative;
      width: 50%;
      margin-left: auto;
    }
  }
`;
export default LandingPageStyle;
