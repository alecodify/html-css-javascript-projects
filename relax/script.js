const container = document.getElementById("container");
const text = document.getElementById("text");

const breatheInTime = 4000;
const holdTime = 7000;
const breatheOutTime = 8000;

function breatheAnimation() {
  text.innerText = "Breathe In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheInTime);
}

setInterval(breatheAnimation, breatheInTime + holdTime + breatheOutTime);

breatheAnimation();
