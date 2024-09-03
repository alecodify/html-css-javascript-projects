const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiURL = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const apiKey = 'btonT4pgiTG3B71iKPIyAw==yfJ5tHnjtVP1E0VE';

async function getQuote() {
  try {
    btn.innerText = "Loading...";
    btn.disabled = true;
    quote.innerText = "Updating...";
    author.innerText = "Updating...";

    const response = await fetch(apiURL, {
      headers: {
        'X-Api-Key': apiKey
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    const quoteContent = data[randomIndex].quote;
    const quoteAuthor = data[randomIndex].author || "Unknown"; 

    quote.innerText = quoteContent;
    author.innerText = "~ " + quoteAuthor;
    btn.innerText = "Get a quote";
    btn.disabled = false;
  } catch (error) {
    console.log("Failed to fetch data:", error);
    quote.innerText = "An error occurred, try again later";
    author.innerText = "";
    btn.innerText = "Get a quote";
    btn.disabled = false;
  }
}

getQuote();

btn.addEventListener("click", getQuote);