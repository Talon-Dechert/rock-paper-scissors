
function game() {
    
    let selection = ['Rock', 'Paper', 'Scissors'];
    let pick;
    let tie;
    let win;
    let lose;
    let error;
    let playerSelection;
    let computerSelection;

    
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

    //Button Functionality
    
    const buttChoices = document.querySelectorAll('.gameButton');
    const resultH3 = document.querySelector('#Result');
    const battleDiv = document.querySelector('#fightTime');
    const resultDiv = document.querySelector('.result');
    const playerScoreDisplay = document.querySelector('#playerScore');
    const compScoreDisplay = document.querySelector('#compScore');

    
    buttChoices.forEach(choice => choice.addEventListener('click', (e) => {
        buttChoices.forEach(btn => btn.classList.remove('selected'));
    
        e.currentTarget.classList.add('selected');

        playerSelection = e.currentTarget.getAttribute('id');
        computerSelection = computerPlay();
    
        console.log(e.currentTarget);


        //Trigger the change in resultDiv

        
        if (battleDiv.getAttribute('class') == 'battle hidden'){
            resultH3.classList.add('hidden');
            resultDiv.classList.remove('updated');
            battleDiv.setAttribute('class', 'battle');
        };

        let result = playRound(playerSelection, computerSelection);
        
        if (result === win){
            playerScore++;
        } else if (result === lose) {
            computerScore++;
        } else if (result === error){
            round--;
        };
        
        console.log(result);

        playerScoreDisplay.textContent = `${playerScore}`;
        compScoreDisplay.textContent = `${computerScore}`;

        // console.log(`Your score is ${playerScore}! \nComputer score is ${computerScore}!`);
    
    }));

    buttChoices.forEach(chosen => chosen.addEventListener('transitionend', (e) => {
        buttChoices.forEach(btn => btn.classList.remove('selected'));
    }));


}





game();







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