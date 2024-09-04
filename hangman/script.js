const wordElement = document.getElementById("word");
const wrongLettersElement = document.getElementById("wrong-letters");
const playAgainButton = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const finalMessageRevealWord = document.getElementById("final-message-reveal-word");
const figureParts = document.querySelectorAll(".figure-part");

const words = [
  "application", "programming", "interface", "wizard", "element", "prototype",
  "callback", "undefined", "arguments", "settings", "selector", "container",
  "instance", "response", "console", "constructor", "token", "function", "return",
  "length", "type", "node"
];

let selectedWord = getRandomWord();
let correctLetters = [];
let wrongLetters = [];
let playable = true;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
  wordElement.innerHTML = selectedWord.split('').map(letter =>
    `<span class="letter">${correctLetters.includes(letter) ? letter : ''}</span>`
  ).join('');

  if (wordElement.innerText.replace(/\n/g, '') === selectedWord) {
    endGame("Congratulations! You won! 😃", '');
  }
}

function updateWrongLettersElement() {
  wrongLettersElement.innerHTML = wrongLetters.length ? `<p>Wrong</p>${wrongLetters.map(letter => `<span>${letter}</span>`).join('')}` : '';
  figureParts.forEach((part, index) => part.style.display = index < wrongLetters.length ? 'block' : 'none');

  if (wrongLetters.length === figureParts.length) {
    endGame("Unfortunately you lost. 😕", `...the word was: ${selectedWord}`);
  }
}

function showNotification() {
  notification.classList.add("show");
  setTimeout(() => notification.classList.remove("show"), 2000);
}

function endGame(message, revealWord) {
  finalMessage.innerText = message;
  finalMessageRevealWord.innerText = revealWord;
  popup.style.display = "flex";
  playable = false;
}

window.addEventListener("keypress", (e) => {
  if (!playable) return;
  
  const letter = e.key.toLowerCase();
  if (letter >= "a" && letter <= "z") {
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLettersElement();
      } else {
        showNotification();
      }
    }
  }
});

playAgainButton.addEventListener("click", () => {
  correctLetters = [];
  wrongLetters = [];
  selectedWord = getRandomWord();
  displayWord();
  updateWrongLettersElement();
  popup.style.display = "none";
});

displayWord();