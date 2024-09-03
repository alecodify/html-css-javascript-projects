const tagsContainer = document.getElementById("tags");
const textarea = document.getElementById("textarea");

const createTags = (input) => {
    tagsContainer.innerHTML = input
        .split(",")
        .filter(tag => tag.trim())
        .map(tag => `<span class="tag">${tag.trim()}</span>`)
        .join("");
};

const pickRandomTag = () => {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = (tag) => {
    tag.classList.add("highlight");
};

const unHighlightTag = (tag) => {
    tag.classList.remove("highlight");
};

const randomSelect = () => {
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() => unHighlightTag(randomTag), 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => highlightTag(pickRandomTag()), 100);
    }, 3000);
};

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);
    if (e.key === "Enter") {
        setTimeout(() => (e.target.value = ""), 10);
        randomSelect();
    }
});
