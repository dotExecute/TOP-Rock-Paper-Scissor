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
console.log(getComputerChoice());

// get human choice and store it
function getHumanChoice(){
    let humanChoice = prompt("What's your Choice?");
    return humanChoice;
}
console.log(getHumanChoice());