function computerPlay(){
    let choises = ['rock', 'paper', 'scissor'];
    const computerSelection = choises[Math.floor(Math.random() * 3)];
    return computerSelection;
}


function playRound(playerSelection, computerSelection){
    const round = document.querySelector('.round');
    if (playerSelection.toLowerCase() === computerSelection){
        round.textContent = 'Tie!';
        return 2;
    }

    if (playerSelection.toLowerCase() === 'rock'){
        if (computerSelection === 'paper'){
            round.textContent = 'You lose! Paper beats Rock';
            return 0;
        }
        else{
            round.textContent = 'You win! Rock beats Scissor';
            return 1;
        }
    }
    if (playerSelection.toLowerCase() === 'paper'){
        if (computerSelection === 'scissor'){
            round.textContent = 'You lose! Scissor beats Paper';
            return 0;
        }
        else{
            round.textContent = 'You win! Paper beats Rock';
            return 1;
        }
    }
    if (playerSelection.toLowerCase() === 'scissor'){
        if (computerSelection === 'rock'){
            round.textContent = 'You lose! Rock beats Scissor';
            return 0;
        }
        else{
            round.textContent = 'You win! Scissor beats Paper';
            return 1;
        }
    }
}

function game(){
    let playerCount = 0;
    let computerCount = 0;
    let result = 0;
    const btn = document.querySelectorAll('button');
    const playerScore = document.querySelector('.player-score');
    const computerScore = document.querySelector('.computer-score');
    const results = document.querySelector('#results');
    const p = document.createElement('p');
    btn.forEach((button) => {
    
        button.addEventListener('click', () => {
            result = playRound(button.className, computerPlay());
            if (result === 0){
                computerCount ++;
            }
            else if (result === 1){
                playerCount ++;
            }
            playerScore.textContent = `Player Score: ${playerCount}`;
            computerScore.textContent = `Computer Score: ${computerCount}`;
            if (playerCount === 5){
                results.appendChild(p);
                p.textContent = 'YOU ARE WINNER';
            }
            else if (computerCount === 5){
                results.appendChild(p);
                p.textContent = 'COMPUTER ARE WINNER';
            }
        });

    });      
        result = 0;
}

game();