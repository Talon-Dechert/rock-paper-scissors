let selection = ['Rock', 'Paper', 'Scissors'];
let pick;
let tie;
let win;
let lose;
let error;
let quit;
let playerSelection;
let computerSelection;

function computerPlay() {
    let roll = (Math.floor(Math.random() * 3));
    
    return selection[roll];
};

function playRound(playerSelection, computerSelection) {
    
    quit = `No worries! Try again another time!`;
    
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
                break;
            } else if (computerSelection === 'paper') {
                return(lose);
                break;
            } else {
                return(win);
                break;
            };
        case 'paper':
            if (computerSelection === 'rock') {
                return(win);
                break;
            } else if (computerSelection === 'scissors') {
                return(lose);
                break;
            } else {
                return(tie);
                break;
            };
        case 'scissors':
            if (computerSelection === 'rock'){
                return(lose);
                break;
            } else if (computerSelection === 'paper') {
                return(win);
                break;
            } else {
                return(tie);
                break;
            };
        default:
            return(error);
            break;
        };
};



function game() {
    
    let playerScore = 0;
    let computerScore = 0;
    
    for (let round = 1; round <=5; round++) {
        console.log(`Round ${round}!`);
        
        playerSelection = prompt(`Choose one! To quit, enter "nothing"!`, `Rock, Paper, Scissors!`);
        computerSelection = computerPlay();
        
        
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

        /*if (round == 5) {
            return(playerScore, computerScore);
        }*/
    };
    if (playerScore > computerScore) {
        console.log(`Game over! You win, good job!`);
    } else if (computerScore > playerScore) {
        console.log(`Game over! You lose, better luck next time!`);
    } else if (playerScore == computerScore) {
        console.log(`Game over! It's a tie!`);
    };
}

game();





/*
const playerSelection = `Scissors`;





console.log(playRound(playerSelection, computerSelection));
*/