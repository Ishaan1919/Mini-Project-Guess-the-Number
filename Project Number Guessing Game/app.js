let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

const p = document.createElement('p');

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(guess<1 || guess>100){
        alert('Please enter a number within the valid range (1-100)');
        userInput.value = '';
    }
    else if(!(guess>0 && guess<101)){
        alert('Please enter a valid number');
        userInput.value = '';
    }
    else{
        prevGuess.push(guess);
        numGuess++;
        if(numGuess>10){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);

        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage("You guessed it right");
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage("Your Guess is TOOO small");
    }
    else if(guess>randomNumber){
        displayMessage("Your Guess in TOOO large");
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    console.log(numGuess);
    remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.setAttribute('disabled','');
    submit.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'> Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        startOver.removeChild(p);
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        playGame = true;
    });
}















// Just Basic working of the game

// const num = parseInt((Math.random() * 100) + 1); // rondom number generated
// console.log(num);
// const form = document.querySelector('form');
// let arr=[];

// let submitCounts = 0;

// let displayGuesses = ""; // this is a string that will display the gusses
// const showGuesses = document.getElementById('guesses'); // to show the numbers guess till now
// form.addEventListener('submit',function(event){
//     event.preventDefault();
    
//     ++submitCounts;

//     const value = parseInt(document.getElementById('guessField').value); // Input number
//     arr.push(value);
    
//     console.log(arr);

//     displayGuesses += arr[arr.length-1] + ', ';
//     showGuesses.innerHTML = displayGuesses;

//     const showing = document.getElementsByClassName('lowOrHi')[0]; // print the message whether the number guessed is right or not
    
//     const remainingGuesses = document.getElementsByClassName('lastResult')[0];
//     remainingGuesses.innerHTML = 10-submitCounts;
//     if(num==value){
//         showing.innerHTML = 'Your guess is right. Reload to play again';
//     }
//     else if(submitCounts==10){
//         showing.innerHTML = 'You have used all your attempts and failed to guess the number, so reload to play again for another number.'
//     }
//     else if(num>value){
//         showing.innerHTML = 'Your guess is too small';
//     }
//     else if(num<value){
//         showing.innerHTML = 'Your guess is too large';
//     }
//     else{
//         showing.innerHTML = 'Try again';
//     }

// })
