const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const form = document.getElementById("form");
const input = document.getElementById("input");
const question = document.getElementById("question");
const score = document.getElementById("score");

let count = JSON.parse(localStorage.getItem("score"));

if (!count) {
  count = 0;
}

score.innerText = `score: ${count}`;

question.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

form.addEventListener("submit", () => {
  const userAns = +input.value;
  if (userAns === correctAns) {
    count++;
    updateLocalStorage();
  } else {
    count--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(count));
}
