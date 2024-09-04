const postsContainer = document.getElementById("posts-container");
const loader = document.getElementById("loader");
const filter = document.getElementById("filter");

let limit = 5;
let page = 1;
let isLoading = false;

async function fetchPosts() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
  return response.json();
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

async function displayPosts() {
  const posts = await fetchPosts();
  posts.forEach(post => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
      <div class="number">${post.id}</div>
      <div class="post-info">
        <h2 class="post-title">${capitalize(post.title)}</h2>
        <p class="post-body">${capitalize(post.body)}</p>
      </div>
    `;
    postsContainer.appendChild(postEl);
  });
}

function showLoader() {
  isLoading = true;
  loader.classList.add("show");
  setTimeout(() => {
    loader.classList.remove("show");
    page++;
    displayPosts();
    isLoading = false;
  }, 1000);
}

function filterPosts(e) {
  const searchTerm = e.target.value.toUpperCase();
  document.querySelectorAll(".post").forEach(post => {
    const title = post.querySelector(".post-title").innerText.toUpperCase();
    const body = post.querySelector(".post-body").innerText.toUpperCase();
    post.style.display = (title.includes(searchTerm) || body.includes(searchTerm)) ? "flex" : "none";
  });
}

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) showLoader();
});

filter.addEventListener("input", filterPosts);

displayPosts();