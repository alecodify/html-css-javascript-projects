const container = document.getElementById("container");
const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");

signUp.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signIn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
