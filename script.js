//Random number generator selects a number from 0 to 2
function getComputerAnswer() {
    let answer = Math.floor(Math.random() * 3);
         
    return answer;
}

function getUserAnswer(promptAnswer) {
    promptAnswer = promptAnswer.toLowerCase();
    if (promptAnswer === 'rock' || promptAnswer === 'paper' || promptAnswer === 'scissors') {

        if (promptAnswer === 'rock') 
        {
            promptAnswer = 0;
        }
        else if (promptAnswer === 'paper') 
        {
            promptAnswer = 1;
        }
        else{
            promptAnswer = 2;
        }

        return promptAnswer;
    }

    console.log("Please enter either 'rock', 'paper', or 'scissors.'")
    
}

function round(computer, user) {

    let result;

    switch (user) {
        
        case 0:
            if (computer === 1)
            {
                result = 0;
            }
            else if (computer === 2)
            {
                result = 1;
            }
            break;
        case 1:
            if (computer === 0)
            {
                result = 1;
            }
            else if (computer === 2)
            {
                result = 0;
            }
            break;
        case 2:
            if (computer === 0)
            {
                result = 0;
            }
            else if (computer  === 1)
            {
                result = 1;
            }
            break;
        default:
            result = 2;
            break;
    }
    return result;
}

function game(outcome) {
    if (outcome === 0) 
    {
        console.log("You Lose!");
        computerCount++;
    }
    else if (outcome === 1)
    {
        console.log("You Win!");
        userCount++;
    }
    else
    {
        console.log("Tie!")
    }
}


let computerCount = 0;
let userCount = 0;

for (let i = 0; i < 5; i++){
    let userAnswer;
    let computerChoice;

    computerChoice = getComputerAnswer();
    
    while (userAnswer === undefined) {
        userAnswer = getUserAnswer(window.prompt('Rock! paper! scissors!'));
    }

    let outcome = round(computerChoice, userAnswer);
    game(outcome);
    
    
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