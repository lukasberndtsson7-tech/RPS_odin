let result = document.querySelector("#result");
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
return compChoice
}

function getPlayerChoice(){
  let playerChoice = prompt("rock, paper or scissors")
  playerChoice = playerChoice.toLowerCase();
   return playerChoice;
    }
let humanScore = 0;
let compscore = 0;
function playRound(humanChoice, compChoice) {
if(humanChoice == compChoice){
    result.textContent ="\nIt is a tie\n" + `computer chose: ${compChoice}\nyou chose: ${humanChoice} ` +  " you: " + humanScore + " computer: " + compscore;
}
else if(compChoice == "rock" && humanChoice == "scissors" ||
        compChoice == "paper" && humanChoice == "rock" ||
        compChoice == "scissors" && humanChoice == "paper"){
            compscore += 1;
result.textContent = "\nYou lose\n" + `computer chose: ${compChoice}\nyou chose: ${humanChoice} ` + "you: " + humanScore + " computer: " + compscore;
}
else {
    humanScore += 1;
result.textContent = "\nYou win\n" + `computer chose: ${compChoice}\nyou chose: ${humanChoice} ` + "you: " + humanScore + " computer: " + compscore;
}

}

rock = document.querySelector("#rock");
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper = document.querySelector("#paper");
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
rock = document.querySelector("#scissors");
rock.addEventListener("click", () => playRound("scissors", getComputerChoice()));


