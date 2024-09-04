const slider = document.querySelector(".container");
const slides = Array.from(document.querySelectorAll(".slide"));

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    currentIndex = 0;

window.oncontextmenu = (e) => e.preventDefault();

const getPositionX = (e) => e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;

const setSliderPosition = () => slider.style.transform = `translateX(${currentTranslate}px)`;

const animation = () => {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
};

const setPositionByIndex = () => {
  currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
};

const handleStart = (index) => (e) => {
  currentIndex = index;
  startPos = getPositionX(e);
  isDragging = true;
  animation();
  slider.classList.add("grabbing");
};

const handleEnd = () => {
  isDragging = false;
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex++;
  if (movedBy > 100 && currentIndex > 0) currentIndex--;
  setPositionByIndex();
  slider.classList.remove("grabbing");
};

const handleMove = (e) => {
  if (isDragging) {
    const currentPosition = getPositionX(e);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
};

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector("img");
  slideImage.addEventListener("dragstart", (e) => e.preventDefault());
  
  slide.addEventListener("touchstart", handleStart(index));
  slide.addEventListener("touchend", handleEnd);
  slide.addEventListener("touchmove", handleMove);

  slide.addEventListener("mousedown", handleStart(index));
  slide.addEventListener("mouseup", handleEnd);
  slide.addEventListener("mouseleave", handleEnd);
  slide.addEventListener("mousemove", handleMove);
});
