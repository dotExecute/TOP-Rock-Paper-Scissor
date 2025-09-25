let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const totalRounds = 5;

// DOM elements - select existing elements instead of creating them
const humanScoreDisplay = document.querySelector('#human-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const roundResultDisplay = document.querySelector('#round-result');
const welcomeModal = document.querySelector('#welcome-modal');
const humanWinModal = document.querySelector('#human-win-modal');
const computerWinModal = document.querySelector('#computer-win-modal');
const startGameBtn = document.querySelector('#start-game-btn');
const replayBtn = document.querySelector('#replay-btn');
const countdownElement = document.querySelector('#countdown-timer');

// Game buttons
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorBtn = document.querySelector('#scissor-btn');

let timeLeft = 5;
let timerFunc = null;

// Generate random computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

// Logic for a single round
function playRound(humanChoice, computerChoice) {
  console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`); // Debug info
  
  if (computerChoice === "rock" && humanChoice === "scissor") {
    roundResultDisplay.textContent = "Computer wins this round! Rock crushes scissors";
    computerScore++;
  } else if (computerChoice === "scissor" && humanChoice === "paper") {
    roundResultDisplay.textContent = "Computer wins this round! Scissors cut paper";
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    roundResultDisplay.textContent = "Computer wins this round! Paper covers rock";
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
    roundResultDisplay.textContent = "You win this round! Rock crushes scissors";
    humanScore++;
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    roundResultDisplay.textContent = "You win this round! Scissors cut paper";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    roundResultDisplay.textContent = "You win this round! Paper covers rock";
    humanScore++;
  } else if (computerChoice === humanChoice) {
    roundResultDisplay.textContent = "It's a tie! Try again";
  } else {
    roundResultDisplay.textContent = "Something went wrong...";
  }
  
  // Update score displays
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
  
  // Only count rounds played if it wasn't a tie
  if (computerChoice !== humanChoice) {
    roundsPlayed++;
  }
  
  // Check if game is over
  if (roundsPlayed >= totalRounds) {
    setTimeout(() => {
      finalScore();
    }, 1200); // Wait a bit so player can see the final round result
  }
}

// Check final scores and show appropriate modal
function finalScore() {
  if (humanScore > computerScore) {
    humanWinModal.showModal();
  } else {
    computerWinModal.showModal();
    startCountdown();
  }
}

// Handle button clicks with event delegation
function handleChoiceClick(event) {
  if (roundsPlayed < totalRounds) {
    const humanChoice = event.target.closest('.choice-btn').dataset.choice;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
}

// Add click listeners to all choice buttons
rockBtn.addEventListener('click', handleChoiceClick);
paperBtn.addEventListener('click', handleChoiceClick);
scissorBtn.addEventListener('click', handleChoiceClick);

// Modal controls
startGameBtn.addEventListener('click', () => {
  welcomeModal.close();
});

replayBtn.addEventListener('click', () => {
  resetGame();
  humanWinModal.close();
});

// Reset game function
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  
  humanScoreDisplay.textContent = '0';
  computerScoreDisplay.textContent = '0';
  roundResultDisplay.textContent = 'Make a choice!';
  
  // Clear any running timers
  if (timerFunc) {
    clearInterval(timerFunc);
    timerFunc = null;
  }
  timeLeft = 5;
  countdownElement.textContent = '5';
}

// Countdown timer for computer win scenario
function startCountdown() {
  if (timerFunc) {
    clearInterval(timerFunc);
  }

  timerFunc = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerFunc);
      computerWinModal.close();
      resetGame();
    }
  }, 1000);
}

// Welcome modal logic - show only on first visit per session
let sessionVisits = sessionStorage.getItem('sessionVisits');

if (sessionVisits) {
  sessionVisits = Number(sessionVisits) + 1;
} else {
  sessionVisits = 1;
  // Show welcome modal when page loads
  window.addEventListener('load', () => {
    welcomeModal.showModal();
  });
}

sessionStorage.setItem('sessionVisits', sessionVisits);