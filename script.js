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

// add function to check final scores
function finalScore(finalHumanScore, finalComputerScore) {
  if (humanScore > computerScore) {
    finalScoreDiv.textContent =
      "No! No more games. Finish him off. Finish him now! Gollum, Gollum!";
  } else {
    finalScoreDiv.textContent = "Bagginses lost, now we eats it whole.";
  }
}

// UI with DOM manipulation

// 3 buttons and OnClick functionality
const body = document.querySelector("body");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");
let btnClckForTimes = 0;
const totalRounds = 5;

rockBtn.textContent = "rock";
paperBtn.textContent = "paper";
scissorBtn.textContent = "scissor";

// on button click get player selection, comp selection, play round
rockBtn.addEventListener("click", () => {
  if (btnClckForTimes < totalRounds) {
    playRound("rock", getComputerChoice());
    currHumanScoreDiv.textContent = humanScore;
    currCompScoreDiv.textContent = computerScore;
    btnClckForTimes++;
  }else if (btnClckForTimes === totalRounds){
    finalScore(humanScore, computerScore);
  }
});
paperBtn.addEventListener("click", () => {
  if (btnClckForTimes < totalRounds) {
    playRound("paper", getComputerChoice());
    currHumanScoreDiv.textContent = humanScore;
    currCompScoreDiv.textContent = computerScore;
    btnClckForTimes++;
  }else if (btnClckForTimes === totalRounds){
    finalScore(humanScore, computerScore);
  }
});
scissorBtn.addEventListener("click", () => {
  if (btnClckForTimes < totalRounds) {
    playRound("scissor", getComputerChoice());
    currHumanScoreDiv.textContent = humanScore;
    currCompScoreDiv.textContent = computerScore;
    btnClckForTimes++;
  }else if (btnClckForTimes === totalRounds){
    finalScore(humanScore, computerScore);
  }
});

//displaying winner
const roundWinDiv = document.createElement("div");
roundWinDiv.textContent = "";

// displaying score counter
const currHumanScoreDiv = document.createElement("div");
currHumanScoreDiv.textContent = "";

const currCompScoreDiv = document.createElement("div");
currCompScoreDiv.textContent = "";

// playing game for 5 rounds, displaying final score
const finalScoreDiv = document.createElement("div");
finalScoreDiv.textContent = "";

//add new things to DOM
body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorBtn);
body.appendChild(roundWinDiv);
body.appendChild(currHumanScoreDiv);
body.appendChild(currCompScoreDiv);
body.appendChild(finalScoreDiv);
