import React, { useState, useEffect } from "react";

function useDate(events, nav) {
  const [dateDisplay, setDateDisplay] = useState("");
  const [days, setDays] = useState([]);

  const eventForDate = (date) => events.find((e) => e.date === date);

  useEffect(() => {
    // Weekdays will be used to determine the number of padding days.
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Calendar Information.
    const dt = new Date();

    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    // Represents the number of days to render.
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    // Helps figuring out the number of padding days in the month.
    const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    setDateDisplay(
      `${dt.toLocaleDateString("en-us", { month: "long" })} ${year}`
    );

    // Number of padding days in a given month.
    const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

    // Looping through the padding days & days in the month and rendering them into squares.
    const daysArr = [];
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;

      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          event: eventForDate(dayString),
          isCurrentDay: i - paddingDays === day && nav === 0,
          date: dayString,
        });
      } else {
        daysArr.push({
          value: "padding",
          event: null,
          isCurrentDay: false,
          date: "",
        });
      }
    }

    setDays(daysArr);
  }, [events, nav]);

  return {
    days,
    dateDisplay,
  };
}

export default useDate;
