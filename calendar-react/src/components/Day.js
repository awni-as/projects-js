// This component wraps up the event and has a click listener that pops-up the event creation modal
import React from "react";
import "./Day.css";

function Day(props) {
  const className = `day ${props.day.value === "padding" ? "padding" : ""} ${
    props.day.isCurrentDay ? "currentDay" : ""
  }`;
  return (
    <div onClick={props.onClick} className="day">
      {props.day.value === "padding" ? "" : props.day.value}

      {props.day.event && <div className="event">{props.day.event.title}</div>}
    </div>
  );
}

export default Day;
