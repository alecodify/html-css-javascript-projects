const imageContainer = document.querySelector(".container");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let x = 0;
let timer;

prev.addEventListener("click", () => rotateGallery(45));
next.addEventListener("click", () => rotateGallery(-45));

function rotateGallery(deg) {
  x += deg;
  clearTimeout(timer);
  updateGallery();
}

function updateGallery() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => rotateGallery(-45), 3000);
}

updateGallery();