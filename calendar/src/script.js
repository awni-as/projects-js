let nav = 0;
let clicked = null;
let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];

const calendar = document.getElementById("calendar");
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function load() {
  const dt = new Date();
  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  //   Get The First day in a Month
  const firstDayOfMonth = new Date(year, month, 1);

  //   Get The # of Days in a Month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  console.log(daysInMonth);

  const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  //   Calculate the number of padding days
  const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);
}

load();
