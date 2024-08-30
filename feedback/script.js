const container = document.getElementById("container");
const rating = document.querySelectorAll(".rating");
const btn = document.getElementById("btn");

let selectedRating = "";

rating.forEach((item) => {
    item.addEventListener('click', (e) => {
        remove();

        selectedRating = e.target.innerText || e.target.parentNode.innerText;
        e.target.classList.add('active');
        e.target.parentNode.classList.add('active');
    })
})

btn.addEventListener('click', () => {
    if (selectedRating !== "") {
        container.innerHTML = `
            <strong>Thank You!</strong>
            <br>
            <br>
            <strong>Feedback: ${selectedRating}</strong>
            <p>We'll use your feedback to improve our customer support.</p>
        `
    }
})

function remove() {
    rating.forEach((item) => {
        item.classList.remove('active');
    })
}