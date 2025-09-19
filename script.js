//gameplay logic
let humanScore = 0;
let computerScore = 0;

// generate random num between 0-3
function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3);

  // assign num 0-3 to rock paper sissor respectively
  if (randNum === 0) {
    return "rock";
  } else if (randNum === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

// logic for a single round, just a bunch of if else statements
function playRound(human, computer) {
  if (computer === "rock" && human === "scissor") {
    roundWinDiv.textContent = "Computer Wins!";
    computerScore++;
  } else if (computer === "scissor" && human == "paper") {
    roundWinDiv.textContent = "Computer Wins!";
    computerScore++;
  } else if (computer === "paper" && human == "rock") {
    roundWinDiv.textContent = "Computer Wins!";
    computerScore++;
  } else if (human === "rock" && computer === "scissor") {
    roundWinDiv.textContent = "Human Wins!";
    humanScore++;
  } else if (human === "scissor" && computer == "paper") {
    roundWinDiv.textContent = "Human Wins!";
    humanScore++;
  } else if (human === "paper" && computer == "rock") {
    roundWinDiv.textContent = "Human Wins!";
    humanScore++;
  } else if (computer === human) {
    roundWinDiv.textContent = "It's a Tie!";
  } else {
    roundWinDiv.textContent = "Undefined";
  }
}

// add a function named playGame
// function playGame() {
//   // make a for loop to count up for i<5
//   for (i = 0; i < 3; i++) {
//     // add the funtions inside the loop
//     const newCompSelection = getComputerChoice();
//     const newHumanSelection = getHumanChoice();
//     playRound(newHumanSelection, newCompSelection);

//     // loggig the human and computer selection in the console
//     console.log(newCompSelection);
//     console.log(newHumanSelection);
//   }
// }

// playGame();

// add function to check final scores
function finalScore(finalHumanScore, finalComputerScore) {
  if (humanScore > computerScore) {
    console.log(
      "No! No more games. Finish him off. Finish him now! Gollum, Gollum!"
    );
  } else {
    console.log("Bagginses lost, now we eats it whole.");
  }
}

// finalScore(humanScore, computerScore);
// logging updated scores in the console
// console.log(humanScore, computerScore);

// UI with DOM manipulation

// 3 buttons and OnClick functionality
const body = document.querySelector("body");
const rockBtn = document.createElement("button");
rockBtn.classList.add("rock");
const paperBtn = document.createElement("button");
paperBtn.classList.add("paper");
const scissorBtn = document.createElement("button");
scissorBtn.classList.add("scissor");

rockBtn.textContent = "rock";
paperBtn.textContent = "paper";
scissorBtn.textContent = "scissor";

// on button click get player selection, comp selection, play round
rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  currHumanScoreDiv.textContent = humanScore;
  currCompScoreDiv.textContent = computerScore;
});
paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  currHumanScoreDiv.textContent = humanScore;
  currCompScoreDiv.textContent = computerScore;
});
scissorBtn.addEventListener("click", () => {
  playRound("scissor", getComputerChoice());
  currHumanScoreDiv.textContent = humanScore;
  currCompScoreDiv.textContent = computerScore;
});

//displaying winner 
const roundWinDiv = document.createElement("div");
roundWinDiv.textContent = "";

// displaying score counter
const currHumanScoreDiv = document.createElement("div");
currHumanScoreDiv.textContent = "";

const currCompScoreDiv = document.createElement("div");
currCompScoreDiv.textContent = "";

//add new things to DOM
body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorBtn);
body.appendChild(roundWinDiv);
body.appendChild(currHumanScoreDiv);
body.appendChild(currCompScoreDiv);