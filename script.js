
function game() {
    
    let selection = ['Rock', 'Paper', 'Scissors'];
    let pick;
    let tie;
    let win;
    let lose;
    let error;


    let playerScore = 0;
    let computerScore = 0;

    function computerPlay() {
        let roll = (Math.floor(Math.random() * 3));
        
        return selection[roll];
    };

    function playRound(playerSelection, computerSelection) {
        
        pick = `You picked ${playerSelection}.\nComputer picked ${computerSelection}. \n`;
        tie = `${pick}It's a tie!`;
        win = `${pick}You win!`;
        lose = `${pick}You lose!`;
        error = `Error! Try again! You entered ${playerSelection}`;
    
        switch (playerSelection) {
            case 'Rock':
                if (computerSelection === 'Rock') {
                    return(tie);
                } else if (computerSelection === 'Paper') {
                    return(lose);
                } else {
                    return(win);
                };
            case 'Paper':
                if (computerSelection === 'Rock') {
                    return(win);
                } else if (computerSelection === 'Scissors') {
                    return(lose);
                } else {
                    return(tie);
                };
            case 'Scissors':
                if (computerSelection === 'Rock'){
                    return(lose);
                } else if (computerSelection === 'Paper') {
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


//Button Functionality

const buttChoices = document.querySelectorAll('.gameButton');
const resultDiv = document.querySelector('#Result');

buttChoices.forEach(choice => choice.addEventListener('click', (e) => {
    buttChoices.forEach(btn => btn.classList.remove('selected'));

    e.currentTarget.classList.add('selected');
    console.log(e.currentTarget);

    resultDiv.textContent = `${e.currentTarget.getAttribute('id')}`

}));



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