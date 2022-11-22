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

function playRound(e) {

    let computerChoice = getComputerAnswer();
    let userChoice = (e.target.innerText);

    switch (userChoice) {
        case 'Rock':
            if (computerChoice === 'scissors') {
                userCount++;
                break;
            } else if (computerChoice === 'paper') {
                computerCount++;
                break;
            } else {
                break;
            }
        case 'Paper':
            if (computerChoice === 'rock') {
                userCount++;
                break;
            } else if (computerChoice === 'scissors') {
                computerCount++;
                break;
            } else {
                break;
            }
        case 'Scissors':
            if (computerChoice === 'paper') {
                userCount++;
                break;
            } else if (computerChoice === 'rock') {
                computerCount++;
                break;
            } else {
                break;
            }
    }

    console.log(userChoice);
    console.log(computerChoice);
}

function game() {

    while (userCount !== 5 || computerCount !== 5) {

        console.log(userCount);
        console.log(computerCount);
    }

    if (userCount > computerCount)
    {
        console.log(`You win! score: ${userCount} to ${computerCount}`);
    }
    else if (computerCount > userCount)
    {
        console.log(`Computer wins! score: ${userCount} to ${computerCount}`);
    }
    else
    {
        console.log(`It's a tie! score: ${userCount} to ${computerCount}`);
    }
}

const btns = document.querySelectorAll('.btn');


let computerCount = 0;
let userCount = 0;

btns.forEach(btn => btn.addEventListener('click', playRound));

game();

