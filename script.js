let humanScore = 0;
let computerScore = 0;

// generate random num between 0-3
function getComputerChoice(){
    let randNum = Math.floor(Math.random() * 3);

    // assign num 0-3 to rock paper sissor respectively
    if(randNum === 0){
        return "rock";
    }else if(randNum === 1){
        return "paper";
    }else {
        return "scissor";
    }
}

// get human choice and store it
function getHumanChoice(){
    let humanChoice = prompt("What's your Choice?");

    // returning the choice
    return humanChoice;
}

// logic for a single round, just a bunch of if else statements
function playRound(human, computer){
    if(computer === "rock" && human === "scissor"){
        console.log("Computer Wins!");
        computerScore++;
    }else if (computer === "scissor" && human == "paper"){
        console.log("Computer Wins!");
        computerScore++;
    }else if (computer === "paper" && human == "rock"){
        console.log("Computer Wins!");
        computerScore++;
    }else if(human === "rock" && computer === "scissor"){
        console.log("Human Wins!");
        humanScore++;
    }else if (human === "scissor" && computer == "paper"){
        console.log("Human Wins!");
        humanScore++;
    }else if (human === "paper" && computer == "rock"){
        console.log("Human Wins!");
        humanScore++;
    }else{
        console.log("Undefined");
    }
}

  //putting the functions in a variables in order to later pass them as
  // arguments for the playRound function logic
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

//   loggig the human and computer selection in the console
  console.log(computerSelection);
  console.log(humanSelection);

  // calling the playRound function and passing the variabels containing functions
  playRound(humanSelection, computerSelection);

  // logging updated scores in the console
  console.log(humanScore, computerScore);