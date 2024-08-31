const counter = document.querySelector('.counter');
const loadingBar = document.querySelector('.bar-front');

let index = 0;

updateLoading();

function updateLoading() {
    counter.innerText = `${index}%`;
    loadingBar.style.width = `${index}%`;

    index++;

    if (index < 101) {
        setTimeout(updateLoading, 20);
    }
}