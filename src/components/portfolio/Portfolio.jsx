import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  webApps,
  webDesign,
} from "../../Util/data";

export default function Portfolio() {
  const [selected, setSelected] = useState("webDesign");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "webApp",
      title: "Web App",
    },
    {
      id: "webDesign",
      title: "Web Design",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "webApps":
        setData(webApps);
        break;
      case "webDesign":
        setData(webDesign);
        break;
      default:
        setData(webApps);
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
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}