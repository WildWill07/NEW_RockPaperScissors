# NEW_RockPaperScissors

# PROGRAM OUTLINE

1. User initiates program and is prompted to make a selection between rock, paper, or scissors.
2. Program stores user selection
3. Computer then makes a random selection between rock, paper, or scissors.
4. Player selection and computer selection are passed as parameters to evaluate() to determine a winner
5. Results are returned and printed
6. Winner's score variable is updated
7. Reiterates through the loop a total of 5 times.

# FUNCTIONS NEEDED

1. getComputerSelection() - gets computers selection; takes no parameters; returns an integer
2. getPlayerSelection() - gets players selection; takes no parameters; returns an integer
3. evaluate() - evluates the winner of the round & increments score variables accordingly; takes two paramters playerSelection & computerSelection; returns a string notifying the winner.
4. play() - recursive function for looping.

# TODO
1. Investigate to see if the evaulate() function can be refactored into more concise code.
