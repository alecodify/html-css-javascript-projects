const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const playerScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");

let playerScoreCount = 0;
let computerScoreCount = 0;

buttons.forEach(button => 
  button.addEventListener("click", () => playRound(button.id))
);

function playRound(playerSelection) {
  const computerSelection = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
  const outcomes = {
    "rockscissors": "You win! Rock beats Scissors",
    "paperrock": "You win! Paper beats Rock",
    "scissorspaper": "You win! Scissors beat Paper",
    "scissorsrock": "You lose! Rock beats Scissors",
    "rockpaper": "You lose! Paper beats Rock",
    "paperscissors": "You lose! Scissors beat Paper"
  };
  
  const resultKey = playerSelection + computerSelection;
  const resultCount = outcomes[resultKey] || "It's a tie!";
  
  if (resultCount.includes("win")) playerScoreCount++;
  else if (resultCount.includes("lose")) computerScoreCount++;
  
  playerScore.textContent = playerScoreCount;
  computerScore.textContent = computerScoreCount;
  result.textContent = resultCount;
}