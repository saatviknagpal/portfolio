import React from "react";
import "./education.scss";
import { ReactComponent as SchoolIcon } from "../../Util/school.svg";
import { educationData } from "../../Util/data";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export default function Education() {
  let schoolIconStyles = { background: "#ff083a" };

  return (
    <div className="education" id="education">
      <h1 className="title">EDUCATION</h1>
      <div className="wrapper">
        <VerticalTimeline>
          {educationData
            .slice()
            .reverse()
            .map((element) => {
              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={schoolIconStyles}
                  icon={<SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.schoolName}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.program}
                  </h5>
                </VerticalTimelineElement>
              );
            })}
        </VerticalTimeline>
      </div>
    </div>
  );
}
