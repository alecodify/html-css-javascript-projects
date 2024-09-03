const loadText = document.querySelector(".loading");
const bg = document.querySelector(".bg");

let load = 0;

const blurring = () => {
  load++;
  if (load > 99) clearInterval(int);
  loadText.innerText = `${load}%`;
  loadText.style.opacity = (100 - load) / 100;
  bg.style.filter = `blur(${(100 - load) * 0.3}px)`;
};

let int = setInterval(blurring, 30);
