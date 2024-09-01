const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const secondCount = 1000;
  const minuteCount = secondCount * 60;
  const hourCount = minuteCount * 60;
  const dayCount = hourCount * 24;

  const d = Math.floor(gap / dayCount);
  const h = Math.floor((gap % dayCount) / hourCount);
  const m = Math.floor((gap % hourCount) / minuteCount);
  const s = Math.floor((gap % minuteCount) / secondCount);
  day.innerText = d;
  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
  setTimeout(updateCountdown, 1000)
}
