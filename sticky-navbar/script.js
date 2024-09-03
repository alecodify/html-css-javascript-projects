const navbar = document.querySelector(".navbar");
const bottomContainer = document.querySelector(".bottom-container");

const threshold = bottomContainer.offsetTop - navbar.offsetHeight - 50;

window.addEventListener("scroll", () => {
  navbar.classList.toggle("active", window.scrollY > threshold);
});
