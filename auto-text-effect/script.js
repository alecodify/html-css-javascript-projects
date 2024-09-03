const text = document.getElementById("text");
const speed = document.getElementById("speed");

const textContent = "We Love Programming!";

let index = 1;
let speedLimit = 300 / speed.value;

const writeText = () => {
  text.innerText = textContent.slice(0, index++);
  if (index > textContent.length) index = 1;
  setTimeout(writeText, speedLimit);
};

speed.oninput = () => (speedLimit = 300 / speed.value);

writeText();