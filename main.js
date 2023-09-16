let playerScore = 0;
let computerScore = 0;
let playerSelection = 0;
let computerSelection = 0;

let controlVar = 0;

function play() {
    playerSelection = getPlayerSelection();
    computerSelection = getComputerSelection();
    evaluate(playerSelection, computerSelection)
}

function getPlayerSelection() {
    return prompt("Please enter the corresponding integer to your selection:\
    1 - Rock\
    2 - Scissors\
    3 - Paper");
}

function getComputerSelection() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

function evaluate(playerSelection, computerSelection) {
    console.log("The player selected: " + playerSelection + " The computer selected: "+ computerSelection);
}

while (controlVar < 5) {
    play();
    controlVar++;
}