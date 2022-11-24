//Random number generator selects a number from 0 to 2
function getComputerAnswer() {
    let answer = Math.floor(Math.random() * 3);
    
    switch (answer){
        case 0:
            answer = 'rock';
            break;
        case 1:
            answer = 'paper';
            break;
        default:
            answer = 'scissors';
            break;
    }
    return answer;
}

//Updates score display, and decides winner
function winCon (userCount, computerCount) {

    document.getElementById('u-score').textContent = `${userCount}`;
    document.getElementById('c-score').textContent = `${computerCount}`;

    if (userCount === 5) {
        disableButtons();
        console.log('You Win!');
    }
    else if (computerCount === 5) {
        disableButtons();
        console.log('Computer Wins!');
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
    
}

//Displays winner when WinCon is reached
function displayWinner(winner) {

}

function playRound(e) {

    let computerChoice = getComputerAnswer();
    let userChoice = (e.target.innerText);

    switch (userChoice) {
        case 'Rock':
            if (computerChoice === 'scissors') {
                userCount++;
                console.log('Win!');
                break;
            } else if (computerChoice === 'paper') {
                computerCount++;
                console.log('Lose!');
                break;
            } else {
                console.log('Tie!');
                break;
            }
        case 'Paper':
            if (computerChoice === 'rock') {
                userCount++;
                console.log('Win!');
                break;
            } else if (computerChoice === 'scissors') {
                computerCount++;
                console.log('Lose!');
                break;
            } else {
                console.log('Tie!');
                break;
            }
        case 'Scissors':
            if (computerChoice === 'paper') {
                userCount++;
                console.log('Win!');
                break;
            } else if (computerChoice === 'rock') {
                computerCount++;
                console.log('Lose!');
                break;
            } else {
                console.log('Tie!');
                break;
            }
    }

    winCon(userCount, computerCount);

}

const btns = document.querySelectorAll('.btn');


let computerCount = 0;
let userCount = 0;

btns.forEach(btn => btn.addEventListener('click', playRound));


