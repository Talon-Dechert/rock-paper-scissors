let selection = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let roll = (Math.floor(Math.random() * 3));
    
    return selection[roll];
};

function playRound(playerSelection, computerSelection) {

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
                        return(`Error! Try again! You entered ${playerSelection}`);
                        break;
                    };
};

function game() {
    for (let round = 1; round <=5; round++) {
        console.log(`Round ${round}!`);
        
        playRound(playerSelection, computerSelection);
    }
}

/*
const playerSelection = `Scissors`;
const computerSelection = computerPlay();

let pick = `You picked ${playerSelection}.
Computer picked ${computerSelection}. \n`;
let tie = `${pick}It's a tie!`;
let win = `${pick}You win!`;
let lose = `${pick}You lose!`;


console.log(playRound(playerSelection, computerSelection));
*/