
function game() {
    
    let selection = ['Rock', 'Paper', 'Scissors'];
    let pick;
    let tie;
    let win;
    let lose;
    let error;
    let quit = `No worries! Try again another time!`;


    let playerScore = 0;
    let computerScore = 0;

    function computerPlay() {
        let roll = (Math.floor(Math.random() * 3));
        
        return selection[roll];
    };

    function playRound(playerSelection, computerSelection) {
        
        if (playerSelection == "" || playerSelection.toLowerCase() === 'nothing'){
            return(quit);
        };
        
        playerSelection = playerSelection.toLowerCase();
        
        computerSelection = computerSelection.toLowerCase();
        
        pick = `You picked ${playerSelection}.\nComputer picked ${computerSelection}. \n`;
        tie = `${pick}It's a tie!`;
        win = `${pick}You win!`;
        lose = `${pick}You lose!`;
        error = `Error! Try again! You entered ${playerSelection}`;
    
        switch (playerSelection) {
            case 'rock':
                if (computerSelection === 'rock') {
                    return(tie);
                } else if (computerSelection === 'paper') {
                    return(lose);
                } else {
                    return(win);
                };
            case 'paper':
                if (computerSelection === 'rock') {
                    return(win);
                } else if (computerSelection === 'scissors') {
                    return(lose);
                } else {
                    return(tie);
                };
            case 'scissors':
                if (computerSelection === 'rock'){
                    return(lose);
                } else if (computerSelection === 'paper') {
                    return(win);
                } else {
                    return(tie);
                };
            default:
                return(error);
            };
    };

    
    
    if (playerScore > computerScore) {
        console.log(`Game over! You win, good job!`);
    } else if (computerScore > playerScore) {
        console.log(`Game over! You lose, better luck next time!`);
    } else {
        console.log(`Game over! It's a tie!`);
    };
}

// game();







/*

Old game logic for console playing

for (let round = 1; round <=5; round++) {
    console.log(`Round ${round}!`);
    
    let playerSelection = prompt(`Choose one! To quit, enter "nothing"!`, `Rock, Paper, Scissors!`);
    let computerSelection = computerPlay();
    
    
    let result = playRound(playerSelection, computerSelection);
    
    if (result === win){
        playerScore++;
    } else if (result === lose) {
        computerScore++;
    } else if (result === error){
        round--;
    } else if (result === quit){
        console.log(quit);
        break;
    }
    
    console.log(result);
    console.log(`Your score is ${playerScore}! \nComputer score is ${computerScore}!`);

};
*/