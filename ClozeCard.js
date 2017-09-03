function ClozeCard (text, cloze){
	this.fullText = text;
	this.cloze = cloze;
	this.partial = function (){
		if(text.includes(cloze)){
			var partial = text.replace(cloze, "...");
			console.log(partial);
			} else{
				console.log("Error that word is not in the card.");
			}
		};
}

var president = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
var gallon = new ClozeCard("There are 16 cups in a gallon", "16");

var brokenCloze = new ClozeCard("This doesn't work", "oops");

console.log(president.fullText);
console.log(president.cloze);
president.partial();

console.log("------------");

console.log(gallon.fullText);
console.log(gallon.cloze);
gallon.partial();

console.log("------------");
brokenCloze.partial();

module.exports = ClozeCard;