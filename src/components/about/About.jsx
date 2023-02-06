import "./about.scss";
import Skills from "../skills/Skills";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="wrapper">
        <h1>ABOUT ME</h1>
        <p>
          I'm a CSE Junior from Dr. Akhilesh Das Gupta Institute of Technology
          and Management. <br /> <br />
          I am an aspiring Software Engineer/ Developer and I love to do
          programming and building websites. I am also an open-source enthusiast
          which means I love to collaborate with people by contributing to their
          projects. <br />
          <br />
          Apart from my technical side, I love to play video games, listen to
          music and enjoy going for walks.
        </p>
        <a href="https://drive.google.com/file/d/19jXGIcQz7sk12GKJyidkBVuPYFbUVPOF/view">View Resume</a>
      </div>
      <div className="skills">
        <Skills />
      </div>
    </div>
  );
}
