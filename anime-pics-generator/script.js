const btn = document.getElementById('btn');
const anime = document.querySelector('.anime');
const img = document.querySelector('.anime-img');
const nameText = document.querySelector('.anime-name');

btn.addEventListener('click', function () {
    btn.disabled = true;
    btn.innerText = 'Loading...';
    nameText.innerText = 'Updating...';
    btn.disabled = false;
    btn.innerText = 'Get Anime';
    img.src = './anime2.jpeg';
    nameText.innerText = 'Naruto';
})