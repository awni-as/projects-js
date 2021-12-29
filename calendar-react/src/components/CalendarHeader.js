// This component wraps up the month, year, and navigation buttons
import React from "react";
import "./CalendarHeader.css";

function CalendarHeader(props) {
  return (
    <div id="header">
      <div id="monthDisplay">
        <h2>{props.dateDisplay}</h2>
      </div>
      <div>
        <button onClick={props.onBack} id="backButton" type="submit">
          Back
        </button>
        <button onClick={props.onNext} id="nextButton" type="submit">
          Next
        </button>
      </div>
    </div>
  );
}

export default CalendarHeader;
