const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    contents.forEach(content => content.classList.remove("show"));
    listItems.forEach(listItem => listItem.classList.remove("active"));

    item.classList.add("active");
    contents[index].classList.add("show");
  });
});
