 const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const dateEl = document.getElementById("date");


 function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

   hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

   hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;

   const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  };

  dateEl.textContent = now.toLocaleDateString("en-US", options);
}


 setInterval(updateClock, 1000);

updateClock();
