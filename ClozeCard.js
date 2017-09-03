function ClozeCard (text, cloze){
	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "...");
}

var president = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
var gallon = new ClozeCard("There are 16 cups in a gallon", "16");

var brokenCloze = new ClozeCard("This doesn't work", "oops");

console.log(president.fullText);
console.log("------------");
console.log(president.cloze);
console.log("------------");
console.log(president.partial);


console.log(gallon.fullText);
console.log("------------");
console.log(gallon.cloze);
console.log("------------");
console.log(gallon.partial);

console.log(brokenCloze.partial);