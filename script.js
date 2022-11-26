const btns = document.querySelectorAll('.btn');
const playAgain = document.getElementById('play-again');
const playAgainButton = playAgain.firstChild;

let computerCount = 0;
let userCount = 0;
let round = 0;

playAgain.style.visibility = 'hidden';

//Random number generator selects a number from 0 to 2
function getComputerAnswer() {
    let answer = Math.floor(Math.random() * 3);
    
    switch (answer){
        case 0:
            answer = 'Rock';
            break;
        case 1:
            answer = 'Paper';
            break;
        default:
            answer = 'Scissors';
            break;
    }
    return answer;
}

//Updates score display, and decides winner
function winCon (userCount, computerCount) {

    document.getElementById('u-score').textContent = `${userCount}`;
    document.getElementById('c-score').textContent = `${computerCount}`;
    document.getElementById('round').textContent = `Round: ${round}`;

    if (userCount === 5) {
        disableButtons();
        displayWinner("User wins!");
        playAgain.style.visibility = 'visible';
    }
    else if (computerCount === 5) {
        disableButtons();
        displayWinner("CPU Wins!");
        playAgain.style.visibility = 'visible';
    }
    
}

//Selects and disables buttons
function disableButtons() {
    let btns = document.getElementsByClassName('btn');
    for (btn of btns) {
        btn.disabled = true;
    }
}

//Displays each player's choice each playRound
function displayPlayerChoice(userChoice, computerChoice) {

    let firstUChild = document.getElementById("u-choice").firstChild;
    let firstCChild = document.getElementById("c-choice").firstChild;
    let elemUChoice = document.createElement("img");
    let elemCChoice = document.createElement("img");

    elemUChoice.src = `images/${userChoice}.png`;
    elemCChoice.src = `images/${computerChoice}.png`;
    document.getElementById("c-choice").replaceChild(elemCChoice, firstCChild);
    document.getElementById("u-choice").replaceChild(elemUChoice, firstUChild);
}

//Displays winner when WinCon is reached
function displayWinner(winner) {
    document.getElementById("winner").textContent = winner;
}

//Decide round outcome logic
function decideRound(userChoice, computerChoice) {

    const userWin = "User +1";
    const cpuWin = "CPU +1";
    const tie = "Tie!";

    switch (userChoice) {
        case 'Rock':
            if (computerChoice === 'Scissors') {
                userCount++;
                displayWinner(userWin);
                break;
            } else if (computerChoice === 'Paper') {
                computerCount++;
                displayWinner(cpuWin);
                break;
            } else {
                displayWinner(tie);
                break;
            }
        case 'Paper':
            if (computerChoice === 'Rock') {
                userCount++;
                displayWinner(userWin);
                break;
            } else if (computerChoice === 'Scissors') {
                computerCount++;
                displayWinner(cpuWin);
                break;
            } else {
                displayWinner(tie);
                break;
            }
        case 'Scissors':
            if (computerChoice === 'Paper') {
                userCount++;
                displayWinner(userWin);
                break;
            } else if (computerChoice === 'Rock') {
                computerCount++;
                displayWinner(cpuWin);
                break;
            } else {
                displayWinner(tie);
                break;
            }
    }
    round++;
}

function reloadGame() {
    playAgain.addEventListener('click', () => {
        location.reload();
    });
}

function playRound(e) {

    let computerChoice = getComputerAnswer();
    let userChoice = (e.target.id);
    

    decideRound(userChoice, computerChoice);
    displayPlayerChoice(userChoice, computerChoice);
    winCon(userCount, computerCount);
    reloadGame();

}

btns.forEach(btn => btn.addEventListener('click', playRound));



