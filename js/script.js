
let game = ['Rock', 'Paper', 'Scissors'] // rock paper scissors options

function computerPlay(){
    const randomChoice = game[Math.floor(Math.random() * game.length)]; 
    return randomChoice
}

function gameRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === 'ROCK' && computerSelection === 'Scissors'){
        console.log('You Win!');
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'Paper'){
        console.log('You lost...');
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'Rock'){
        console.log('It\'s a tie');
    }
    else {
        console.log('Something went wrong :(')
    }
}

function gameMatch(){
    for (let i = 0; i < 5; i++) {
        gameRound()
     }
}

const computerSelection = computerPlay();
const playerSelection = 'rock';
console.log(gameRound(playerSelection, computerSelection));

