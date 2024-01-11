import LandingPageStyle from "./LandingPageStyle";
import Header from "../Header/Header";
import Sections from "../Sections/Sections";
import { useState } from "react";

const LandingPage = (): JSX.Element => {
  const [mouse, setMouse] = useState<any>({ top: 0, left: 0 });

  const effect = (evt: any) => {
    // console.log(evt.nativeEvent);
    setMouse({ top: evt.pageY, left: evt.pageX });
    // setTimeout(() => {
    //   setMouse("");
    // }, 2000);
  };

  // <div
  //   class='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'
  //   style='background: radial-gradient(600px at 149px 1702.33px, rgba(29, 78, 216, 0.15), transparent 80%);'
  // ></div>;

  return (
    <LandingPageStyle onMouseMove={(evt) => effect(evt)}>
      {mouse !== "" ? (
        <div
          className='circle'
          style={{ position: "absolute", ...mouse }}
        ></div>
      ) : null}
      <Header />
      <Sections />
    </LandingPageStyle>
  );
};

export default LandingPage;
