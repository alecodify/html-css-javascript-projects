const container = document.querySelector('.container');

const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter', () => {
    container.classList.add('active-left');
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('active-left');
})

right.addEventListener('mouseenter', () => {
    container.classList.add('active-right');
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('active-right');
})