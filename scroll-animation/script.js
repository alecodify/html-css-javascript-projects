const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
  const triggerBottom = window.innerHeight * 0.8;
  boxes.forEach(box => 
    box.classList.toggle("show", box.getBoundingClientRect().top < triggerBottom)
  );
};

window.addEventListener("scroll", checkBoxes);
checkBoxes();
