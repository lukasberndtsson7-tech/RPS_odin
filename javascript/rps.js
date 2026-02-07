function getComputerChoice() {
 let compChoice = Math.random();
 if (compChoice < .33){
    compChoice = "rock";
    return compChoice;
 } 
else if(compChoice >= .33 && compChoice < .66){
    compChoice = "paper";
    return compChoice;
}
else if(compChoice >= .66){
    compChoice = "scissors";
    return compChoice;
}

}

function getPlayerChoice(){
  let playerChoice = prompt("rock, paper or scissors")
  playerChoice = playerChoice.toLowerCase();
   return playerChoice;
    }
let humanScore = 0;
let compscore = 0;

function playRound(round, humanChoice, computerChoice) {
if(humanChoice == computerChoice){
    console.log("ROUND:" + round + "\nIt is a tie\n" + `computer chose: ${computerChoice}\nyou chose: ${humanChoice} ` +  " you: " + humanScore + " computer: " + compscore);
}
else if(computerChoice == "rock" && humanChoice == "scissors" ||
        computerChoice == "paper" && humanChoice == "rock" ||
        computerChoice == "scissors" && humanChoice == "paper"){
            compscore += 1;
console.log("ROUND:" + round + "\nYou lose\n" + `computer chose: ${computerChoice}\nyou chose: ${humanChoice} ` + "you: " + humanScore + " computer: " + compscore)
}
else {
    humanScore += 1;
console.log("ROUND:" + round + "\nYou win\n" + `computer chose: ${computerChoice}\nyou chose: ${humanChoice} ` + "you: " + humanScore + " computer: " + compscore)
}


}




for (var i = 1; i <= 5; i++){
    let humanSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    playRound(i, humanSelection, computerSelection)}

    function winner(){
    if(compscore == humanScore){
        console.log("IT IS A TIE!!!")
    }
    if(compscore < humanScore){
        console.log("YOOOOUUUU LOOOOSSSSSSSSSSEEEEEEEEEE!!!")
    }
    if(compscore > humanScore){
         console.log("you win")
    }

    }
    winner()