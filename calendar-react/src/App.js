import React, { useState, useEffect } from "react";
import Day from "./components/Day";
import CalendarHeader from "./components/CalendarHeader";
import useDate from "./hooks/useDate";

function App() {
  // 0 refers to current month. -1 refers to the previous month. 1 refers to the next month.
  const [nav, setNav] = useState(0);

  // Initialized as null.
  const [clicked, setClicked] = useState();
  // Checks if there is an event item in the local storage. If not, events are set to an empty array.
  const [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <div id="container">
      <CalendarHeader />
      <div id="weekdays">
        <div>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
      </div>
      <Day />
    </div>
  );
}

export default App;
