
let game = ['rock', 'paper', 'scissors'] // rock paper scissors options
let playerScore = 0
let computerScore = 0
let computerSelection = computerPlay();
let playerSelection;

function computerPlay(){
    const randomChoice = game[Math.floor(Math.random() * game.length)]; 
    return randomChoice
}

let Win = 'You Win!'
let Lose = 'You lost...'
let Draw = 'It\'s a tie'

// Game logic
function gameRound(playerSelection, computerSelection){     
    playerSelection = playerSelection.toLowerCase();
                            // Win match
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore += 1;
        console.log(`${Win} The score is ${playerScore} and ${computerScore}`);
    }                      // Lost match
    else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore += 1;
        console.log(`${Lose} The score is ${playerScore} and ${computerScore}`);
    }                       // Draw match
    else if (playerSelection === computerSelection){
        console.log(`${Draw} The score is ${playerScore} and ${computerScore}`);
    }
    else {
        return ('Something went wrong :(')
    }
}
gameMatch();

// 5 rounds loop
function gameMatch(){
    for (let i = 0; i < 5; i++){
        console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}. The score is ${playerScore}  ${computerScore}`)
        playerSelection = prompt('Rock Paper or Scissors???')
        computerSelection = computerPlay();
        gameRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore){
        console.log(Win)
    } 
    else if(playerScore === computerScore){
        console.log(Draw)
    }
    else{
        console.log(Lose)
    }
}



