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

function round(computer, user) {

    switch (user) {
        
        case 'rock':
            if (computer === 'paper')
            {
                computerCount++;
                return `You Lose! ${computer} covers ${user}!`;
            }
            else if (computer === 'scissors')
            {
                userCount++;
                return `You Win! ${user} smashes ${computer}!`;
            }
            return `${user} to ${computer}! It's a tie!`;
        case 'paper':
            if (computer === 'rock')
            {
                userCount++;
                return `You Win! ${user} covers ${computer}!`;
            }
            else if (computer === 'scissors')
            {
                computerCount++;
                return `You Lose! ${computer} cuts ${user}!`;
            }
            return `${user} to ${computer}! It's a tie!`;
        case 'scissors':
            if (computer === 'rock')
            {
                computerCount++;
                return `You Lose! ${computer} smashes ${user}!`;
            }
            else if (computer  === 'paper')
            {
                userCount++;
                return `You Win! ${user} cuts ${computer}!`;
            }
            return `${user} to ${computer}! It's a tie!`; 
    }
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

let computerCount = 0;
let userCount = 0;

game();

