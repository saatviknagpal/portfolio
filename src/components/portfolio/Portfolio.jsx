import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {FiRadio} from "react-icons/fi"


import { frontend, fullStack } from "../../Util/data";

export default function Portfolio() {
  const [selected, setSelected] = useState("frontend");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "frontend",
      title: "Front End",
    },
    {
      id: "fullStack",
      title: "Full Stack",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "frontend":
        setData(frontend);
        break;
      case "fullStack":
        setData(fullStack);
        break;
      default:
        setData(frontend);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <div className="content">
        <h1>PORTFOLIO</h1>
        <p>Some of my works..</p>
      </div>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="card">
            <div className="item" key={d.id}>
              <img src={d.img} alt="" />
              <h3 className="text">{d.title}</h3>
              <a href={d.link}>
                <i className={d.icon} alt="" />
                
              </a>
              <a href={d.live}>
              <FiRadio className= "live-icon"/>
              </a>
              
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
