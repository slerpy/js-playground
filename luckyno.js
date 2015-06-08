var userNumber = prompt("To find your lucky number, give me an integer between 1 and 100.");
var random = Math.floor(Math.random() * parseInt(userNumber)) + 1;
//console.log(random);
document.write("<h2>OOOH! Your lucky number is " + random + "!</h2>");
document.write("<h4>My patent pending algorithm is really good at picking lucky numbers. Go play the lottery or something.</h4>")