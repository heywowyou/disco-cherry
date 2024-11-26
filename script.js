let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3) + 1;
  switch (number) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
  return computer;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    winner = "You lose! Paper beats Rock";
    computerScore++;
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    winner = "You win! Rock beats Scissors";
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    winner = "You lose! Scissors beats Paper";
    computerScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    winner = "You win! Paper beats Rock";
    humanScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    winner = "You lose! Rock beats Scissors";
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    winner = "You win! Scissors beats Paper";
    humanScore++;
  } else winner = "It's a draw!";
  return winner;
}

function winAlert() {
  if ((humanScore = 5)) {
    alert("You win!");
  } else if ((computerScore = 5)) {
    alert("You lose..");
  }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const resultContainer = document.querySelector(".container-result");
const result = document.createElement("div");
const scoreContainer = document.querySelector(".container-score");
const scoreC = document.createElement("div");
const scoreH = document.createElement("div");

rock.addEventListener("click", function () {
  if (humanScore < 5 && computerScore < 5) {
    result.textContent = playRound("Rock", getComputerChoice());
    resultContainer.appendChild(result);
    scoreC.textContent = computerScore;
    scoreH.textContent = humanScore;
    scoreContainer.appendChild(scoreH);
    scoreContainer.appendChild(scoreC);
  } else winAlert();
});
paper.addEventListener("click", function () {
  if (humanScore < 5 && computerScore < 5) {
    result.textContent = playRound("Paper", getComputerChoice());
    resultContainer.appendChild(result);
    scoreC.textContent = computerScore;
    scoreH.textContent = humanScore;
    scoreContainer.appendChild(scoreH);
    scoreContainer.appendChild(scoreC);
  } else winAlert();
});
scissors.addEventListener("click", function () {
  if (humanScore < 5 && computerScore < 5) {
    result.textContent = playRound("Scissors", getComputerChoice());
    resultContainer.appendChild(result);
    scoreC.textContent = computerScore;
    scoreH.textContent = humanScore;
    scoreContainer.appendChild(scoreH);
    scoreContainer.appendChild(scoreC);
  } else winAlert();
});
