console.log("Program Started Successfully.")


var verb = prompt("Gimme A Verb.");
var noun = prompt("Gimme A Noun.");
var adjective = prompt("Now an adjective, please.");
var adverb = prompt("K, now an adverb");
var phrase = prompt("K, lastly, a phrase such as 'omg! a hotdog!'")

var story = "<h2>A man " + adverb.toLowerCase() + " " + verb.toLowerCase() + " " + "to the " + noun.toLowerCase() + " and shouted " + phrase + "!</h2>";

document.write(story);

console.log(verb);
console.log(noun);
console.log(adjective);
console.log(adverb);
console.log(phrase);




console.log("Program Completed Successfully.");