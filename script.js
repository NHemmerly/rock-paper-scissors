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
                return 1;
            } else if (computerChoice === 'paper') {
                computerCount++;
                return 0;
            } else {
                return 2;
            }
        case 'Paper':
            if (computerChoice === 'rock') {
                userCount++;
                return 1;
            } else if (computerChoice === 'scissors') {
                computerCount++;
                return 0;
            } else {
                return 2;
            }
        case 'Scissors':
            if (computerChoice === 'paper') {
                userCount++;
                return 1;
            } else if (computerChoice === 'rock') {
                computerCount++;
                return 0;
            } else {
                return 2;
            }
    }

    console.log(userChoice);
    console.log(computerChoice);
}

function game() {

    

    while (userCount !== 5 || computerCount !== 5) {

        let round = playRound(e);
        //If 1, user wins. If 0 user loses. If 2 it's a tie!
        if (round === 1) {
            console.log('You Win!');
        } else if (round === 0) {
            console.log('You Lose!');
        } else if (round === 2) {
            console.log('Tie!');
        }
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
btns.forEach(btn => btn.addEventListener('click', playRound));

let computerCount = 0;
let userCount = 0;

game();

