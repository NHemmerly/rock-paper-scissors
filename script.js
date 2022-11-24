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
    document.getElementById("c-choice").textContent = computerChoice;
    document.getElementById("u-choice").textContent = userChoice;
}

//Displays winner when WinCon is reached
function displayWinner(winner) {

}

function playRound(e) {

    let computerChoice = getComputerAnswer();
    let userChoice = (e.target.innerText);

    switch (userChoice) {
        case 'Rock':
            if (computerChoice === 'Scissors') {
                userCount++;
                console.log('Win!');
                break;
            } else if (computerChoice === 'Paper') {
                computerCount++;
                console.log('Lose!');
                break;
            } else {
                console.log('Tie!');
                break;
            }
        case 'Paper':
            if (computerChoice === 'Rock') {
                userCount++;
                console.log('Win!');
                break;
            } else if (computerChoice === 'Scissors') {
                computerCount++;
                console.log('Lose!');
                break;
            } else {
                console.log('Tie!');
                break;
            }
        case 'Scissors':
            if (computerChoice === 'Paper') {
                userCount++;
                console.log('Win!');
                break;
            } else if (computerChoice === 'Rock') {
                computerCount++;
                console.log('Lose!');
                break;
            } else {
                console.log('Tie!');
                break;
            }
    }
    displayPlayerChoice(userChoice, computerChoice);
    winCon(userCount, computerCount);

}

const btns = document.querySelectorAll('.btn');


let computerCount = 0;
let userCount = 0;

btns.forEach(btn => btn.addEventListener('click', playRound));


