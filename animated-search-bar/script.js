const searchContainer = document.querySelector('.container');

const searchIcon = document.querySelector('.search');

searchIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
})