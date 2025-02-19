// create a variable for a random number
let randomNumber = Math.floor(Math.random() * 100) + 1;
// get the guesses paragraph through a class value
const guesses = document.querySelector('.guesses');
// get the references to other classes through their value
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

//set the guess count entered by the user
let guessCount = 1;
//create a resetButton to reset the game
let resetButton;
guessField.focus()

//function for checking the user guess 
const checkGuess = () => {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses:';
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations you got it correctly';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!Game Over!!!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'last guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'last guess wass too high!'
        }
    }
    guessCount++;
    guessField.value = ''
    guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

const setGameOver = () => {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'start new game'
    document.body.append(resetButton)
    resetButton.addEventListener('click', resetGame);
}

const resetGame = () => {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
