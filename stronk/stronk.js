/*
    simple loop in which we count how
    many guesses it takes
    the computer to guess our randomly
    generated number.
 */

var upper = 100000000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber (upper) {
    return Math.floor( Math.random() * upper ) + 1;
}

while ( guess !== randomNumber ) {
    guess = getRandomNumber(upper);
    attempts += 1;
}

document.write('Our number is: <strong>' + randomNumber + '</strong><br><br>');
document.write('It took the computer <strong>' + attempts + '</strong> guesses to get our number.');