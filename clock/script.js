const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
    const now = new Date();

    const getHour = now.getHours();
    const getMinute = now.getMinutes();
    const getSecond = now.getSeconds();

    const hourDegree = (getHour / 12) * 360;
    const minuteDegree = (getMinute / 60) * 360;
    const secondDegree = (getSecond / 60) * 360;

    hour.style.transform = `rotate(${hourDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    second.style.transform = `rotate(${secondDegree}deg)`;
    
}

setInterval(setDate, 1000);