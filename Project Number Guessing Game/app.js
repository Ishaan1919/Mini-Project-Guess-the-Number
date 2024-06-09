const num = parseInt((Math.random() * 100) + 1); // rondom number generated
console.log(num);
const form = document.querySelector('form');
let arr=[];

let submitCounts = 0;

let displayGuesses = ""; // this is a string that will display the gusses
const showGuesses = document.getElementById('guesses'); // to show the numbers guess till now
form.addEventListener('submit',function(event){
    event.preventDefault();
    
    ++submitCounts;

    const value = parseInt(document.getElementById('guessField').value); // Input number
    arr.push(value);
    
    console.log(arr);

    displayGuesses += arr[arr.length-1] + ', ';
    showGuesses.innerHTML = displayGuesses;

    const showing = document.getElementsByClassName('lowOrHi')[0]; // print the message whether the number guessed is right or not
    
    const remainingGuesses = document.getElementsByClassName('lastResult')[0];
    remainingGuesses.innerHTML = 10-submitCounts;
    if(num==value){
        showing.innerHTML = 'Your guess is right. Reload to play again';
    }
    else if(submitCounts==10){
        showing.innerHTML = 'You have used all your attempts and failed to guess the number, so reload to play again for another number.'
    }
    else if(num>value){
        showing.innerHTML = 'Your guess is too small';
    }
    else if(num<value){
        showing.innerHTML = 'Your guess is too large';
    }
    else{
        showing.innerHTML = 'Try again';
    }

})
