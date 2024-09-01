const btn = document.querySelector(".btn");
const input = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alert");

btn.addEventListener("click", createPassword);

copyIcon.addEventListener("click", () => {
  if (input.value) {
    copyPassword();
    alertContainer.classList.remove("active");
    setTimeout(() => alertContainer.classList.add("active"), 2000);
  }
});

function createPassword() {
  const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const password = Array.from({ length: 14 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  input.value = password;
  alertContainer.innerText = `${password} copied!`;
}

function copyPassword() {
  input.select();
  navigator.clipboard.writeText(input.value);
}