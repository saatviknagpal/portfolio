import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Menu from "./components/menu/Menu";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio"
import "./app.scss";
import {useState} from "react";



function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
    <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
    <Menu  menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
      <div className="sections">
        <Intro/>
        <About/>
        <Experience/>
        <Education/>
        <Portfolio />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
