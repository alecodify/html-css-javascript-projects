const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");
const apiURL = "https://api.lyrics.ovh";

async function fetchData(url) {
  const res = await fetch(url);
  return await res.json();
}

function displaySongs(data) {
  result.innerHTML = `
    <ul class="songs">
      ${data.data.map(song => `
        <li>
          <span><strong>${song.artist.name}</strong> - ${song.title}</span>
          <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
        </li>
      `).join('')}
    </ul>
  `;

  more.innerHTML = `
    ${data.prev ? `<button class="btn" onclick="loadMoreSongs('${data.prev}')">Prev</button>` : ''}
    ${data.next ? `<button class="btn" onclick="loadMoreSongs('${data.next}')">Next</button>` : ''}
  `;
}

function displayLyrics(artist, songTitle, lyrics) {
  result.innerHTML = `
    <h2><strong>${artist}</strong> - ${songTitle}</h2>
    <span>${lyrics.replace(/(\r\n|\r|\n)/g, "<br>")}</span>
  `;
  more.innerHTML = "";
}

function showAlert(message) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.innerText = message;
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 3000);
}

async function searchSongs(term) {
  const data = await fetchData(`${apiURL}/suggest/${term}`);
  displaySongs(data);
}

async function getLyrics(artist, songTitle) {
  const data = await fetchData(`${apiURL}/v1/${artist}/${songTitle}`);
  if (data.error) {
    showAlert(data.error);
  } else {
    displayLyrics(artist, songTitle, data.lyrics);
  }
}

async function loadMoreSongs(url) {
  const data = await fetchData(url);
  displaySongs(data);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value.trim();
  searchTerm ? searchSongs(searchTerm) : showAlert("Please type in a search term");
});

result.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const artist = e.target.dataset.artist;
    const songTitle = e.target.dataset.songtitle;
    getLyrics(artist, songTitle);
  }
});

searchSongs("one");
