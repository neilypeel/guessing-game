// This happens with each page refresh
var randomNumber = 1 + Math.floor(Math.random() * 100);
var guess =  document.getElementById('userGuess');
var guesses = 0;
var lowOrHi = document.querySelector('.lowOrHi');
var guessP = document.querySelector('.guesses');
console.log("The number to be guessed is foo: " + randomNumber);
var lastResult = document.querySelector('.lastResult');
// This happens with each click
document.getElementById('checkGuess').addEventListener('click', function(event) {
    // write some code here
    guesses += 1;

    var userGuess = Number(guess.value);
    console.log("The user guess is: " + userGuess);

    if(userGuess == randomNumber){
        // ToDo: Update the #lowOrHi element with "You Won!"
        console.log("Congratulations you won!");
        lowOrHi.textContent = "you won";
    } else if (userGuess > randomNumber) {
        // ToDo: Update the #lowOrHi element with "Your guess is too high"
        console.log("Your guess is too high!");
        lowOrHi.textContent = "Your guess is too high";
    } else if (userGuess < randomNumber) {
        // ToDo: Update the #lowOrHi element with "Your guess is too low"
        console.log("Your guess is too low");
        lowOrHi.textContent = "Your guess is too low";
    };
    // ToDo: Update the #guesses element with the number of guesses
    console.log("total number of guesses " + guesses);
    guessP.textContent = "guesses:" + guesses;

    console.log("last result");
     lastResult.textContent = "last user guess";


    // ToDO: Update #lastResult element with the last user guess (userGuess)
});  