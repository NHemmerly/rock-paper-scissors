//Random number generator selects a number from 0 to 2
function getComputerAnswer() {
    let answer = Math.floor(Math.random() * 3);
         
    return answer;
}

function getUserAnswer(promptAnswer) {
    if (typeof promptAnswer === 'string') {
        promptAnswer = promptAnswer.toLowerCase();

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

console.log(getComputerAnswer());