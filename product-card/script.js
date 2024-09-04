const card = document.querySelector(".card");
const container = document.querySelector(".container");

const elements = {
  title: document.querySelector(".title"),
  sneaker: document.querySelector(".sneaker img"),
  purchase: document.querySelector(".purchase"),
  description: document.querySelector(".info h3"),
  sizes: document.querySelector(".sizes"),
};

container.addEventListener("mousemove", (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

container.addEventListener("mouseenter", () => {
  card.style.transition = "none";
  Object.entries(elements).forEach(([key, element]) => {
    const transforms = {
      title: "translateZ(150px)",
      sneaker: "translateZ(200px) rotateZ(-45deg)",
      description: "translateZ(125px)",
      sizes: "translateZ(100px)",
      purchase: "translateZ(75px)",
    };
    element.style.transform = transforms[key] || "translateZ(0)";
  });
});

container.addEventListener("mouseleave", () => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = "rotateX(0deg) rotateY(0deg)";
  Object.values(elements).forEach((element) => {
    element.style.transform = "translateZ(0)";
  });
});
