const button = document.getElementById('actionBtn');
const modal = document.getElementById('modal');
const close = document.querySelector('.close');
const card = document.querySelector('.card');

button.addEventListener('click', () => {
    modal.style.display = 'block';
    card.style.display = 'none';
    showConfetti();
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
    card.style.display = 'flex';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function showConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
