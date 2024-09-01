const btn = document.getElementById("btn");
const gallery = document.getElementById("gallery");
const errorMessage = document.getElementById("error");

async function fetchImage() {
    const inputValue = document.getElementById("input").value;

    if (inputValue < 1 || inputValue > 10) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Number should be between 1 and 10";
        return;
    }

    try {
        btn.style.display = "none";
        gallery.innerHTML = `<div>Loading...</div>`;

        const response = await fetch(
            `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
                Math.random() * 1000
            )}&client_id=B8S3zB8gCPVCvzpAhCRdfXg_aki8PZM_q5pAyzDUvlc`
        );
        const data = await response.json();

        if (data) {
            const imgs = data.map((pic) => `<img src="${pic.urls.small}" alt="image"/>`).join('');
            gallery.style.display = "block";
            gallery.innerHTML = imgs;
            errorMessage.style.display = "none";
        }
    } catch (error) {
        console.error(error);
        errorMessage.style.display = "block";
        errorMessage.innerText = "An error happened, try again later";
        gallery.style.display = "none";
    } finally {
        btn.style.display = "block";
    }
}

btn.addEventListener("click", fetchImage);