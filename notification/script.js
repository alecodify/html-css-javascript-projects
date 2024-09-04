const button = document.getElementById("btn");
const toasts = document.getElementById("toasts");

const messages = ["Message One", "Message Two", "Message Three", "Message Four"];
const types = ["info", "success", "error"];

const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

const createNotification = () => {
  const notif = document.createElement("div");
  notif.className = `toast ${getRandomItem(types)}`;
  notif.innerText = getRandomItem(messages);
  toasts.appendChild(notif);
  setTimeout(() => notif.remove(), 3000);
};

button.addEventListener("click", createNotification);
