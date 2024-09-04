const container = document.querySelector(".container");
const movieSelect = document.getElementById("movie");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");

let ticketPrice = +movieSelect.value;

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  count.innerText = selectedSeats.length;
  total.innerText = selectedSeats.length * ticketPrice;
}

function setMovieData(index, price) {
  localStorage.setItem("selectedMovieIndex", index);
  ticketPrice = +price;
  updateSelectedCount();
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
  seats.forEach((seat, index) => {
    if (selectedSeats.includes(index)) seat.classList.add("selected");
  });
  movieSelect.selectedIndex = localStorage.getItem("selectedMovieIndex") || 0;
}

movieSelect.addEventListener("change", (e) =>
  setMovieData(e.target.selectedIndex, e.target.value)
);

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

populateUI();
updateSelectedCount();
