let computerScore = 0;
let humanScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

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

rock.addEventListener("click", function () {
  console.log(playRound("Rock", getComputerChoice()));
  console.log(computerScore);
  console.log(humanScore);
});
paper.addEventListener("click", function () {
  console.log(playRound("Paper", getComputerChoice()));
  console.log(computerScore);
  console.log(humanScore);
});
scissors.addEventListener("click", function () {
  console.log(playRound("Scissors", getComputerChoice()));
  console.log(computerScore);
  console.log(humanScore);
});
