//
// 04-06
//

var secondsPerMinute = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMinute * minsPerHour * hoursPerDay;

console.log(secondsPerDay);

var yearsAlive = 25;
var secondsAlive = secondsPerDay * daysPerWeek * weeksPerYear * yearsAlive;

console.log(secondsAlive);

//
// 04-07
//

var randomNumber = Math.floor(Math.random() * 6) + 1;


var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

if (parseInt(guess) === randomNumber ) {
    document.write('<p>Sorcerer!</p>');
} else {
    document.write('<p> Nopers. It was ' + randomNumber + '</p>');
}

