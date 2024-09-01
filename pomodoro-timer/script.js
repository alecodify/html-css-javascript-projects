const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let interval;
let timeLeft = 1500;

function updateTimer() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    timer.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (interval) return; 
    interval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
        } else {
            timeLeft--;
        }
        updateTimer();
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    interval = null; 
}

function resetTimer() {
    clearInterval(interval);
    interval = null;
    timeLeft = 1500;
    updateTimer();
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

updateTimer(); 