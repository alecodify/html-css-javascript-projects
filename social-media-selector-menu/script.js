const menu = document.querySelector(".menu");
const socialLists = document.querySelector(".social");
const menuText = document.querySelector(".menu p");

menu.addEventListener("click", () => {
  socialLists.classList.toggle("hide");
  menu.classList.toggle("rotate");
});

document.querySelectorAll(".social li").forEach(li => {
  li.addEventListener("click", () => {
    menuText.innerHTML = li.innerHTML;
    socialLists.classList.add("hide");
    menu.classList.remove("rotate");
  });
});
