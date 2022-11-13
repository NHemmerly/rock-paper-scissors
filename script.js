//Random number generator selects a number from 0 to 2
function getComputerAnswer() {
    let answer = Math.floor(Math.random() * 2);
    let answerWord = '';

    if (answer === 0) 
    {
        answerWord = 'rock';
    }
    else if (answer === 1) 
    {
        answerWord = 'paper';
    }
    else 
    {
        answerWord = 'scissors';
    }
         
    return answerWord;
}