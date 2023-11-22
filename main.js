
const daysDate = document.getElementById("gün");
// console.log(daysDate);

const hoursDate = document.getElementById("saat");
// console.log(hoursDate);

const minsDate = document.getElementById("dakika");
// console.log(minsDate);

const secondsDate = document.getElementById("saniye");
// console.log(secondsDate);

const newYears = "1 Jan 2024";

function countdown() {
 const newYearsDate = new Date(newYears);
 const currentDate = new Date();

 const totalSeconds = (newYearsDate - currentDate) / 1000;

 const gün = Math.floor(totalSeconds / 3600 / 24);
 const saat = Math.floor(totalSeconds / 3600) % 24;
 const dakika = Math.floor(totalSeconds / 60) % 60;
 const saniye = Math.floor(totalSeconds) % 60;

 daysDate.innerHTML = gün;
 hoursDate.innerHTML = formatTime(saat);
 minsDate.innerHTML = formatTime(dakika);
 secondsDate.innerHTML = formatTime(saniye);
}

function formatTime(time) {
 return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);



