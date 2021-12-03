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
    if (playerSelection === null) {
        return(quit);
    }

    playerSelection = playerSelection.toLowerCase();

    computerSelection = computerSelection.toLowerCase();

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
            }
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
            }
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
            }
        default:
            return(error);
            break;
        };
};



function game() {
    
    let score = 0;
    
    for (let round = 1; round <=5; round++) {
        console.log(`Round ${round}!`);
        
        playerSelection = prompt(`Choose one!`, `Rock, Paper, Scissors`);
        computerSelection = computerPlay();
        
        
        let result = playRound(playerSelection, computerSelection);
        
        if (result === win){
            score++;
        } else if (result === lose) {
            score--;
        } else if (result === error){
            round--;
        } else if (result === quit){
            break;
        }
        
        console.log(result);
    }
}

game();

pick = `You picked ${playerSelection}.
Computer picked ${computerSelection}. \n`;

tie = `${pick}It's a tie!`;
win = `${pick}You win!`;
lose = `${pick}You lose!`;
error = `Error! Try again! You entered ${playerSelection}`;
quit = `No worries! Try again another time!`;



/*
const playerSelection = `Scissors`;





console.log(playRound(playerSelection, computerSelection));
*/