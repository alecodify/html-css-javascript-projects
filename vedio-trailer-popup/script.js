const btn = document.querySelector(".btn");
const closeIcon = document.querySelector(".close");
const trailerContainer = document.querySelector(".trailer");
const video = document.querySelector("video");

btn.addEventListener("click", () => {
  trailerContainer.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
  trailerContainer.classList.add("active");
  video.pause();
  video.currentTime = 0;
});
