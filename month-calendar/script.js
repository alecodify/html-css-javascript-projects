const month = document.querySelector('.date h1');
const date = document.querySelector('.date p');
const days = document.querySelector('.days');

const monthIndex = new Date().getMonth();

const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDate() - 1;

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

month.innerText = months[monthIndex];
date.innerText = new Date().toDateString();

let monthDays = "";

for (let i =  firstDay; i > 0; i--) {
    monthDays += `<div class="empty"></div>`
}

for (let i = 1; i < lastDay; i++) {
    if (i === new Date().getDate()) {
        monthDays += `<div class="today">${i}</div>`
    } else {
        monthDays += `<div>${i}</div>`
    }
    
}

days.innerHTML = monthDays;