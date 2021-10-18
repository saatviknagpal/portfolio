import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: [
        "Full Stack Web Development.",
        "Open Source.",
        "Competitive Programming.",
        "Gaming.",
        "Music.",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Saatvik Nagpal</h1>
          <h3>
            I'm into <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about" className="drop-arrow">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
