const elements = {
    word: document.getElementById("word"),
    text: document.getElementById("text"),
    scoreElement: document.getElementById("score"),
    timeElement: document.getElementById("time"),
    endgameElement: document.getElementById("end-game-container"),
    settingsButton: document.getElementById("settings-btn"),
    settings: document.getElementById("settings"),
    settingsForm: document.getElementById("settings-form"),
    difficultySelect: document.getElementById("difficulty"),
};

const words = [
    "sigh", "tense", "airplane", "ball", "pies", "juice", "warlike", "bad",
    "north", "dependent", "steer", "silver", "highfalutin", "superficial",
    "quince", "eight", "feeble", "admit", "drag", "loving",
];

let randomWord, score = 0, time = 10;
let difficulty = localStorage.getItem("difficulty") || "medium";

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function addWordToDom() {
    randomWord = getRandomWord();
    elements.word.innerText = randomWord;
}

function updateScore() {
    elements.scoreElement.innerText = ++score;
}

function updateTime() {
    if (--time < 0) {
        clearInterval(timeInterval);
        gameOver();
    }
    elements.timeElement.innerText = `${time}s`;
}

function gameOver() {
    elements.endgameElement.innerHTML = `
      <h1>Time ran out</h1>
      <p>Your final score is ${score}</p>
      <button onclick="location.reload()">Play Again</button>
    `;
    elements.endgameElement.style.display = "flex";
}

elements.text.addEventListener("input", (e) => {
    if (e.target.value === randomWord) {
        e.target.value = "";
        addWordToDom();
        updateScore();
        time += difficulty === "hard" ? 2 : difficulty === "medium" ? 3 : 5;
    }
});

elements.settingsButton.addEventListener("click", () => elements.settings.classList.toggle("hide"));
elements.settingsForm.addEventListener("change", (e) => {
    difficulty = e.target.value;
    localStorage.setItem("difficulty", difficulty);
});


elements.difficultySelect.value = difficulty;
addWordToDom();
elements.text.focus();
