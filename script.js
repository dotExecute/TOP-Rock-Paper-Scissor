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

// get human choice and store it
// function getHumanChoice() {
//   let humanChoice = prompt("What's your Choice?");

//   // returning the choice
//   return humanChoice;
// }

// logic for a single round, just a bunch of if else statements
function playRound(human, computer) {
  if (computer === "rock" && human === "scissor") {
    console.log(computer);
    winBannerDiv.textContent = "Computer Wins!";
    computerScore++;
  } else if (computer === "scissor" && human == "paper") {
    console.log(computer);
    winBannerDiv.textContent = "Computer Wins!";
    computerScore++;
  } else if (computer === "paper" && human == "rock") {
    console.log(computer);
    winBannerDiv.textContent = "Computer Wins!";
    computerScore++;
  } else if (human === "rock" && computer === "scissor") {
    console.log(computer);
    winBannerDiv.textContent = "Human Wins!";
    humanScore++;
  } else if (human === "scissor" && computer == "paper") {
    console.log(computer);
    winBannerDiv.textContent = "Human Wins!";
    humanScore++;
  } else if (human === "paper" && computer == "rock") {
    console.log(computer);
    winBannerDiv.textContent = "Human Wins!";
    humanScore++;
  } else if (computer === human) {
    console.log(computer);
    winBannerDiv.textContent = "It's a Tie!";
  } else {
    winBannerDiv.textContent = "Undefined";
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
});
paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissorBtn.addEventListener("click", () => {
  playRound("scissor", getComputerChoice());
});

//displaying winner
const winBannerDiv = document.createElement("div");
winBannerDiv.textContent = "";

//add new things to DOM
body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorBtn);
body.appendChild(scoreDiv);
