function getComputerChoice(){
    let randNum = Math.floor(Math.random() * 3);

    if(randNum === 0){
        return "rock";
    }else if(randNum === 1){
        return "paper";
    }else {
        return "scissor";
    }
}
console.log(getComputerChoice());