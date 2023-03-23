// Define variables
let playerScore = 0;
let computerScore = 0;
let historyList = [];

// Get HTML elements
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const historyListUl = document.getElementById("history-list");

// Define functions
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  let roundResult;
  if (playerSelection === computerSelection) {
    roundResult = "Tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundResult = "You win!";
    playerScore++;
  } else {
    roundResult = "Computer wins!";
    computerScore++;
  }
  updateScoreboard();
  updateHistoryList(playerSelection, computerSelection, roundResult);
  checkGameEnd();
}

function updateScoreboard() {
  playerScoreSpan.innerText = playerScore;
  computerScoreSpan.innerText = computerScore;
}

function updateHistoryList(playerSelection, computerSelection, roundResult) {
  const historyListItem = document.createElement("li");
  historyListItem.innerText = `Player: ${playerSelection} | Computer: ${computerSelection} | Result: ${roundResult}`;
  historyList.push(historyListItem);
  historyListUl.appendChild(historyListItem);
}

function checkGameEnd() {
  if (playerScore === 5) {
    alert("You win the game!");
    resetGame();
  } else if (computerScore === 5) {
    alert("Computer wins the game!");
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  historyList = [];
  updateScoreboard();
  historyListUl.innerHTML = "";
}

// Add event listeners
rock.addEventListener("click", function () {
  playRound("rock");
});

paper.addEventListener("click", function () {
  playRound("paper");
});

scissors.addEventListener("click", function () {
  playRound("scissors");
});