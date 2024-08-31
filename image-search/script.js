const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const form = document.querySelector('form');
const input = document.getElementById('input');
const results = document.querySelector('.results');
const showMore = document.getElementById('show-more');

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        results.innerHTML = "";
    }

    const responseData = data.results;

    responseData.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('result');

        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink = document.createElement('a');
        imageLink.href  = result.links.html;
        imageLink.target = '_blank';
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);

        results.appendChild(imageWrapper);
    })

    page++;

    if (page > 1) {
        showMore.style.display = 'block';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
})

showMore.addEventListener('click', () => {
    searchImages();
})