const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readButton = document.getElementById("read");
const toggleButton = document.getElementById("toggle");
const closeButton = document.getElementById("close");

const data = [
  { image: "drink", text: "I'm Thirsty" },
  { image: "food", text: "I'm Hungry" },
  { image: "tired", text: "I'm Tired" },
  { image: "hurt", text: "I'm Hurt" },
  { image: "happy", text: "I'm Happy" },
  { image: "angry", text: "I'm Angry" },
  { image: "sad", text: "I'm Sad" },
  { image: "scared", text: "I'm Scared" },
  { image: "outside", text: "I Want To Go Outside" },
  { image: "home", text: "I Want To Go Home" },
  { image: "school", text: "I Want To Go To School" },
  { image: "grandma", text: "I Want To Go To Grandmas" },
];

data.forEach(({ image, text }) => {
  const box = document.createElement("div");
  box.classList.add("box");
  box.innerHTML = `
    <img src='https://github.com/bradtraversy/vanillawebprojects/blob/master/speech-text-reader/img/${image}.jpg?raw=true' alt="${text}"/>
    <p class="info">${text}</p>
  `;
  box.addEventListener("click", () => handleSpeech(text, box));
  main.appendChild(box);
});

let voices = [];
const message = new SpeechSynthesisUtterance();

function getVoices() {
  voices = speechSynthesis.getVoices();
  voicesSelect.innerHTML = voices.map(voice => `<option value="${voice.name}">${voice.name} ${voice.lang}</option>`).join("");
}

function handleSpeech(text, box) {
  message.text = text;
  speechSynthesis.speak(message);
  box.classList.add("active");
  setTimeout(() => box.classList.remove("active"), 800);
}

toggleButton.addEventListener("click", () => document.getElementById("text-box").classList.toggle("show"));
closeButton.addEventListener("click", () => document.getElementById("text-box").classList.remove("show"));
speechSynthesis.addEventListener("voiceschanged", getVoices);
voicesSelect.addEventListener("change", (e) => message.voice = voices.find(voice => voice.name === e.target.value));
readButton.addEventListener("click", () => handleSpeech(textarea.value));

getVoices();
