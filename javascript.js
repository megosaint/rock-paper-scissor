function computerPlay(){
    let choises = ['rock', 'paper', 'scissor'];
    const computerSelection = choises[Math.floor(Math.random() * 3)];
    return computerSelection;
}


function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === computerSelection){
        console.log('Tie!');
        return 2;
    }

    if (playerSelection.toLowerCase() === 'rock'){
        if (computerSelection === 'paper'){
            console.log('You lose! Paper beats Rock');
            return 0;
        }
        else{
            console.log('You win! Rock beats Scissor');
            return 1;
        }
    }
    if (playerSelection.toLowerCase() === 'paper'){
        if (computerSelection === 'scissor'){
            console.log('You lose! Scissor beats Paper');
            return 0;
        }
        else{
            console.log('You win! Paper beats Rock');
            return 1;
        }
    }
    if (playerSelection.toLowerCase() === 'scissor'){
        if (computerSelection === 'rock'){
            console.log('You lose! Rock beats Scissor');
            return 0;
        }
        else{
            console.log('You win! Scissor beats Paper');
            return 1;
        }
    }
}

function game(){
    let playerCount = 0;
    let computerCount = 0;
    while(playerCount !== 5 && computerCount !== 5){
        let playerSelection = prompt('Your choise?');
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result === 0){
            computerCount ++;
        }
        else if (result === 1){
            playerCount ++;
        }
        result = 0;
        console.log('Player: ' + playerCount);
        console.log('Computer: ' + computerCount);
    }
    if (playerCount === 5){
        console.log('YOU ARE WINNER');
    }
    else{
        console.log('COMPUTER IS WINNER');
    }
}

game();