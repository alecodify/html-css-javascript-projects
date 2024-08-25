const container = document.querySelector('.container');

const careers = ["Web Developer", "Freelancer", "Instructor", "YouTuber"];

let index = 0;
let charIndex = 0;

updateText();

function updateText(){
    charIndex++;
    container.innerHTML=`
        <h1>I am ${careers[index].slice(0,1) === "I" ? "an": "a"} ${careers[index].slice(0, charIndex)}</h1>
    `
    if (charIndex === careers[index].length) {
        index++;
        charIndex = 0;
    }

    if (index === careers.length) {
        index = 0;
    }

    setTimeout(updateText, 400);
}