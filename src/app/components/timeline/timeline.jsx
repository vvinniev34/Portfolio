"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Image from "next/image";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline(props) {
  const { elements = [] } = props;

  function TimelineElement(title, location, description, time, image = null) {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        style={{ margin: "2em 0" }}
        contentStyle={{ background: "#f6f2ee", color: "rgb(75 85 99)" }}
        date={time}
        iconStyle={{ background: "#fff", color: "#fff", overflow: "hidden" }}
        icon={
          image ? (
            <div className="w-full h-full flex items-center justify-center bg-white">
              <Image
                src={image}
                alt="timeline icon"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          ) : (
            {}
          )
        }
      >
        <h3
          className="vertical-timeline-element-title text-indianred"
          style={{ zIndex: 1, position: "relative" }}
        >
          {title}
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ zIndex: 1, position: "relative" }}
        >
          {location}
        </h4>
        <p className="" style={{ zIndex: 1, position: "relative" }}>
          {description}
        </p>
      </VerticalTimelineElement>
    );
  }

  return (
    <VerticalTimeline
      layout={"1-column-left"}
      lineColor={"white"}
      style={{ padding: "0" }}
    >
      {elements.map((element, i) => {
        return TimelineElement(
          element.title,
          element.location,
          element.description,
          element.time,
          element.img,
          i
        );
      })}
    </VerticalTimeline>
  );
}
