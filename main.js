let playerScore = 0;
let computerScore = 0;
let drawRounds = 0;
let playerSelection = 0;
let computerSelection = 0;

let controlVar = 0;

//PROGRAM ENTRANCE
while (controlVar < 5) {
    play();
    controlVar++;
}

//Reports final results
console.log("=====Series Results=====\n" +
"Roudns Won by Player = " + playerScore + "\n" + 
"Rounds Won by the Computer = " + computerScore + "\n" + 
"Draw Rounds = " + drawRounds);

//Calls required functions to get computer selection & player selection & stores returned values
//Converts string return type of playerSelection into an int
//Returned values are then sent to be evaluated
function play() {
    playerSelection = parseInt(getPlayerSelection());
    computerSelection = getComputerSelection();
    evaluate(playerSelection, computerSelection)
}

//Promots user for input and returns it play()
function getPlayerSelection() {
    return  prompt("Please enter the corresponding integer to your selection:\
    1 - Rock\
    2 - Scissors\
    3 - Paper");
}

//Picks a random number 1-3 for computer seleciton & returns it to play()
function getComputerSelection() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

//Takes in playerSelection & computerSelection and evaluates a winner
function evaluate(playerSelection, computerSelection) {
    switch(playerSelection) {
        case 1:
            if(computerSelection==2) {
                //player win
                playerScore++;
            }
            else if(computerSelection==3) {
                //computer win
                computerScore++;
            }
            else {
                //draw
                drawRounds++;
            }
            break;
        case 2:
            if(computerSelection==3) {
                //player win
                playerScore++;
            }
            else if(computerSelection==1) {
                //computer win
                computerScore++;
            }
            else {
                //draw
                drawRounds++;
            }
            break;
        case 3:
            if(computerSelection==1) {
                //player win
                playerScore++;
            }
            else if(computerSelection==2) {
                //computer win
                computerScore++;
            }
            else {
                //draw
                drawRounds++;
            }
            break;
        default:
            console.log("Something has gone wrong in the switch statement.")
    }
}