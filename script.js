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




let computerChoice;
let computerCount = 0;
let userCount = 0;

for (let i = 0; i < 5; i ++){
    let userAnswer;
    while (userAnswer === undefined) {
        userAnswer = getUserAnswer(window.prompt('Rock! paper! scissors!'));
        computerChoice = getComputerAnswer();
    }
    
    switch (userAnswer) {
        case 0:
            if (computerChoice === 1)
            {
                console.log("Lose!");
                computerCount++;
            }
            else if (computerChoice === 2)
            {
                console.log("Win!");
                userCount++;
            }
            else {
                console.log("Tie!");
            }
            break;
        case 1:
            if (computerChoice === 0)
            {
                console.log("Win!");
                userCount++;
            }
            else if (computerChoice === 2)
            {
                console.log("Lose!");
                computerCount++;
            }
            else 
            {
                console.log("Tie!");
            }
            break;
        default:
            if (computerChoice === 0)
            {
                console.log("Lose!");
                computerCount++;
            }
            else if (computerChoice === 1)
            {
                console.log("Win!");
                userCount++;
            }
            else
            {
                console.log("Tie!");
            }

            break;
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