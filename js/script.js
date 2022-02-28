
let game = ['Rock', 'Paper', 'Scissors'] // rock paper scissors options
let playerScore = 0;
let computerScore = 0;
const computerSelection = computerPlay();
const playerSelection = prompt('Rock Paper or Scissors???');

function computerPlay(){
    const randomChoice = game[Math.floor(Math.random() * game.length)]; 
    return randomChoice
}

function gameRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === 'ROCK' && computerSelection === 'Scissors'){
        return ('You Win!');
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'Paper'){
        return ('You lost...');
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'Rock'){
        return ('It\'s a tie');
    }
    else {
        return ('Something went wrong :(')
    }
}

function gameMatch(){
    if (eachRound === 'You Win!'){
        playerScore++
    }
    else if(eachRound === 'You lost...'){
        computerScore++
    }
}


let eachRound = gameRound(playerSelection, computerSelection);
gameMatch()
console.log(eachRound)
console.log(playerScore)
