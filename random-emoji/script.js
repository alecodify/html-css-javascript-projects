const btn = document.getElementById("btn");
const emojiName = document.getElementById("emoji");

let emojis = [];

async function getEmojis() {
  const response = await fetch("https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1");
  const data = await response.json();

  emojis = data.slice(0, 1500).map(({ character, unicodeName }) => ({
    emojiName: character,
    emojiCode: unicodeName,
  }));
}

btn.addEventListener("click", () => {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  btn.innerText = randomEmoji.emojiName;
  emojiName.innerText = randomEmoji.emojiCode;
});

getEmojis();