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

function getUserAnswer() {

    let promptAnswer = window.prompt('Rock! paper! scissors!');
    promptAnswer = promptAnswer.toLowerCase();

    while (true)
    {
        if (promptAnswer === 'rock')
        {
            break;
        }
        else if (promptAnswer === 'paper')
        {
            break;
        }
        else if (promptAnswer === 'scissors')
        {
            break;
        }
        console.log("Please enter 'rock', 'paper', or 'scissors'");
        promptAnswer = window.prompt('Rock! paper! scissors!');
        promptAnswer = promptAnswer.toLowerCase(); 
        continue;
    }
    
    return promptAnswer;
}

function round(e) {

    let computerChoice = getComputerAnswer();
    let userChoice = (e.target.innerText).toLowerCase();

    console.log(userChoice);
    console.log(computerChoice);
}

function game() {
    
    //for (let i = 0; i < 5; i++){
     //   let userAnswer;
     //   let computerChoice;

     //   userAnswer = getUserAnswer();
     //   computerChoice = getComputerAnswer();

     //   console.log(round(computerChoice, userAnswer));
     //}

    let userAnswer;
    let computerChoice;

    userAnswer = getUserAnswer();
    computerChoice = getComputerAnswer();

    console.log(round(computerChoice, userAnswer));

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
btns.forEach(btn => btn.addEventListener('click', round));

let computerCount = 0;
let userCount = 0;

game();

