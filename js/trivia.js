/*
    Two dimensional arrays.
 */


var questions = [
    ['Who is considered the father of the modern day GNU and free software movement?', 'Richard Stallman'],
    ['Who is one of the founders of the EFF and also a founder of the Cypherpunks mailing list?', 'John Gilmore'],
    ['Who is the Linux OS named after?', 'Linus Torvalds']
];

var correctAnswers = [];
var incorrectAnswers = [];
var answer;


function printCorrect() {
    document.write('<h1>Correct Answers: ' + correctAnswers.length + '</h1>');
    for (i = 0; i < correctAnswers.length; i += 1) {
        document.write('<p>' + correctAnswers[i] + '</p>' );
    }
}


function printIncorrect() {
    document.write('<h1>Incorrect Answers: ' + incorrectAnswers.length + '</h1>');
    for (i = 0; i < incorrectAnswers.length; i += 1) {
        document.write('<p>' + incorrectAnswers[i] + '</p>' );
    }
}


for (var i = 0; i < questions.length; i += 1) {
    answer = prompt(questions[i][0]);
    if (answer === questions[i][1]) {
        alert('Correct!');
        correctAnswers.push(questions[i].join(' '));
    } else {
        alert('Wrong!');
        incorrectAnswers.push(questions[i].join(' '));
    }
}


printCorrect();
printIncorrect();