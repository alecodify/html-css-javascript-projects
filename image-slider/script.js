const images = document.querySelector('.images');
const img = document.querySelectorAll('img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let currentImg = 1;
let timeout;

next.addEventListener('click', () => {
    currentImg++;
    clearTimeout(timeout);
    updateImage()
})

prev.addEventListener('click', () => {
    currentImg--;
    clearTimeout(timeout);
    updateImage();
})

updateImage();

function updateImage() {
    if (currentImg > img.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = img.length;
    }

    images.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

    timeout = setTimeout(() => {
        currentImg++;
        updateImage();
    }, 3000);
}