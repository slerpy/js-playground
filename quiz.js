/* a simple quiz to confirm my understanding of js conditionals */

var correctAnswers = 0;
var question1 = 'What is 1 + 1?';
var question1Answer = 2;
var question2 = 'What is 2 * 7';
var question2Answer = 14;
var question3 = 'What is the capital of Iceland?';
var question3Answer = 'REYKJAVIK';
var question4 = 'What is the best city in the US?';
var question4Answer = 'PORTLAND';
var question5 = 'T or F: Portland is the best city in the US!';
var question5Answer = 'TRUE';

alert('Welcome! You are about to be asked 5 insanely difficult questions! You will be asked a series of 5 questions. Get none correct and you will be mocked mercilessly.');

/* Alert user they're about to play then prompt them with the first question.

Question 1 */
var userAnswer = prompt(question1);

if ( parseInt(userAnswer) === question1Answer ) {
    correctAnswers = correctAnswers + 1;
    alert('Correct! Your score is ' + correctAnswers);
} else {
    alert('Sorry, that answer was incorrect. Your current score is: ' + correctAnswers);
}



/* Question 2 */

var userAnswer = prompt(question2);

if ( parseInt(userAnswer) === question2Answer ) {
    correctAnswers = correctAnswers + 1;
    alert('Nice! Your score is ' + correctAnswers);
} else {
    alert('Nope, that answer was incorrect. Your current score is: ' + correctAnswers);
}



/* Question 3 */

var userAnswer = prompt(question3);

if ( userAnswer.toUpperCase() === question3Answer ) {
    correctAnswers = correctAnswers + 1;
    alert('Awesome! Your score is ' + correctAnswers);
} else {
    alert('Teehee, that answer was incorrect. Your current score is: ' + correctAnswers);
}



/* Question 4 */

var userAnswer = prompt(question4);

if ( userAnswer.toUpperCase() === question4Answer ) {
    correctAnswers = correctAnswers + 1;
    alert('Ok smarty pants! Your score is ' + correctAnswers);
} else {
    alert('Daaawwwww, that answer was incorrect. Your current score is: ' + correctAnswers);
}



/* Question 5 */

var userAnswer = prompt(question5);

if ( userAnswer.toUpperCase() === question5Answer ) {
    correctAnswers = correctAnswers + 1;
    alert('Ok smarty pants! Your score is ' + correctAnswers);
} else {
    alert('Daaawwwww, that answer was incorrect. Your current score is: ' + correctAnswers);
}
console.log(correctAnswers);



/* Total up score and dish out rewards or mockery. */

if ( correctAnswers > 4 ){
    document.write( "<p>Sorcery! You have earned a gold star or something else equally cool.</p>" );
} else if ( correctAnswers === 3 || correctAnswers === 4 ) {
    document.write( "<p>Decent!</p>" );
} else if ( correctAnswers === 1 || correctAnswers === 2 ) {
    document.write( "<p>At least you got some right. Right?</p>" );
} else {
    document.write( "<p>You're kinda special aren't ya? Come back in a few years after your brain has grown larger than a jellybean.</p>" );
}