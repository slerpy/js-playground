console.log("Program Started Successfully.")

verb = prompt("Gimme A Verb.");
noun = prompt("Gimme A Noun.");
adjective = prompt("Now an adjective, please.");
adverb = prompt("K, now an adverb");
phrase = prompt("K, lastly, a phrase such as 'omg! a hotdog!'")

story = "A man " + adverb.toLowerCase() + " " + verb.toLowerCase() + " " + "to the " + noun.toLowerCase() + " and shouted " + phrase + "!"

document.write(story);

console.log(verb);
console.log(noun);
console.log(adjective);
console.log(adverb);
console.log(phrase);




console.log("Program Completed Successfully.");