const form = document.querySelector(".form");
const input = document.querySelector(".input");
const ul = document.querySelector(".list");

const list = JSON.parse(localStorage.getItem("list")) || [];
list.forEach(task => addTaskToDOM(task));

form.addEventListener("submit", event => {
    event.preventDefault();
    const taskName = input.value.trim();
    if (taskName) {
        addTaskToDOM({ name: taskName });
        input.value = "";
        updateLocalStorage();
    }
});

function addTaskToDOM(task) {
    const li = document.createElement("li");
    li.classList.toggle("checked", task.checked || false);
    li.innerHTML = `
    ${task.name}
    <div class="check-btn"><i class="fas fa-check-square"></i></div>
    <div class="trash-btn"><i class="fas fa-trash"></i></div>
  `;

    ul.appendChild(li);

    li.querySelector(".check-btn").addEventListener("click", () => {
        li.classList.toggle("checked");
        updateLocalStorage();
    });

    li.querySelector(".trash-btn").addEventListener("click", () => {
        li.remove();
        updateLocalStorage();
    });
}

function updateLocalStorage() {
    const tasks = Array.from(ul.querySelectorAll("li")).map(item => ({
        name: item.firstChild.textContent.trim(),
        checked: item.classList.contains("checked")
    }));
    localStorage.setItem("list", JSON.stringify(tasks));
}
