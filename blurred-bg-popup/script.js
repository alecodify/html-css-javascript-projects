const container = document.querySelector('.container');
const button = document.querySelector('.btn');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

button.addEventListener('click', () => {
    container.classList.add('active');
    popup.classList.remove('active');
})

close.addEventListener('click', ()=> {
    container.classList.remove('active');
    popup.classList.add('active');
})