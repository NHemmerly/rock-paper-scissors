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
    }
    else if (computerCount === 5) {
        disableButtons();
        displayWinner("CPU Wins!");
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
    document.getElementById("winner").textContent = winner;
}

function playRound(e) {

    let computerChoice = getComputerAnswer();
    let userChoice = (e.target.id);
    console.log(userChoice);
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
    displayPlayerChoice(userChoice, computerChoice);
    winCon(userCount, computerCount);

}

const btns = document.querySelectorAll('.btn');


let computerCount = 0;
let userCount = 0;
let round = 0;

btns.forEach(btn => btn.addEventListener('click', playRound));


