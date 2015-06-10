/*
    simple loop in which we count how
    many guesses it takes
    the computer to guess our randomly
    generated number.
 */

var upper = 10000000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber (upper) {
    return Math.floor( Math.random() * upper ) + 1;
}
var tStart = performance.now();
while ( guess !== randomNumber ) {
    guess = getRandomNumber(upper);
    attempts += 1;
}
var tEnd = performance.now();
document.write('Our number is: <strong>' + randomNumber + '</strong><br><br>');
document.write('It took the computer <strong>' + attempts + '</strong> guesses to get our number.<br><br>');
document.write('<h6>It took <strong>' + Math.floor(tEnd - tStart) + '</strong> milliseconds to guess <strong>' + attempts.toLocaleString() + '</strong> times.</h6>')