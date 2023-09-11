
let computerScore = 0;

let playerScore = 0;

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3) + 1;
  if (compChoice === 1) {
    return "ROCK";
  }
  else if (compChoice === 2) {
    return "PAPER";
  }
  else if (compChoice === 3) {
    return "SCISSORS"
  }
  else {
    return "broken";
  }
}

function playerSelection() {

  let userChoice = prompt("Enter ROCK PAPER or SCISSORS").toUpperCase();

  if (userChoice === "ROCK") {
    return "ROCK";
  }
  else if (userChoice === "PAPER") {
    return "PAPER";
  }
  else if (userChoice === "SCISSORS") {
    return "SCISSORS"
  }
  else {
    return "broken";
  }
}

function playRound(userChoice) {

  let computer = getComputerChoice();
  let player = playerSelection(userChoice);

  if (computer === "ROCK" && player === "ROCK") {
    console.log(`Computer Chose: ${computer}! Player Chose: ${player}! ... It's a draw.`);
  } else if
    (computer === "SCISSORS" && player === "SCISSORS") {
    console.log(`Computer Chose: ${computer}! Player Chose: ${player}! ... It's a draw.`);
  } else if
    (computer === "PAPER" && player === "PAPER") {
    console.log(`Computer Chose: ${computer}! Player Chose: ${player}! ... It's a draw.`);
  } else if
    (computer === "ROCK" && player === "PAPER") {
    console.log(`Computer Chose: ${computer}! Player Chose: ${player}! ... PLAYER Wins!`);
    return playerScore++;
  } else if
    (computer === "PAPER" && player === "ROCK") {
    console.log(`Computer Chose: ${computer}! Player Chose: ${player}! ... COMPUTER Wins!`);
    return computerScore++;
  } else if
    (computer === "ROCK" && player === "SCISSORS") {
    console.log(`Computer Chose: ${computer}! Player Chose: ${player}! ... COMPUTER Wins!`);
    return computerScore++;
  } else if
    (computer === "SCISSORS" && player === "ROCK") {
    console.log(`Computer Chose: ${computer}! Player Chose: ${player}! ... PLAYER Wins!`);
    return playerScore++;
  } else if
    (computer === "SCISSORS" && player === "PAPER") {
    console.log(`Computer Chose: ${computer}! Player Chose: ${player}! ... COMPUTER Wins!`);
    return computerScore++;
  } else if
    (computer === "PAPER" && player === "SCISSORS") {
    console.log(`Computer Chose: ${computer}! Player Chose: ${player}! ... PLAYER Wins!`);
    return playerScore++;
  }
}

function game() {
  playRound();
  console.log(`Player: ${playerScore} Computer: ${computerScore}`);
  playRound();
  console.log(`Player: ${playerScore} Computer: ${computerScore}`);
  playRound();
  console.log(`Player: ${playerScore} Computer: ${computerScore}`);
  playRound();
  console.log(`Player: ${playerScore} Computer: ${computerScore}`);
  playRound();
  console.log(`Player: ${playerScore} Computer: ${computerScore}`);

  if (playerScore > computerScore) {
    return "Player WINS!"
  } else if
    (playerScore < computerScore) {
    return "Computer WINS!"
  } else if
    (playerScore === computerScore) {
    return "It's a DRAW!"
  }
}
