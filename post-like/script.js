const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let lastClickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click", (e) => {
  const currentTime = new Date().getTime();
  
  if (currentTime - lastClickTime < 800) {
    createHeart(e);
  }
  
  lastClickTime = currentTime;
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas", "fa-heart");

  const xInside = e.clientX - e.target.offsetLeft;
  const yInside = e.clientY - e.target.offsetTop;
  
  heart.style.left = `${xInside}px`;
  heart.style.top = `${yInside}px`;
  
  loveMe.appendChild(heart);
  times.textContent = ++timesClicked;
  
  setTimeout(() => heart.remove(), 1000);
};
