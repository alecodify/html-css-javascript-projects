const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const before = document.querySelector(".img-container-before");

const updateSliderPosition = (x) => {
  const containerWidth = container.offsetWidth;
  if (x < 0) x = 0;
  if (x > containerWidth) x = containerWidth;

  before.style.width = `${x}px`;
  slider.style.left = `${x}px`;
};

const onDrag = (e) => {
  const x = e.type.includes("mouse") ? e.pageX - container.offsetLeft : e.touches[0].clientX - container.offsetLeft;
  updateSliderPosition(x);
};

container.addEventListener("mousemove", onDrag);
container.addEventListener("touchstart", onDrag);
container.addEventListener("touchmove", onDrag);
