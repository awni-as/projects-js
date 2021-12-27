import React, { useState, useEffect } from "react";
import Day from "./components/Day";
import CalendarHeader from "./components/CalendarHeader";
import NewEventModal from "./components/NewEventModal";
import DeleteEventModal from "./components/DeleteEventModal";
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

  const { days, dateDisplay } = useDate(events, nav);

  return (
    <div id="container">
      <CalendarHeader
        dateDisplay={dateDisplay}
        onNext={() => setNav(nav + 1)}
        onBack={() => setNav(nav - 1)}
      />
      <div id="weekdays">
        <div>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
      </div>
      <div id="calendar">
        {days.map((d, index) => (
          <Day
            key={index}
            day={d}
            onClick={() => {
              if (d.value !== "padding") {
                setClicked(d.date);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
