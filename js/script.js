 // rock paper scissors options
let playerScore = 0
let computerScore = 0
let game = ['rock', 'paper', 'scissors']


// DOM items



function computerPlay(){
    const randomChoice = game[Math.floor(Math.random() * game.length)]; 
    return randomChoice
}

let Win = 'You Win!'
let Lose = 'You lost...'
let Draw = 'It\'s a tie'


document.addEventListener('click', selections)

function selections(event){
    let selection = event.target;
        // Rock Button
    if (selection.classList.contains("optionBtn") && selection.id === ("rockdiv") || selection.classList.contains("selec") && selection.id === ("rockimg")) {
        gameRound(game[0]);
    }   // Paper Button
    else if(selection.classList.contains("optionBtn") && selection.id === ("paperdiv") || selection.classList.contains("selec") && selection.id === ("paperimg")){
        gameRound(game[1]);
    }   // Scissors Button
    else if(selection.classList.contains("optionBtn") && selection.id === ("scissorsdiv") || selection.classList.contains("selec") && selection.id === ("scissorsimg")){
        gameRound(game[2]);
    }
}

// Game logic
function gameRound(playerSelection){
    const computerSelection = computerPlay();
                            // Win match
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore += 1;
        const currentPlayerScore = document.querySelector(".playerScor").innerHTML = `${playerScore}`;
        console.log(Win)
    }                      // Lost match
    else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore += 1;
        const currentComputerScore = document.querySelector(".computerScor").innerHTML = `${computerScore}`;
        console.log(Lose)
    }                       // Draw match
    else if (playerSelection === computerSelection){
        const currentPlayerScore = document.querySelector(".playerScor").innerHTML = `${playerScore}`;
        const currentComputerScore = document.querySelector(".computerScor").innerHTML = `${computerScore}`;
        console.log(Draw)
    }
    else {
        return ('Something went wrong :(')
    }
}
