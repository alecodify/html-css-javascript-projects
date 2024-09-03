const textarea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

textarea.addEventListener("keyup", updateCounter);

function updateCounter() {
  const length = textarea.value.length;
  totalCounter.innerText = length;
  remainingCounter.innerText = textarea.maxLength - length;
}

updateCounter();