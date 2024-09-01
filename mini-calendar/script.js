const month = document.getElementById('month');
const day = document.getElementById('day');
const date = document.getElementById('date');
const year = document.getElementById('year');

const currentDate = new Date();
const getMonth = currentDate.getMonth();

month.innerText = currentDate.toLocaleString('en', {month: 'long'});

day.innerText = currentDate.toLocaleString('en', {weekday: 'long'});

date.innerText = currentDate.getDate();

year.innerText = currentDate.getFullYear();