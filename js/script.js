 // rock paper scissors options
let playerScore = 0;
let computerScore = 0;
let game = ['rock', 'paper', 'scissors'];

// Game logic
function gameRound(playerSelection){
    const computerSelection = computerPlay();
    selectedImage(playerSelection, computerSelection);
                            // Win match
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore += 1;
        resultOne.innerHTML = `You Won!`;
        resultTwo.innerHTML = `${capitalizeFirst(playerSelection)} beats ${computerSelection}!`;
        PlayerScor.innerHTML = `${playerScore}`;
        gameScore(playerScore, computerScore);
    }                      // Lost match
    else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore += 1;
        resultOne.innerHTML = `You Lost!`;
        resultTwo.innerHTML = `${capitalizeFirst(playerSelection)} is beaten by ${computerSelection}...`;
        ComputerScor.innerHTML = `${computerScore}`;
        gameScore(playerScore, computerScore);
    }                       // Draw match
    else if (playerSelection === computerSelection){
        resultOne.innerHTML = `It\`s A Tie!`;
        resultTwo.innerHTML = `${capitalizeFirst(playerSelection)} ties with ${computerSelection}`;
        PlayerScor.innerHTML = `${playerScore}`;
        ComputerScor.innerHTML = `${computerScore}`;
        gameScore(playerScore, computerScore);
    }
    else {
        return ('Something went wrong :(');
    }
}

// Score tracker
function gameScore(playerScore, computerScore){
    if(playerScore === 5 || computerScore === 5){
        if(playerScore > computerScore){
            gameoverModal.classList.add('active');
            overlay.classList.add('active');
            gameoverText.textContent = 'You Won! 😲';
        }
        else if(computerScore > playerScore){
            gameoverModal.classList.add('active');
            overlay.classList.add('active');
            gameoverText.textContent = 'You Lost... 😞';
        }
        else{
            gameoverModal.classList.add('active');
            overlay.classList.add('active');
            gameoverText.textContent = 'It was a tie';
        }
    }
    
}


// DOM items
const playerImg = document.getElementById('playerimg');
playerImg.setAttribute('draggable', 'false');

const computerImg = document.getElementById('computerimg');
computerImg.setAttribute('draggable', 'false');

const resultOne = document.querySelector('.resultOne');
const resultTwo = document.querySelector('.resultTwo');

const PlayerScor = document.querySelector('.playerScor');
const ComputerScor = document.querySelector('.computerScor');

const gameoverModal = document.getElementById('gameoverModal')
const gameoverText = document.getElementById('gameoverText')

const overlay = document.getElementById('overlay');

const restartBtn = document.getElementById('restartBtn');

function computerPlay(){
    const randomChoice = game[Math.floor(Math.random() * game.length)]; 
    return randomChoice;
}

document.addEventListener('click', selections);
restartBtn.addEventListener('click', restart);

function selections(event){
    let selection = event.target;
        // Rock Button
    if (selection.classList.contains("optionBtn") && selection.id === ("rockdiv") || selection.classList.contains("selec") && selection.id === ("rockimg")) {
        gameRound(game[0]);
        selectedImage(game[0]);
    }   // Paper Button
    else if(selection.classList.contains("optionBtn") && selection.id === ("paperdiv") || selection.classList.contains("selec") && selection.id === ("paperimg")){
        gameRound(game[1]);
        selectedImage(game[1]);
    }   // Scissors Button
    else if(selection.classList.contains("optionBtn") && selection.id === ("scissorsdiv") || selection.classList.contains("selec") && selection.id === ("scissorsimg")){
        gameRound(game[2]);
        selectedImage(game[2]);
    }
}

function selectedImage(playerSelection, computerSelection){
                // Rock image
    switch(playerSelection){
        case 'rock':
            playerImg.src = 'img/rock-icon.png';
            playerImg.style.visibility = "visible";
        break;  // Paper image
        case 'paper':
            playerImg.src = 'img/paper-icon.png';
            playerImg.style.visibility = "visible";
        break;  // Scissors image
        case 'scissors':
            playerImg.src = 'img/scissors-icon.png';
            playerImg.style.visibility = "visible";
        break;
    }
                // Rock image
    switch(computerSelection){
        case 'rock':
            computerImg.src = 'img/rock-icon.png';
            computerImg.style.visibility = "visible";
        break;  // Paper image
        case 'paper':
            computerImg.src = 'img/paper-icon.png';
            computerImg.style.visibility = "visible";
        break;  // Scissors image
        case 'scissors':
            computerImg.src = 'img/scissors-icon.png';
            computerImg.style.visibility = "visible";
        break;
    }
}

function capitalizeFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Restart Game
function restart() {
    playerScore = 0;
    computerScore = 0;
    resultOne.textContent = 'Choose Your Weapon';
    resultTwo.textContent = 'First to 5 points wins!';
    PlayerScor.innerHTML = '0';
    ComputerScor.innerHTML= '0';
    playerImg.src = '';
    playerImg.style.visibility = "hidden";
    computerImg.src = '';
    computerImg.style.visibility = "hidden";
    gameoverModal.classList.remove('active')
    overlay.classList.remove('active')
  }