function getComputerChoice() {
 let compChoice = Math.random();
 if (compChoice < 0.33){
    console.log("rock");
 } 
else if( 0.33 < compChoice < 0.66){
    console.log("paper");
}
else if(0.66 < compChoice){ 
    console.log("scissors");
}

}

getComputerChoice()
