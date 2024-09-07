const playlist = [
    { title: "Song 1", src: "songs/song1.mp4" },
    { title: "Song 2", src: "songs/song2.mp4" },
    { title: "Song 3", src: "songs/song3.mp4" },
];

const links = document.querySelectorAll('.playlist-item a');
const player = document.querySelector("#player");
const playButton = document.querySelector(".button--play");
const pauseButton = document.querySelector(".button--pause");
const progressBar = document.querySelector(".progress-bar");

links.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const source = this.getAttribute("data-src");
        player.setAttribute("src", source);
        player.play();

        links.forEach((link) => {
            link.classList.remove("active-song");
        });

        this.classList.add("active-song");
    });
});

function togglePlayPause() {
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}

player.addEventListener("play", function () {
    playButton.classList.remove("active");
    pauseButton.classList.add("active");
});

player.addEventListener("pause", function () {
    playButton.classList.add("active");
    pauseButton.classList.remove("active");
});

player.addEventListener("timeupdate", function () {
    const progress = (player.currentTime / player.duration) * 100;
    progressBar.style.width = `${progress}%`;
});

progressBar.parentElement.addEventListener("click", function (e) {
    const progressWidth = this.offsetWidth;
    const clickedWidth = e.offsetX;
    const percent = (clickedWidth / progressWidth) * 100;
    player.currentTime = (player.duration / 100) * percent;
    progressBar.style.width = `${percent}%`;
});

playButton.addEventListener("click", togglePlayPause);
pauseButton.addEventListener("click", togglePlayPause);

function playFirstSong() {
    const firstSong = playlist[0].src;
    player.setAttribute("src", firstSong);
    player.play();
}

playFirstSong();