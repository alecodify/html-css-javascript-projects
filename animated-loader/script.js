const loader = document.querySelector('.loader-container');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    loader.style.display = 'flex';
    button.style.display = 'none';

    setTimeout(() => {
        loader.style.display = 'none';
        button.style.display = 'flex';
    }, 10000);
});