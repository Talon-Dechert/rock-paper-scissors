
function game() {
    
    const playerScoreDisplay = document.querySelector('#playerScore');
    const playerChoiceDisplay = document.querySelector('#playerIcon');
    const compScoreDisplay = document.querySelector('#compScore');
    const compChoiceDisplay = document.querySelector('#compIcon');
    const buttChoices = document.querySelectorAll('.gameButton');
    const resultH3 = document.querySelector('#Result');
    const resultDiv = document.querySelector('.result');
    const battleDiv = document.querySelector('#fightTime');
    const battleField = document.querySelector('.pBattleField');
    let selection = ['Rock', 'Paper', 'Scissors'];
    let tie;
    let win;
    let lose;
    let playerSelection;
    let computerSelection;

    
    let playerScore = 0;
    let computerScore = 0;

    function computerPlay() {
        let roll = (Math.floor(Math.random() * 3));
        
        return selection[roll];
    };

    // Game logic

    function playRound(playerSelection, computerSelection) {
        
        tie = `Tie!`;
        win = `${playerSelection} \nbeats \n${computerSelection}`;
        lose = `${computerSelection} \nbeats \n${playerSelection}`;
    
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
                return(console.log('Error in switch case Playround'));
            };
    };


    //Button Functionality
    
    function buttonClick(e) {
        buttChoices.forEach(btn => btn.classList.remove('selected'));
        
        
        e.currentTarget.classList.add('selected');
        
        playerSelection = e.currentTarget.getAttribute('id');
        computerSelection = computerPlay();
        
        // Trigger the change in resultDiv
        
        if (battleDiv.getAttribute('class') == 'battle hidden'){
            resultH3.classList.add('hidden');
            resultDiv.classList.remove('updated');
            battleDiv.setAttribute('class', 'battle');
        };
        
        // Run game logic on button click

        let result = playRound(playerSelection, computerSelection);
        
        if (result === win){
            playerScore++;
        } else if (result === lose) {
            computerScore++;
        };
        
        if ((playerScore < 5) && (computerScore < 5)){
            battleField.textContent = `${result}`;
        };
        
        
        // End the game at 5 points
        
        if ((playerScore == 5) || (computerScore == 5)) {
            buttChoices.forEach(buttonOption => buttonOption.removeEventListener('click', buttonClick));
            if (playerScore == 5) {
                battleField.textContent = `You\nWin!`;
            } else battleField.textContent = `Compy\nWins!`;
        }


        // Score display
        
        playerScoreDisplay.textContent = `${playerScore}`;
        playerChoiceDisplay.textContent = `${playerSelection}`;
         
        compScoreDisplay.textContent = `${computerScore}`;
        compChoiceDisplay.textContent = `${computerSelection}`;
    };

    // Run button functionality

    buttChoices.forEach(choice => choice.addEventListener('click', buttonClick));

    // Remove button highlight
    
    buttChoices.forEach(chosen => chosen.addEventListener('transitionend', (e) => {
        buttChoices.forEach(btn => btn.classList.remove('selected'));
    }));
    
    
}





game();
