const container = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
  const colorContainer = document.createElement("div");
  colorContainer.classList.add("color");
  container.appendChild(colorContainer);
}

document.querySelectorAll(".color").forEach(box => {
  const colorCode = `#${generateRandomColor()}`;
  box.style.backgroundColor = colorCode;
  box.innerText = colorCode;
});

function generateRandomColor() {
  return [...Array(6)].map(() => "0123456789abcdef"[Math.floor(Math.random() * 16)]).join('');
}


// function generateRandomColor() {
//     const chars = "0123456789abcdef";
//     const colorCodeLength = 6;
//     let colorCode = "";
//     for (let index = 0; index < colorCodeLength; index++) {
//       const randomNum = Math.floor(Math.random() * chars.length);
//       colorCode += chars.substring(randomNum, randomNum + 1);
//     }
//     return colorCode;
// }
  