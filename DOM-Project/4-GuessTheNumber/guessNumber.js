let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')

const guessSlot = document.querySelector('.guesses')
const reaming = document.querySelector('.lastResult')

const lowOrHi = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')


let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please enter a valid Number`)
    } else if (guess < 1) {
        alert(`Please enter a Number more than 1`)
    }
    else if (guess > 100) {
        alert(`Please enter a Number less than 100`)
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMassage(`Game Over. Random Number was ${randomNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMassage(`You guessed it right`)
        endGame()
    } else if (guess < randomNum) {
        displayMassage(`Number is Too Low`)
    } else if (guess > randomNum) {
        displayMassage(`Number is Too High`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}   `
    numGuess++;
    reaming.innerHTML = `${11 - numGuess}`

}

function displayMassage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute(`disabled`, '')
    p.classList.add('button')
    p.innerHTML = '<h1 id="newGame">Start New Games</h1>'
    startOver.appendChild(p)
    playGame = false;
    newGame()
}
function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        newGuess = 1
        guessSlot.innerHTML = ''
        reaming.innerHTML = `${11 - newGuess}  `;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })

}
