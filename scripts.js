//
// 04-06
//

//var secondsPerMinute = 60;
//var minsPerHour = 60;
//var hoursPerDay = 24;
//var daysPerWeek = 7;
//var weeksPerYear = 52;
//var secondsPerDay = secondsPerMinute * minsPerHour * hoursPerDay;
//
//console.log(secondsPerDay);
//
//var yearsAlive = 25;
//var secondsAlive = secondsPerDay * daysPerWeek * weeksPerYear * yearsAlive;
//
//console.log(secondsAlive);



//
// 04-07
//

//var randomNumber = Math.floor(Math.random() * 6) + 1;
//
//
//var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
//
//if (parseInt(guess) === randomNumber ) {
//    document.write('<p>Sorcerer!</p>');
//} else {
//    document.write('<p> Nopers. It was ' + randomNumber + '</p>');
//}



//
// 05-01
//


/* number generator.
 * input any upper limit of numbers
 * into getRandom()
 */

//function getRandom( upper ) {
//    var randomNumber = Math.floor( Math.random() * upper ) + 1;
//    return randomNumber;
//}
//
//console.log(getRandom(1000));

//
// 05-05
//


/*
 Random generator with inputs for arbitrary low and high numbers
 */


function letsGetRandom ( low, high ) {
    if ( high <= low ) {
        throw new Error( 'Low must be an integer less than high.' );
    } else {
        if ( isNaN( low ) || isNaN( high )) {
            throw new Error( 'You need to use actual integers, do NOT spell them out' );
        } else {
            return Math.floor( Math.random() * ( high - low + 1 ) ) + low;
        }
    }
}
console.log( letsGetRandom( 10, 11 ) );
