// This component wraps up the month, year, and navigation buttons
import React from "react";
import "./CalendarHeader.css";

function CalendarHeader() {
  return (
    <div id="header">
      <div id="monthDisplay">
        <h2>January, 2021</h2>
      </div>
      <div>
        <button id="backButton" type="submit">
          Back
        </button>
        <button id="nextButton" type="submit">
          Next
        </button>
      </div>
    </div>
  );
}

export default CalendarHeader;
