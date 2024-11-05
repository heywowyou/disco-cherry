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

function getHumanChoice() {
  let choice = prompt("Please enter your selection").toUpperCase();
  switch (choice) {
    case "ROCK":
      human = "Rock";
      break;
    case "PAPER":
      human = "Paper";
      break;
    case "SCISSORS":
      human = "Scissors";
      break;
  }
  return human;
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
let computerScore = 0;
let humanScore = 0;

console.log(humanSelection);
console.log(computerSelection);
console.log(playRound(humanSelection, computerSelection));
console.log(computerScore);
console.log(humanScore);
