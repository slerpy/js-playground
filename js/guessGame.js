/*
    Simple guessing game, just making sure I grasp do while loops.
 */


var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber ( upper ) {
    var num = Math.floor(Math.random() * upper) + 1;
    return num;
}

do {
    guess = prompt('I am thinking of a number between 1 and 10. What is it?');
    guessCount += 1;
    if (parseInt(guess) === randomNumber ) {
        correctGuess = true;
    }
} while (! correctGuess)
    document.write('<h1>Nice!</h1>');
document.write('It took you ' + guessCount + ' attempts to get the right answer.');