import React from "react";
import "./experience.scss";
import { ReactComponent as WorkIcon } from "../../Util/work.svg";
import { experienceData } from "../../Util/data";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  let workIconStyles = { background: "#ff083a" };

  return (
    <div className="experience" id="experience">
      <h1 className="title">EXPERIENCE</h1>
      <div className="wrapper">
        <VerticalTimeline>
          {experienceData
            .slice()
            .reverse()
            .map((element) => {
              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={workIconStyles}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.program}
                  </h5>
                  <p id="description">{element.description}</p>
                  <a href={`${element.link}`}>{element.buttonText}</a>
                </VerticalTimelineElement>
              );
            })}
        </VerticalTimeline>
      </div>
    </div>
  );
}
