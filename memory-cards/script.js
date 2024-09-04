const cardsContainer = document.getElementById("cards-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const currentElement = document.getElementById("current");
const showButton = document.getElementById("show");
const hideButton = document.getElementById("hide");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const addCardButton = document.getElementById("add-card");
const clearButton = document.getElementById("clear");
const addContainer = document.getElementById("add-container");

let currentActiveCard = 0;

const cardsData = [
  { question: "What does CSS stand for?", answer: "Cascading Style Sheets" },
  { question: "What year was JavaScript launched?", answer: "1995" },
  { question: "What does HTML stand for?", answer: "Hypertext Markup Language" }
];

function createCard(data) {
  const card = document.createElement("div");
  card.className = "card" + (cardsContainer.children.length === 0 ? " active" : "");
  card.innerHTML = `
    <div class="inner-card">
      <div class="inner-card-front"><p>${data.question}</p></div>
      <div class="inner-card-back"><p>${data.answer}</p></div>
    </div>
  `;
  card.addEventListener("click", () => card.classList.toggle("show-answer"));
  cardsContainer.appendChild(card);
}

function updateCurrentText() {
  currentElement.innerText = `${currentActiveCard + 1}/${cardsContainer.children.length}`;
}

function showCard(index) {
  const cards = Array.from(cardsContainer.children);
  cards.forEach((card, i) => card.className = i === index ? "card active" : "card");
  currentActiveCard = index;
  updateCurrentText();
}

function addCard() {
  const question = questionElement.value.trim();
  const answer = answerElement.value.trim();
  if (question && answer) {
    createCard({ question, answer });
    questionElement.value = "";
    answerElement.value = "";
    addContainer.classList.remove("show");
  }
}

function clearCards() {
  cardsContainer.innerHTML = "";
  currentElement.innerText = "";
}

document.getElementById("next").addEventListener("click", () => {
  showCard((currentActiveCard + 1) % cardsContainer.children.length);
});

document.getElementById("prev").addEventListener("click", () => {
  showCard((currentActiveCard - 1 + cardsContainer.children.length) % cardsContainer.children.length);
});

showButton.addEventListener("click", () => addContainer.classList.add("show"));
hideButton.addEventListener("click", () => addContainer.classList.remove("show"));
addCardButton.addEventListener("click", addCard);
clearButton.addEventListener("click", clearCards);

cardsData.forEach(createCard);
updateCurrentText();
