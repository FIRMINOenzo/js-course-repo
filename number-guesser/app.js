const UIgame = document.querySelector('.game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message'),
      UIcontainer = document.querySelector('.container'),
      UIconfigBtn = document.querySelector('.config-btn'),
      UIconfiguration = document.querySelector('.configuration'),
      UIsaveConfigBtn = document.querySelector('#save-config-btn'),
      UIrealMinNum = document.querySelector('#config-min-num'),
      UIrealMaxNum = document.querySelector('#config-max-num');
      
let min = parseInt(UIrealMinNum.value),
    max = parseInt(UIrealMaxNum.value),
    winningNum = getRandomNumber(min, max),
    guessesLeft = 3;

UIminNum.textContent = min;
UImaxNum.textContent = max;

UIconfigBtn.addEventListener('click', () => {
    UIconfiguration.style.display = 'block';
})

UIsaveConfigBtn.addEventListener('click', () => {
    min = parseInt(UIrealMinNum.value);
    max = parseInt(UIrealMaxNum.value);

    UIminNum.textContent = min;
    UImaxNum.textContent = max;

    guessesLeft = 3;

    winningNum = getRandomNumber(min, max);

    UIconfiguration.style.display = 'none';

    setMessage('New config saved', 'blue')
})

UIgame.addEventListener('mousedown', (e) => {
    if(e.target.className.includes('play-again')) {
        window.location.reload();
    }
})

UIguessBtn.addEventListener('click', () => {
    let guess = parseInt(UIguessInput.value);

    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    } else {
        if(guess === winningNum) {
            gameOver(true, `YOU WIN!  ${winningNum} is correct`);
        } else {
            guessesLeft -= 1;

            if(guessesLeft === 0){
                gameOver(false, `Game over!  ${winningNum} is the correct number`);
            } else {
                UIguessInput.style.borderColor = 'red';
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
                UIguessInput.value = "";
            }
        }
    }
})


function gameOver(won, msg) {
    let color;
    won === true ? color = 'green': color = 'red';

    UIguessInput.disabled = true;
    UIguessInput.style.borderColor = color;
    setMessage(msg, color);

    UIguessBtn.value = 'Play Again';
    UIguessBtn.className += 'play-again';
}


function setMessage(msg, color) {
    UImessage.style.color = color;
    UImessage.textContent = msg;
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}