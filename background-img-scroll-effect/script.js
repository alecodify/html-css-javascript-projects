const bg = document.getElementById('bgImage');

window.addEventListener('scroll', () => {
    updateImage();
})

function updateImage () {
    const scrollPosition = window.scrollY;
    bg.style.opacity = 1 - scrollPosition / 900;
    bg.style.backgroundSize = 160 - scrollPosition / 12 + "%";
}