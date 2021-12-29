import React, { useState, useEffect } from "react";
import Day from "./components/Day";
import CalendarHeader from "./components/CalendarHeader";
import NewEventModal from "./components/NewEventModal";
import DeleteEventModal from "./components/DeleteEventModal";
import useDate from "./hooks/useDate";
import Weekdays from "./components/Weekdays";

function App() {
  // Keeps track of the month we're looking at.
  // 0 refers to current month then it increments/decrements based on the selection.
  const [nav, setNav] = useState(0);

  // Initialized as null.
  // Represents the day the user clicks on to add an event or to display something.
  const [clicked, setClicked] = useState(null);

  // Checks if there is an event item in the local storage. If not, events are set to an empty array.
  const [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  );

  const eventForDate = (date) => events.find((e) => e.date === date);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const { days, dateDisplay } = useDate(events, nav);

  const nextHandler = () => {
    setNav(nav + 1);
  };

  const backHandler = () => {
    setNav(nav - 1);
  };

  return (
    <>
      <div id="container">
        <CalendarHeader
          dateDisplay={dateDisplay}
          onNext={nextHandler}
          onBack={backHandler}
        />

        <Weekdays />

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

      {clicked && !eventForDate(clicked) && (
        <NewEventModal
          onClose={() => setClicked(null)}
          onSave={(title) => {
            setEvents([...events, { title, date: clicked }]);
            setClicked(null);
          }}
        />
      )}

      {clicked && eventForDate(clicked) && (
        <DeleteEventModal
          eventText={eventForDate(clicked).title}
          onClose={() => setClicked(null)}
          onDelete={() => {
            setEvents(events.filter((e) => e.date !== clicked));
            setClicked(null);
          }}
        />
      )}
    </>
  );
}

export default App;
