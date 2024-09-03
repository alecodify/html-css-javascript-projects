const body = document.body;
const slides = document.querySelectorAll(".slide");
const buttons = document.querySelectorAll("#left, #right");

let activeSlide = 0;

const updateSlide = () => {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === activeSlide));
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    activeSlide = (activeSlide + (button.id === "right" ? 1 : -1) + slides.length) % slides.length;
    updateSlide();
  });
});

updateSlide();
